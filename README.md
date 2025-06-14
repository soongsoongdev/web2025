# 高獨 ─ 나의 픽셀 독서 우주

책을 한 쪽 넘길 때마다  
작은 픽셀 세계가 _“득-득-득”_ 하고 자라나는  
**레트로 감성 독서 트래커**입니다.

<p align="center">
  <img width="500" src="demo.gif" alt="demo">
</p>

---

## ✨ 무엇이 되나요?

| 장면          | 설명                                                                    |
|-------------|-----------------------------------------------------------------------|
| **Welcome** | 초원 위 반짝이는 별, _高獨_ 로고, 8비트 버튼                                          |
| **독서 입력**   | 제목・페이지・한줄감상 입력 → <br> `1 p = 10 m` 고도 계산                              |
| **고도 상승**   | 들판 → 구름 → 오로라 → 우주 → 태양계 <br> _rAF_ 애니메이션으로 부드럽게 상승                   |
| **뱃지 모먼트**  | 1 000 m ☁️ **구름 탐험가** <br> 30 000 m 🚀 **성층권 여행자** <br> … 총 7단계 픽셀 뱃지 |
| **여정 기록**   | 날짜순 기록 리스트 + 수집한 뱃지 선반                                                |
| **책의 우주**   | 책 한 권 = 별 ⭐ <br> 클릭/휠로 **Zoom-In** → 책 정보 등장                          |
| **픽셀 UI**   | 꽃・집・나무 흔들림, 픽셀 화살표 뒤로가기                                               |

---

## 🕹️ 조작 흐름

1. **▶ 시작하기** – 책을 입력합니다.
2. **altitude** 화면으로 이동 → 고도가 _슈우욱_ 상승.
3. 기준 고도 달성 시 **뱃지 팝업**(`BadgeModal`) 등장.
4. **↩ 픽셀 화살표**로 이전 화면 돌아가기.
5. **🌌 책의 우주** 페이지에서 별★을 클릭하여 감상 복습.

---

## 🎨 감성 포인트

- **90’s 콘솔 느낌** & ‘Press Start 2P’ 폰트
- CSS `box-shadow`, `clip-path` 만으로 그린 픽셀 아트
- `localStorage` 만으로 데이터 보존 → 서버·회원가입 NO
- 사운드 한 줄만 연결하면 언제든 **8-bit fanfare** 재생 준비 완료

---

## ⏱️ 5초 설치

```bash
npm i
npm run dev   # http://localhost:5173/web2025/project
