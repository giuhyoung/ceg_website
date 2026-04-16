# CEG 홍보 페이지

`Vite + React + Tailwind CSS` 기반으로 제작한 반응형 홍보 페이지 프로젝트입니다.

## 주요 구성

- 참고 사이트의 핵심 문구와 사업 구조 유지
- 국방사업 / 풍력사업 중심의 최신형 랜딩 페이지 디자인
- 모바일 대응 반응형 레이아웃
- 대체 이미지와 교체용 `TODO` 주석 포함
- `Vercel` 배포 가능한 정적 프런트엔드 구조

## 실행 방법

```bash
npm install
npm run dev
```

## 배포 빌드

```bash
npm run build
```

## 교체가 필요한 영역

- `src/content/siteContent.js`의 연락처 정보
- `src/content/siteContent.js`와 `src/App.jsx`의 대체 이미지 URL
- 필요 시 `public/favicon.svg`
