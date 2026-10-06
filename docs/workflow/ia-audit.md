# IA ID 자동 대조 결과

로컬 HTML export의 셀 텍스트를 기계적으로 추출한 결과입니다. 고유 ID 수는 개발 화면 수·확정 범위·작업량이 아닙니다.
병합 셀의 의미를 보정하거나 취소·승인 여부를 자동 판정하지 않습니다. 같은 ID라도 원본 파일·행을 함께 확인합니다.

| 원본 파일 | 파일 내부 고유 ID 수 |
| --- | --- |
| 01.FO(MO_WEB)_IA.html | 127 |
| 01.FO_APP_IA.html | 226 |
| 01.FO_WEB_IA.html | 167 |
| 01.FO_판매채널_IA.html | 14 |
| 03.PO_IA.html | 9 |
| 04.OO_IA.html | 44 |

## 기존 progress와 MO 자료 대조

progress의 정확한 MO ID: 104개. 와일드카드는 제외.
MO 자료에서 찾지 못한 ID: MO-MEM-A000000, MO-PMT-A010000.
ID의 존재만 비교했으며 같은 ID의 화면명·기능·플랫폼 책임이 일치하는지는 별도 검토해야 합니다.

## 기존 progress와 PO 자료 대조

progress의 정확한 PO ID: 9개.
PO 자료에서 찾지 못한 ID: 없음.

## 교차 파일 ID

APP·WEB·판매채널의 FO 접두어는 담당·공유 구현·동일 기능을 보증하지 않습니다.
교차 파일의 동일 ID는 삭제하거나 합치지 않고 inventory에서 원본 파일·행을 확인합니다.

## 원본 해시

원본 갱신을 식별하기 위한 SHA-256입니다. 스크립트는 원본을 읽기만 합니다.

- 01.FO(MO_WEB)_IA.html: b580a369e7de4cf60e50728ea54b255acea1bc265cf4ffeacd5fb57b75cea3a2
- 01.FO_APP_IA.html: b9205a59de847f59806597ced32409844c8e19315c15046741fd1c7e69878e34
- 01.FO_WEB_IA.html: 07b1e14f5a07cc1e4b383bbdee2e7d814dc96756d55eaee5c2fb744227921490
- 01.FO_판매채널_IA.html: 7abb7afd57c2c763b0ddd2af3e7a8e3474426211a69133faf3f68e9dd75e843c
- 03.PO_IA.html: 41ecb11888407fa67d855c07d64ee66670ff52da9100f9d154eb6733c82fd716
- 04.OO_IA.html: 36ee294d81090dd2fdd0f4452d0f45ab03ab80cb3a6fdd50124467fce0757d7e
