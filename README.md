# 프로젝트 소개 웹페이지

간단하고 현대적인 프로젝트 소개 웹페이지입니다. 외부 라이브러리 없이 순수 HTML, CSS, JavaScript만으로 제작되었습니다.

## 📁 파일 구조

```
week1-web/
├── index.html    # 메인 HTML 파일
├── style.css     # 스타일시트 파일
├── script.js     # JavaScript 파일
└── README.md     # 이 README 파일
```

## 🚀 실행 방법

### 방법 1: 파일을 브라우저에서 직접 열기
1. 파일 탐색기에서 `index.html` 파일을 더블 클릭합니다.
2. 기본 브라우저에서 웹페이지가 열립니다.

### 방법 2: VS Code 라이브 서버 사용 (추천)
1. VS Code에서 **Live Server** 확장 프로그램을 설치합니다.
2. `index.html` 파일을 열고 마우스 오른쪽 버튼을 클릭합니다.
3. **"Open with Live Server"**를 선택합니다.

### 방법 3: Python 로컬 서버 사용
```bash
# Python 3.x 사용
python -m http.server 8000

# Python 2.x 사용
python -m SimpleHTTPServer 8000
```
그 후 브라우저에서 `http://localhost:8000`으로 접속합니다.

### 방법 4: Node.js http-server 사용
```bash
# 먼저 http-server 설치 (한 번만)
npm install -g http-server

# 프로젝트 폴더에서 실행
http-server
```

## ✨ 기능

- ✅ 상단에 큰 제목과 소개 문구
- ✅ 3개의 정보 카드 (반응형 그리드 레이아웃)
- ✅ 버튼 클릭 시 안내 문구가 순환하여 변경
- ✅ 깔끔하고 현대적인 디자인
- ✅ 모바일 반응형 디자인 (모바일, 태블릿, 데스크톱)
- ✅ 호버 애니메이션 및 부드러운 전환 효과
- ✅ 외부 라이브러리 없음 (순수 HTML/CSS/JS)

## 🎨 커스터마이징

### 제목과 소개 문구 변경하기
- **HTML 파일 수정**: `index.html`의 `main-title`과 `subtitle` ID를 가진 요소를 직접 수정
- **JavaScript 파일 수정**: `script.js`의 `introductions` 배열에 새로운 문구를 추가

### 색상 테마 변경하기
`style.css` 파일의 `:root` 섹션에서 CSS 변수를 수정하세요:

```css
:root {
    --primary-color: #4a90e2;      /* 메인 색상 */
    --primary-hover: #357abd;      /* 호버 색상 */
    --secondary-color: #2c3e50;    /* 보조 색상 */
    /* 다른 변수들도 원하는 대로 변경 가능 */
}
```

### 카드 내용 수정하기
`index.html`의 `.card` 요소 내부의 내용을 직접 수정하세요.

### 새로운 소개 문구 추가하기
`script.js`의 `introductions` 배열에 새 객체를 추가하세요:

```javascript
{
    title: "새로운 제목",
    subtitle: "새로운 소개 문구입니다."
}
```

## 📱 반응형 브레이크포인트

- **데스크톱**: 769px 이상
- **태블릿**: 481px ~ 768px
- **모바일**: 480px 이하

## 🌐 브라우저 호환성

- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)

## 📝 라이선스

이 프로젝트는 개인 학습 및 프로젝트 목적으로 자유롭게 사용할 수 있습니다.