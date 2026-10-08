# IA ID 자동 대조 결과

로컬 HTML export의 셀 텍스트를 기계적으로 추출한 결과입니다. 고유 ID 수는 개발 화면 수·확정 범위·작업량이 아닙니다.
병합 셀의 의미를 보정하거나 취소·승인 여부를 자동 판정하지 않습니다. 같은 ID라도 원본 파일·행을 함께 확인합니다.

| 원본 파일 | 파일 내부 고유 ID 수 |
| --- | --- |
| 01.FO(MO_WEB)_IA.html | 127 |
| 01.FO_APP_IA.html | 193 |
| 01.FO_WEB_IA.html | 161 |
| 01.FO_판매채널_IA.html | 14 |
| 03.PO_IA.html | 9 |
| 04.OO_IA.html | 44 |

## progress 열거 ↔ 원본 파일 대조

progress의 정확한 ID: 198개. 와일드카드와 화면군 요약은 세지 않습니다.
"progress에 없는 ID"는 원본에 있으나 progress에 행으로 없는 것입니다. APP·WEB 자료는 progress에서 화면군으로만 다루므로 전수가 열거되지 않습니다.

| 원본 파일 | progress에 열거 | progress에 없는 ID | 없는 ID 화면군 |
| --- | --- | --- | --- |
| 01.FO(MO_WEB)_IA.html | 127 | 0 | - |
| 01.FO_APP_IA.html | 3 | 190 | FO-AIR-A01 2, FO-AIR-A02 1, FO-AIR-B00 1, FO-AIR-C00 1, FO-AIR-D00 1, FO-AIR-E00 1, FO-CMM-A01 3, FO-CMM-A02 1, FO-CMM-B01 1, FO-CMM-B02 1, FO-CMM-B03 1, FO-CMM-B04 1, FO-CMM-D01 1, FO-CMM-D02 1, FO-CMM-E01 1, FO-CMM-E02 1, FO-CMM-E03 1, FO-CMM-E04 1, FO-COU-A01 1, FO-COU-A02 1, FO-COU-A03 1, FO-CSO-A01 1, FO-CSO-A02 1, FO-CSO-A03 1, FO-CSO-A04 1, FO-ETC-A01 1, FO-ETC-A02 1, FO-ETC-B00 1, FO-MAI-A01 3, FO-MAI-A02 9, FO-MEM-A01 1, FO-MEM-A02 3, FO-MEM-A03 4, FO-MEM-A04 4, FO-MEM-B01 2, FO-MEM-B02 6, FO-MEM-C01 1, FO-MEM-C02 6, FO-MEM-C03 7, FO-MEM-C04 5, FO-MEM-C05 6, FO-MEM-C06 9, FO-MEM-C07 1, FO-MEM-C08 4, FO-MEM-C09 1, FO-MEM-C10 9, FO-ORD-A01 2, FO-ORD-A02 8, FO-ORD-B01 6, FO-ORD-B02 5, FO-ORD-C01 7, FO-ORD-D01 6, FO-ORD-D02 5, FO-ORD-D03 1, FO-PLC-A01 7, FO-PMT-A01 3, FO-PMT-A02 1, FO-PMT-A03 2, FO-SCM-A00 1, FO-SCM-B01 9, FO-SCM-B02 4, FO-SCM-B03 3, FO-SCM-B04 2, FO-SCM-B06 3, FO-SCM-B07 1, FO-SCM-B08 2 |
| 01.FO_WEB_IA.html | 1 | 160 | FO-AIR-A01 3, FO-AIR-A02 1, FO-AIR-A03 1, FO-AIR-A04 1, FO-AIR-A05 1, FO-CMM-B01 3, FO-CMM-B02 1, FO-CMM-C01 1, FO-CMM-C02 1, FO-CMM-C03 1, FO-CMM-C04 1, FO-CMM-D00 1, FO-CMM-E00 1, FO-CMM-F01 1, FO-CMM-F02 1, FO-CMM-F03 1, FO-CMM-F04 1, FO-COU-A01 1, FO-COU-A02 1, FO-COU-A03 1, FO-CSO-A01 1, FO-CSO-A02 1, FO-CSO-A03 1, FO-CSO-A04 1, FO-ETC-A01 1, FO-ETC-A02 1, FO-ETC-B00 1, FO-MAI-A01 3, FO-MAI-A02 9, FO-MEM-A01 1, FO-MEM-A02 3, FO-MEM-A03 4, FO-MEM-A04 4, FO-MEM-B01 2, FO-MEM-B02 6, FO-MEM-C01 1, FO-MEM-C02 6, FO-MEM-C03 7, FO-MEM-C04 5, FO-MEM-C05 6, FO-MEM-C06 9, FO-MEM-C07 1, FO-MEM-C08 4, FO-MEM-C09 1, FO-MEM-C10 9, FO-ORD-A01 2, FO-ORD-A02 8, FO-ORD-B01 6, FO-ORD-B02 5, FO-ORD-C01 7, FO-ORD-D01 6, FO-ORD-D02 5, FO-ORD-D03 1, FO-PLC-A01 3, FO-PLC-A02 4, FO-SCM-A01 1 |
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
- 01.FO_APP_IA.html: 0231bebda0e2b28ed7784f6f20d6b415179a985647fc1040a76a529f02f3a489
- 01.FO_WEB_IA.html: a09b4aacee5d7e4dbb65097ac03642eab6f1b03a8d8f28d5f92a280c2ee8247e
- 01.FO_판매채널_IA.html: 7abb7afd57c2c763b0ddd2af3e7a8e3474426211a69133faf3f68e9dd75e843c
- 03.PO_IA.html: 41ecb11888407fa67d855c07d64ee66670ff52da9100f9d154eb6733c82fd716
- 04.OO_IA.html: 36ee294d81090dd2fdd0f4452d0f45ab03ab80cb3a6fdd50124467fce0757d7e

