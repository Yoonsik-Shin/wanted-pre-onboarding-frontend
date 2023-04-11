# 원티드 프리온보딩 - 프론트엔드 인턴쉽 과제

## 1️⃣ 개요

### 평가요소

1. 기능 정상 동작
2. 코드의 퀄리티
3. git 관리 수준

​    

### 체크포인트

1.  - [x] 레포지토리 이름은 `wanted-pre-onboarding-frontend`

2.  - [x] 소스코드 depth 없어야함

3.  - [x] Create React App을 이용해 과제 구현

4.  - [x] git clone 이후 `npm install && npm start`명령어 입력시 정상동작

5.  - [x] 함수 컴포넌트 이용

6.  - [x] 기능구현에 직접적으로 연관된 라이브러리 사용 금지

7.  - [ ] 사용가능한 라이브러리 목록

    1.  - [x] React Router
    2.  - [x] Axios
    3.  - [ ] Styled Components, Emotion, Sass
    4.  - [ ] 아이콘 관련 라이브러리
    5.  - [x] 기능과 직접적인 연관이 없는 라이브러리 (es-lint, prettier, typescript)

8.  - [x] 가이드라인에 명시된 `test-id` 속성이 제대로 부여되지 않은 경우 구현이 안된 것으로 판단

9.  - [x] README.md 필수요소

    1.  - [x] 프로젝트 실행방법
    2.  - [x] 데모영상 or 배포링크 (배포시 가산점)

​     

> 가이드라인에 명시된 사항 외에는 자유롭게 진행



---

##  2️⃣ 필수 구현 요소 체크

#### 1. 로그인 / 회원가입

- - [x] input 태그에 `data-testid=` 속성 부여

```html
<input data-testid="email-input" />
<input data-testid="password-input" />
<button data-testid="signup-button">회원가입</button>
<button data-testid="signin-button">로그인</button>
```

-   유효성검사
    -   - [x] 이메일 : `@` 포함
    -   - [x] 비밀번호 : 8자이상
    -   - [x] 검사 통과 실패시 button태그에 `disabled`속성 부여
-   리다이렉션
    -   - [x] 회원가입후 `/signin` 경로로 이동
    -   - [x] 로그인 성공시 `/todo`경로로 이동
    -   - [x] 로컬 스토리지에 토큰이 있을 경우, `/signup, /signin` 페이지 접속시 `/todo`페이지로 리다이렉트
    -   - [x] 로컬 스토리지에 토큰이 없는 경우, `/todo`페이지 접속시 `/signin` 페이지로 리다이렉트
-   JWT 토큰 저장 위치
    -   - [x] 로컬 스토리지에 저장



#### 2. TODO LIST

-   - [x] TODO List 기본뼈대 (`<li>` 태그 필수사용)

```html
<li>
    <label>
        <input type="checkbox" />
        <span>TODO 1</span>
    </label>
</li>
```

-   - [x] input 태그에 `data-testid=` 속성 부여

```html
<input data-testid="new-todo-input" />
<button data-testid="new-todo-add-button">추가</button>
```

-   - [x] TODO List 항목 하나당 수정/삭제 할당하고 `data-testid=` 속성부여

```html
<li>
    <label>
        <input type="checkbox" />
        <span>TODO 1</span>
    </label>
    <button data-testid="modify-button">수정</button>
    <button data-testid="delete-button">삭제</button>
</li>
```

-   - [x] TODO List 수정모드 input창과 제출, 취소버튼에 `data-testid=` 속성부여

```html
<button data-testid="submit-button">수정</button>
<button data-testid="cancel-button">취소</button>
```

​        

---

## 3️⃣ 구현 및 배포

### ✔️ 배포주소 : [https://yoonsik.shop](https://yoonsik.shop) 



### 사용 라이브러리

1. axois
2. typescirpt
3. react-router-dom
4. es-lint
5. prettier
6. emotion, styled-components



 ### 폴더구조

```bash
wanted-pre-onboarding-frontend
├── routers
└── src 
     ├── pages # 페이지
     │     ├── auth
     │     │     ├── signin
     │     │     └── signup
     │     └── todos 
     ├── commons # 공통함수, 라이브러리
     │      └── lib
     └── components # 컴포넌트
             ├── commons # 공통 컴포넌트
             │      ├── hooks
             │      ├── buttons
             │      └── layout
             └── units # 단일 컴포넌트
             			├── auth 
             			│     ├── signin
             			│     └── signup
             			└── todos
```

​     

### 

npm install @mui/icons-material

### 배포

- aws S3 + aws CloudFont를 이용한 SSG 배포
- aws route53을 활용하여 DNS 설정
- aws ACM을 활용하여 HTTPS 설정
