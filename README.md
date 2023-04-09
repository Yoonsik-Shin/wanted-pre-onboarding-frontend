# 원티드 프리온보딩 

## 프론트엔드 인턴쉽 과제



### 1️⃣ 평가요소

1. 기능 정상 동작 
2. 코드의 퀄리티
3. git 관리 수준



### 2️⃣ 체크포인트

1. - [x] 레포지토리 이름은 `wanted-pre-onboarding-frontend`

2. - [x] 소스코드 depth 없어야함

3. - [x] Create React App을 이용해 과제 구현

4. - [x] git clone 이후 `npm install && npm start`명령어 입력시 정상동작

5. - [x] 함수 컴포넌트 이용

6. - [ ] 기능구현에 직접적으로 연관된 라이브러리 사용 금지

7. - [ ] 사용가능한 라이브러리 목록
   
   1. - [ ] React Router
   2. - [ ] Axios
   3. - [ ] Styled Components, Emotion, Sass
   4. - [ ] 아이콘 관련 라이브러리
   5. - [ ] 기능과 직접적인 연관이 없는 라이브러리 (es-lint, prettier)
   
8. - [ ] 가이드라인에 명시된 `test-id` 속성이 제대로 부여되지 않은 경우 구현이 안된 것으로 판단

9. - [ ] README.md 필수요소
   
   1. - [ ] 프로젝트 실행방법
   2. - [ ] 데모영상 or 배포링크 (배포시 가산점)

> 가이드라인에 명시된 사항 외에는 자유롭게 진행

​    

---

### 3️⃣ 기능구현

#### 1. 로그인 / 회원가입

- input 태그에 `data-testid=` 속성 부여

```html
<input data-testid="email-input" />
<input data-testid="password-input" />
<button data-testid="signup-button">회원가입</button>
<button data-testid="signin-button">로그인</button>
```

- 유효성검사
  - 이메일 : `@` 포함
  - 비밀번호 : 8자이상
  - 검사 통과 실패시 button태그에 `disabled`속성 부여
- 리다이렉션
  - 회원가입후 `/signin` 경로로 이동
  - 로그인 성공시 `/todo`경로로 이동
  - 로컬 스토리지에 토큰이 있을 경우, `/signup, /signin` 페이지 접속시 `/todo`페이지로 리다이렉트
  - 로컬 스토리지에 토큰이 없는 경우, `/todo`페이지 접속시 `/signin` 페이지로 리다이렉트
- JWT 토큰 저장 위치
  - 로컬 스토리지에 저장

​    

#### 2. TODO LIST

- TODO List 기본뼈대 (`<li>` 태그 필수사용)

```html
<li>
  <label>
    <input type="checkbox" />
    <span>TODO 1</span>
  </label>
</li>
```

- input 태그에 `data-testid=` 속성 부여

```html
<input data-testid="new-todo-input" />
<button data-testid="new-todo-add-button">추가</button>
```

- TODO List 항목 하나당 수정/삭제 할당하고 `data-testid=` 속성부여

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

- TODO List 수정모드 input창과 제출, 취소버튼에 `data-testid=` 속성부여

