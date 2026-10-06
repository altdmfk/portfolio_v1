# 포트폴리오 (강아름)

## 짧은 확인 방법

**① 사이트 (이야기·숫자·대표작·이력서는 모두 한 페이지 안)**
- **어디서 확인하나요**: 새 시크릿 창 → https://altdmfk.github.io/portfolio_v1/
- **무엇을 하나요**: ① 시크릿 창을 연다 ② 주소를 붙여 넣는다 ③ 아래로 스크롤해 이야기·숫자·대표작·이력서를 본다
- **무엇이 보이면 통과**: 로그인·인증 없이 첫 화면의 한 줄 소개("…한 사람")와 각 섹션이 보인다
- **통과 안 될 때**: 저장소 Settings → Pages → Source를 "GitHub Actions"로 바꾸고 Actions의 "Deploy to GitHub Pages"가 success인지 본다

**② 장치 재현** (`update_portfolio.py`, 입력 `data/`, 결과 `public/`)
- **어디서 확인하나요**: ZIP 안 `docs/run_compare.txt`
- **무엇을 하나요**: ① ZIP을 새 폴더에 푼다 ② `python update_portfolio.py`를 두 번 실행한다 ③ `public/`의 결과 3개 파일 해시를 `run_compare.txt`와 비교한다
- **무엇이 보이면 통과**: 두 번의 결과가 같고 `run_compare.txt`에 "원본과 동일: True"가 적혀 있다
- **통과 안 될 때**: Python 3 설치와 `data/`의 입력 5개 파일이 있는지 확인한다

**③ 문서 위치**: `docs/`의 `resume.md`(이력서), `cover_letter.md`(자기소개서), `career_description.md`(경력기술서)

## 장치 돌리는 방법
1. 새 기록을 `data/`에 넣는다 (`ritual.json`, `tasks.json`, `attendance.json`, `holidays.json`)
2. `python update_portfolio.py`를 실행한다
3. `public/paragraph_candidates.md`에서 쓸 후보의 id를 `data/approved.json`에 넣고 다시 실행한다

## AI와 나의 판단
1. **AI에게 맡긴 일**: 소설 뼈대를 이어 붙인 본편 초안, 문서 3종 정리, 사이트와 장치 코드, 배포 설정, 체크리스트 점검.
2. **내가 직접 판단한 일**: 소설에 덧붙이는 방향과 경력 최소화, 쿼리 수치를 5초 대신 10초로 쓴 것, 공휴일 반영, 이름 크기·배경색·글자 크기·여백·문구, 승인할 기록 선택.
3. **AI 제안을 따르지 않은 일**: AI가 만든 큰 이름과 이력서 다운로드 버튼, "평일 41일 중 37일" 숫자를 그대로 쓰지 않고 고치게 했다.