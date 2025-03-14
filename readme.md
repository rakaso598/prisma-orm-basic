## 목표 : 프리즈마 사용법을 익히자.

### `PostgreSQL` + `SQLite` + `Prisma`

---

#### 깃 이그노어 : `node_modules`, `prisma`

#### 처음 실행 : `npm i -D @types/express nodemon`

---

[`프리즈마 퀵스타트`](https://www.prisma.io/docs/getting-started/quickstart-sqlite)

- schema.prisma에 User 모델 작성 -> npx prisma migrate dev -> migration.sql 생성됨.
- npx prisma studio 실행.

- .http에서 json 데이터 리퀘스트.

---

### 미들웨어 목록

- adminOnly : 관리자가 아닐때 에러 발생시킴.
- identifyMiddleware : 어드민이면 isAdmin을 true로 만듬.

---

### 스키마 목록

- User
- Product
- Order
- OrderItem

---

### 가능한 요청들 (.http) :

- 유저 아이디 틀리게 또는 비밀번호 틀리게 했을때 동작 확인

- 유저 생성

- 상품 생성

- 상품 목록 조회

- 상품 개별 조회

- 상품 하나 삭제

- 전체유저목록 불러오기 (비밀번호빼고)

---

### 쇼핑몰 요구사항

1. 사용자는 최애템 하나를 찜할 수 있다.

---

### `findUnique` 형태

findUnique({ 조건 : { DB속성명 : 비교할값 }})
findUnique({ where: { id: productId } })
