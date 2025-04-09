# Next.js FAQ 프로젝트

Kia FAQ 홈페이지를 Next.js로 구현한 프로젝트입니다.

## 📕 프로젝트 구조

```
src/
├── app/
├── screens/    
├── features/   
├── entities/     
├── widgets/  
├── shared/      
├── mocks/      
└── types/       
```

<br />

## 📙 기술 스택

### 프레임워크 & 라이브러리
- **Next.js**: React 기반 프레임워크
- **React**: UI 라이브러리
- **TypeScript**: 정적 타입 지원
- **Tailwindcss**: 유틸리티 기반 CSS 프레임워크

### 상태 관리
- **Context API**: 로컬 상태 관리
- **@tanstack/react-query**: 서버 상태 관리

### 네트워크 요청
- **ky**: fetch 래퍼 라이브러리

### Form 관리
- **react-hook-form**: Form 상태 관리

### Utils
- **clsx & tailwind-merge**: tailwindcss 기반 스타일링 유틸
- **date-fns**: 날짜 처리 라이브러리

### Etc
- **Bun**: 패키지 매니저
- **Biome**: 코드 포맷팅 및 린팅
- **Vitest**: 테스트 프레임워크
- **Testing Library**: 컴포넌트 테스트

<br />

## 📔 주요 사항

#### 1. 다음 컴포넌트들을 직접 구현하였습니다:
- Input
- Radio Group
- Select
- Tabs
- Accordion
- Dialog (예제 Dialog에 가깝게 구현하려고 노력했습니다.)

#### 2. `global.css`에 기본 디자인 토큰을 정의하고 `tailwindcss`를 적극 활용하였습니다.

#### 3. public 폴더에 files, fonts, icons를 추가하여 사용하였고, fonts는 기아 홈페이지에서 제공하는 폰트만 사용하였습니다.

#### 4. UI 로직과 비즈니스 로직의 분리에 집중하였고, 코드의 가독성을 중시하여 개발을 진행하였습니다.

#### 5. 주요 UI 컴포넌트의 테스트를 작성하여 컴포넌트의 안정성을 추가하였습니다.

#### 6. gitflow를 기반으로 브랜치를 나누어 작업하였고, Pull Request 시 ci workflow를 적용하여 자동으로 테스트와 빌드를 실행하였습니다.

<br />

## 📗 Getting Started

### 개발 환경 설정

```bash
# 1. 의존성 설치
$ bun install

# 2. 개발 서버 실행
$ bun dev

# 3. 빌드
$ bun build

# 4. 빌드 파일 실행
$ bun start
```

<br />

### 코드 포맷팅

```bash
$ bun format
```

<br />

### 테스트 실행

```bash
$ bun test
```