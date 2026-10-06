#!/usr/bin/env python3
"""포트폴리오 갱신 장치.

입력(data/):
  ritual.json      리추얼 기록 (날짜별 open/close)
  tasks.json       과제 목록 (능력·상황·행동·결과·날짜)
  attendance.json  출석·제출 숫자 (출처 포함)
  holidays.json    평일 계산에서 뺄 공휴일 (선택)
  approved.json    내가 승인한 후보 id 목록

출력(public/):
  metrics.json               숫자 칸 (출처 포함)
  paragraph_candidates.md    능력별 문단 후보 (날짜·근거 포함)
  approved_paragraphs.json   승인된 후보만 담긴, 사이트가 읽는 파일

같은 입력이면 항상 같은 결과가 나온다 (시간·난수 미사용, 키 정렬).
"""
import datetime as dt
import json
import os
import sys

BASE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(BASE, "data")
OUT = os.path.join(BASE, "public")

# 본인이 쓴 항목만 근거로 쓴다 (동료 관련 줄은 제외)
OWN_PREFIXES = ("내 강점", "강점이 드러난 일화", "그 결과·알게 된 점",
                "강점을 위해 노력하고 생각한 것", "나에게 남기는 말",
                "오늘 지킬 강점·가치", "오늘의 첫 행동")
KEYWORDS = {
    "자기조절력": ["달리기", "조건", "루틴", "컨디션", "수면", "운동", "계획"],
    "자기동기력": ["끝까지", "포기", "도전", "노력", "다시", "꾸준"],
    "대인관계력": ["인사", "먼저 말", "도움", "공감", "협업", "감사"],
}


def load(name):
    path = os.path.join(DATA, name)
    if not os.path.exists(path):
        print(f"Error: {path} not found.")
        sys.exit(1)
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def ritual_metrics(ritual, holidays):
    days = ritual["days"]
    dates = sorted(dt.date.fromisoformat(d["date"]) for d in days)
    have = set(dates)
    first, last = dates[0], dates[-1]
    morning = sum(1 for d in days if d.get("open"))
    evening = sum(1 for d in days if d.get("close"))
    weekdays = [first + dt.timedelta(i) for i in range((last - first).days + 1)
                if (first + dt.timedelta(i)).weekday() < 5
                and str(first + dt.timedelta(i)) not in holidays]
    recorded_wd = sum(1 for d in weekdays if d in have)
    best = cur = 0
    for d in weekdays:  # 주말은 건너뛰고 평일 기준으로 연속 계산
        cur = cur + 1 if d in have else 0
        best = max(best, cur)
    return {
        "days": len(dates), "morning": morning, "evening": evening,
        "start": str(first), "end": str(last),
        "weekdays_total": len(weekdays), "weekdays_recorded": recorded_wd,
        "longest_weekday_streak": best,
    }


def build_candidates(ritual, tasks):
    cands = []
    for t in tasks["tasks"]:
        cands.append({
            "id": f"task-{t['id']}", "ability": t["ability"], "date": t["date"],
            "evidence": f"과제 목록: {t['title']}",
            "text": f"{t['situation']} {t['action']} {t['result']}",
        })
    for ability in sorted(KEYWORDS):
        found = 0
        for d in sorted(ritual["days"], key=lambda x: x["date"]):
            for line in d.get("open", []) + d.get("close", []):
                if line.startswith(OWN_PREFIXES) and any(k in line for k in KEYWORDS[ability]):
                    cands.append({
                        "id": f"ritual-{ability}-{d['date']}", "ability": ability,
                        "date": d["date"], "evidence": f"리추얼 기록 {d['date']}",
                        "text": line,
                    })
                    found += 1
                    break
            if found >= 2:
                break
    return sorted(cands, key=lambda c: (c["ability"], c["date"], c["id"]))


def write_json(path, obj):
    with open(path, "w", encoding="utf-8", newline="\n") as f:
        json.dump(obj, f, indent=2, sort_keys=True, ensure_ascii=False)
        f.write("\n")


def main():
    ritual, tasks = load("ritual.json"), load("tasks.json")
    attendance = load("attendance.json")
    approved = set(load("approved.json").get("approved", []))
    os.makedirs(OUT, exist_ok=True)

    hp = os.path.join(DATA, "holidays.json")
    holidays = load("holidays.json")["holidays"] if os.path.exists(hp) else {}
    r = ritual_metrics(ritual, holidays)
    metrics = {
        "attendance": {"label": "출석", "value": f"{attendance['attendance']['rate']}%",
                       "detail": f"{attendance['attendance']['weeks']}주",
                       "source": "내 출석 기록"},
        "ritual": {"label": "리추얼", "value": f"{r['days']}일 기록",
                   "summary": f"{r['weekdays_total']}일 중 {r['weekdays_recorded']}일 기록",
                   "detail": (f"{r['start']} ~ {r['end']} · 아침 {r['morning']} / 저녁 {r['evening']}"
                              f" · 공휴일 제외 {r['weekdays_total']}일 중 {r['weekdays_recorded']}일"
                              f" · 최장 {r['longest_weekday_streak']}일 연속"),
                   "source": "리추얼 기록"},
        "submission": {"label": "제출", "value": f"{attendance['submission']['rate']}%",
                       "detail": attendance["submission"]["note"],
                       "source": "내 제출 현황"},
    }
    write_json(os.path.join(OUT, "metrics.json"), metrics)

    cands = build_candidates(ritual, tasks)
    lines = ["# 능력별 문단 후보 (자동 생성)", "",
             "승인하려면 `data/approved.json`의 `approved`에 후보 id를 넣고 다시 실행하세요.", ""]
    for ability in sorted({c["ability"] for c in cands}):
        lines += [f"## {ability}", ""]
        for c in [c for c in cands if c["ability"] == ability]:
            mark = "승인" if c["id"] in approved else "대기"
            lines += [f"- **id**: `{c['id']}` ({mark})",
                      f"  - 날짜: {c['date']}",
                      f"  - 근거: {c['evidence']}",
                      f"  - 후보: {c['text']}", ""]
    with open(os.path.join(OUT, "paragraph_candidates.md"), "w", encoding="utf-8", newline="\n") as f:
        f.write("\n".join(lines))

    write_json(os.path.join(OUT, "approved_paragraphs.json"),
               {"approved": [c for c in cands if c["id"] in approved]})

    print("metrics.json, paragraph_candidates.md, approved_paragraphs.json updated")
    print(f"candidates={len(cands)} approved={len([c for c in cands if c['id'] in approved])}")


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    main()
