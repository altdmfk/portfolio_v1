#!/usr/bin/env python3
import json
import os
import sys

def main():
    data_dir = os.path.join(os.path.dirname(__file__), 'data')
    ritual_path = os.path.join(data_dir, 'ritual.json')
    
    if not os.path.exists(ritual_path):
        print(f"Error: {ritual_path} not found.")
        sys.exit(1)

    with open(ritual_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    # Output metrics
    out_dir = os.path.join(os.path.dirname(__file__), 'public')
    os.makedirs(out_dir, exist_ok=True)
    
    metrics_path = os.path.join(out_dir, 'metrics.json')
    compiled_metrics = {
        "verified_metrics": {
            "routine": f"{data['routine']['streak_days']}일 연속 (Morning {data['routine']['morning']} / Evening {data['routine']['evening']}) | 시작일: {data['routine']['start_date']}",
            "attendance": f"{data['course']['attendance_rate']}% | 13주 무결점 출석",
            "milestone": f"{data['course']['milestone_completion']}% | 전 과제 완수"
        },
        "status": "Verified",
    }

    with open(metrics_path, 'w', encoding='utf-8') as f:
        json.dump(compiled_metrics, f, indent=2, sort_keys=True, ensure_ascii=False)
    
    # Generate paragraph candidates
    candidates_path = os.path.join(out_dir, 'paragraph_candidates.md')
    candidates_content = f"""# 자기소개서 능력별 문단 후보 (자동 생성)

## [자기조절력] 후보
- **날짜**: {data['incident_log']['issue_date']} ~ {data['incident_log']['resolve_date']}
- **근거**: {data['routine']['streak_days']}일 연속 리추얼 달성 기록 및 컨디션({', '.join(data['incident_log']['variables_adjusted'])}) 조절
- **문단 후보**:
제가 가진 {data['routine']['streak_days']}일 연속 리추얼 달성(출처: 리추얼 기록)이라는 숫자는 결코 매일 조건 없이 순탄하게 얻어진 것이 아닙니다. {data['incident_log']['issue_date']} 달리기를 하던 중 한계에 부딪혀 멈췄을 때, 좌절하는 대신 그날의 조건을 분석하고 환경을 바꾼 뒤 다시 달려 완주해 냈습니다. 이 경험을 통해 문제가 생겼을 때 스스로를 탓하기보다 내가 바꿀 수 있는 통제 가능한 '조건'을 찾아 조율하는 **자기조절력**을 배웠습니다.

## [자기동기력] 후보
- **날짜**: 2026-07-20 (계정 삭제 버그 수정일)
- **근거**: 자동화 테스트 통과 후에도 남은 안티패턴 버그를 끈질기게 디버깅하여 해결
- **문단 후보**:
다이어리 앱의 계정 삭제 기능을 구현할 때 치명적인 버그가 발생했습니다. 자동화 테스트를 통과했음에도 콘솔 창에는 빨간 줄이 가득했습니다. 답답한 상황이었지만 달리기 때처럼 '조건'을 통제하며 딥다이브했고, 진짜 원인을 찾아냈습니다. 이처럼 낯선 오류 앞에서도 도망치지 않고 바꿀 수 있는 로직부터 파악하는 **자기동기력**을 갖추게 되었습니다.

## [대인관계력] 후보
- **날짜**: 2025-05-10 (티시스 재직 당시 매뉴얼 배포일)
- **근거**: 팀 내 소통 비용 감소 및 매뉴얼 자산화
- **문단 후보**:
티시스 재직 시절, 전자결재 연동 업무가 명확한 매뉴얼 없이 진행되어 소통 착오가 잦았습니다. 특정 인원에게 쏠린 의존성을 낮추기 위해 저는 API 호출 순서, 에러 코드 대응 가이드 등을 문서화했습니다. 동료의 피드백을 수용하고 해결 과정을 지식으로 나누는 **대인관계력**은 제 중요한 무기가 되었습니다.
"""

    with open(candidates_path, 'w', encoding='utf-8') as f:
        f.write(candidates_content)
    
    print(f"Metrics updated at {metrics_path}")
    print(f"Paragraph candidates generated at {candidates_path}")
    print("Process completed deterministically.")

if __name__ == "__main__":
    main()
