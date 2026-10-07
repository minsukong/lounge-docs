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

## progress 열거 ↔ 원본 파일 대조

progress의 정확한 ID: 197개. 와일드카드와 화면군 요약은 세지 않습니다.
"progress에 없는 ID"는 원본에 있으나 progress에 행으로 없는 것입니다. APP·WEB 자료는 progress에서 화면군으로만 다루므로 전수가 열거되지 않습니다.

| 원본 파일 | progress에 열거 | progress에 없는 ID | 없는 ID 화면군 |
| --- | --- | --- | --- |
| 01.FO(MO_WEB)_IA.html | 127 | 0 | - |
| 01.FO_APP_IA.html | 2 | 224 | FO-AIR-A01 1, FO-AIR-A02 1, FO-AIR-A03 1, FO-AIR-B00 1, FO-AIR-C00 1, FO-AIR-D00 1, FO-AIR-E00 1, FO-CMM-A01 3, FO-CMM-A02 1, FO-CMM-B01 1, FO-CMM-B02 1, FO-CMM-B03 1, FO-CMM-B04 1, FO-CMM-D01 1, FO-CMM-D02 1, FO-CMM-E01 1, FO-CMM-E02 1, FO-CMM-E03 1, FO-CMM-E04 1, FO-COU-A01 1, FO-COU-A02 1, FO-COU-A03 1, FO-CSO-A01 1, FO-CSO-A02 1, FO-CSO-A03 1, FO-CSO-A04 1, FO-ETC-A01 1, FO-ETC-A02 1, FO-ETC-B00 1, FO-MAI-A01 3, FO-MAI-A02 9, FO-MEM-A01 1, FO-MEM-A02 3, FO-MEM-A03 4, FO-MEM-A04 4, FO-MEM-B01 2, FO-MEM-B02 6, FO-MEM-C01 1, FO-MEM-C02 6, FO-MEM-C03 8, FO-MEM-C04 5, FO-MEM-C05 6, FO-MEM-C06 9, FO-MEM-C07 1, FO-MEM-C08 4, FO-MEM-C09 1, FO-MEM-C10 9, FO-ORD-A01 2, FO-ORD-A02 8, FO-ORD-B01 6, FO-ORD-B02 5, FO-ORD-C01 7, FO-ORD-D01 6, FO-ORD-D02 5, FO-ORD-D03 1, FO-PLC-A01 3, FO-PLC-A02 4, FO-PMT-A01 3, FO-PMT-A02 1, FO-PMT-A03 2, FO-PRD-A01 1, FO-PRD-A02 1, FO-PRD-A03 1, FO-PRD-B01 3, FO-PRD-B02 4, FO-PRD-B03 4, FO-PRD-B04 6, FO-PRD-B05 1, FO-PRD-B06 1, FO-PRD-B07 2, FO-SCM-A00 1, FO-SCM-B01 1, FO-SCM-B02 1, FO-SCM-B03 1, FO-SCM-B04 2, FO-SCM-C01 2, FO-SCM-C02 2, FO-SCM-C03 2, FO-SCM-C04 2, FO-SCM-C05 3, FO-SCM-C06 2, FO-SCM-C07 3, FO-SCM-C08 1, FO-SCM-C09 2, FO-SCM-C10 2, FO-SCM-C11 2, FO-SCM-C12 1, FO-SCM-C13 2, FO-SCM-D01 1, FO-SCM-D02 1 |
| 01.FO_WEB_IA.html | 1 | 166 | FO-AIR-A01 3, FO-AIR-A02 1, FO-AIR-A03 1, FO-AIR-A04 1, FO-AIR-A05 1, FO-CMM-B01 3, FO-CMM-B02 1, FO-CMM-C01 1, FO-CMM-C02 1, FO-CMM-C03 1, FO-CMM-C04 1, FO-CMM-D00 1, FO-CMM-E00 1, FO-CMM-F01 1, FO-CMM-F02 1, FO-CMM-F03 1, FO-CMM-F04 1, FO-COU-A01 1, FO-COU-A02 1, FO-COU-A03 1, FO-CSO-A01 1, FO-CSO-A02 1, FO-CSO-A03 1, FO-CSO-A04 1, FO-ETC-A01 1, FO-ETC-A02 1, FO-ETC-B00 1, FO-MAI-A01 3, FO-MAI-A02 9, FO-MEM-A01 1, FO-MEM-A02 3, FO-MEM-A03 4, FO-MEM-A04 4, FO-MEM-B01 2, FO-MEM-B02 6, FO-MEM-C01 1, FO-MEM-C02 6, FO-MEM-C03 7, FO-MEM-C04 5, FO-MEM-C05 6, FO-MEM-C06 9, FO-MEM-C07 1, FO-MEM-C08 4, FO-MEM-C09 1, FO-MEM-C10 9, FO-ORD-A01 2, FO-ORD-A02 8, FO-ORD-B01 6, FO-ORD-B02 5, FO-ORD-C01 7, FO-ORD-D01 6, FO-ORD-D02 5, FO-ORD-D03 1, FO-PLC-A01 3, FO-PLC-A02 4, FO-PMT-A01 3, FO-PMT-A02 1, FO-PMT-A03 2, FO-SCM-A01 1 |
| 01.FO_판매채널_IA.html | 14 | 0 | - |
| 03.PO_IA.html | 9 | 0 | - |
| 04.OO_IA.html | 44 | 0 | - |

## progress에만 있는 ID

어느 원본 파일에서도 찾지 못한 ID입니다. 화면명·기능 확인 전까지 후보로 유지하고 삭제하지 않습니다.

- MO-MEM-A000000, MO-PMT-A010000

ID의 존재만 비교했으며 같은 ID의 화면명·기능·플랫폼 책임이 일치하는지는 별도 검토해야 합니다.

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