## APP·WEB View와 ID 추출 주의

파일 제목이나 FO 접두어 대신 각 행의 View 셀을 기준으로 구분합니다. View는 화면 구현 구분이며 API·권한·외부 앱 실행 등의 Bridge 계약 확정을 대신하지 않습니다.

| 원본 파일 | ID가 있는 행 | 고유 ID | Native 행 / 고유 ID | WebView 행 / 고유 ID |
| --- | --- | --- | --- | --- |
| 01.FO_APP_IA.html | 195 | 193 | 5 / 5 | 190 / 188 |
| 01.FO_WEB_IA.html | 161 | 161 | 0 / 0 | 161 / 161 |

### APP에서 Native로 남은 행

아래는 현재 원본의 Native 표기입니다. 원본 메뉴·기능 설명 간 차이나 실제 구현·메시지 계약은 별도로 확인합니다.

| 원본 행 | ID | ID 앞 원본 셀 텍스트 |
| --- | --- | --- |
| 6 | FO-CMM-A010100 | 1  /  공통  /  헤더  /  알림  /  알림 팝업 |
| 12 | FO-CMM-B030000 | 7  /  내 이용권함 |
| 69 | FO-MEM-C030201 | 59  /  QR code•Barcode scan |
| 251 | FO-STU-A000000 | 224  /  설정  /  설정 |
| 254 | FO-ETC-B000000 | 227  /  Loding |

### View는 있으나 유효 ID를 추출하지 못한 행

유효 ID 미추출은 기능 제외나 삭제 승인이 아닙니다. ID 공백·수식 오류와 원본 메뉴를 함께 확인하고, 과거 ID를 임의로 새 ID에 대응시키지 않습니다.

- 01.FO_APP_IA.html: View가 있으나 유효 ID가 없는 행 54개. 원본 행: 14, 22, 29, 30, 37, 48, 72, 99, 100, 103, 132, 133, 134, 135, 136, 138, 139, 140, 141, 142, 143, 144, 145, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 182, 238, 239, 240, 241.
- 01.FO_APP_IA.html: #REF! 표시 원본 행: 153, 154.
- 01.FO_APP_IA.html: 동일 ID FO-SCM-B050100가 원본 행 131, 137, 146에 존재합니다. 파일·행을 함께 보존하며 같은 화면인지 별도 확인합니다.
- 01.FO_WEB_IA.html: View가 있으나 유효 ID가 없는 행 74개. 원본 행: 27, 28, 35, 46, 70, 102, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 124, 125, 127, 128, 129, 130, 131, 132, 133, 136, 137, 138, 139, 140, 141, 143, 144, 145, 146, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 225, 226, 227, 229, 234, 235, 236, 237.
- 01.FO_WEB_IA.html: #REF! 표시 원본 행: 111, 114, 120, 121, 124, 125, 127, 128, 129, 130, 131, 132, 133, 136, 137, 138, 139, 140, 141, 143, 144, 145, 146, 148, 149, 150, 151, 152.
