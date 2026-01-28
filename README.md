# 2026손금운세 GitHub Pages

이 폴더는 Google Play Console의 app-ads.txt 설정을 위한 GitHub Pages 웹사이트 파일들입니다.

## 📁 파일 구조

```
github-pages/
├── index.html      # 메인 랜딩 페이지
├── styles.css      # 스타일시트
├── script.js       # JavaScript 인터랙션
├── app-ads.txt     # AdMob 광고 설정 파일
├── icon.png        # 앱 아이콘 (추가 필요)
└── README.md       # 이 파일
```

## 🚀 GitHub Pages 배포 방법

### 1단계: GitHub 저장소 생성

1. GitHub에 로그인
2. 새 저장소 생성 (New repository)
3. 저장소 이름: `[your-username].github.io`
   - 예: GitHub 계정이 `john`이면 → `john.github.io`
4. Public으로 설정
5. Create repository 클릭

### 2단계: 파일 업로드

#### 방법 A: GitHub 웹사이트에서 직접 업로드

1. 생성된 저장소 페이지에서 **Add file** → **Upload files** 클릭
2. 이 폴더의 모든 파일을 드래그 앤 드롭
3. Commit changes 클릭

#### 방법 B: Git 명령어 사용 (추천)

```bash
# 저장소 클론
git clone https://github.com/[your-username]/[your-username].github.io.git
cd [your-username].github.io

# 파일 복사 (이 폴더의 모든 파일을 저장소로 복사)
# Windows PowerShell:
Copy-Item -Path "e:\myflutter\luckyAI\luckyAI\github-pages\*" -Destination . -Recurse

# Git에 추가 및 커밋
git add .
git commit -m "Initial commit: Add app landing page and app-ads.txt"
git push origin main
```

### 3단계: GitHub Pages 활성화

1. GitHub 저장소 페이지에서 **Settings** 클릭
2. 왼쪽 메뉴에서 **Pages** 클릭
3. **Source** 섹션에서:
   - Branch: `main` 선택
   - Folder: `/ (root)` 선택
4. **Save** 클릭
5. 몇 분 후 `https://[your-username].github.io`에서 사이트 확인 가능

### 4단계: 앱 아이콘 추가

생성된 앱 아이콘 이미지를 `icon.png`로 저장하여 저장소에 추가하세요.

### 5단계: Google Play Console 설정

1. [Google Play Console](https://play.google.com/console) 접속
2. 앱 선택
3. **스토어 설정** → **스토어 등록정보** → **앱 세부정보**
4. **웹사이트** 필드에 입력: `https://[your-username].github.io`
5. 저장

## ✅ app-ads.txt 확인

배포 후 다음 URL에서 app-ads.txt가 정상적으로 접근되는지 확인:
```
https://[your-username].github.io/app-ads.txt
```

파일 내용:
```
google.com, pub-9106583635742183, DIRECT, f08c47fec0942fa0
```

## 🎨 커스터마이징

### 앱 정보 수정
- `index.html`에서 앱 설명, 기능 등을 수정할 수 있습니다.
- Play Store 링크를 실제 앱 링크로 변경하세요.

### 디자인 변경
- `styles.css`에서 색상, 폰트, 레이아웃 등을 수정할 수 있습니다.

### 추가 기능
- `script.js`에서 인터랙션을 추가하거나 수정할 수 있습니다.

## 📱 Play Store 링크 업데이트

앱이 출시되면 `index.html`의 Play Store 링크를 실제 링크로 변경하세요:

```html
<a href="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME" ...>
```

## 🔒 개인정보 처리방침

필요시 `privacy.html` 페이지를 추가로 만들어 개인정보 처리방침을 게시할 수 있습니다.

## 📞 문의

문제가 발생하면 GitHub Issues를 통해 문의하세요.
