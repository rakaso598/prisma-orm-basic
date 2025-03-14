## 목표 : 프리즈마 사용법을 익히자.

## PostgreSQL + SQLite + Prisma

#### 깃 이그노어 : node_modules, prisma

#### npm i -D @types/express nodemon

---

[프리즈마 퀵스타트 npm 명령어](https://www.prisma.io/docs/getting-started/quickstart-sqlite)

- schema.prisma에 User 모델 작성 -> npx prisma migrate dev -> migration.sql 생성됨.
- npx prisma studio 실행.

- .http에서 json 데이터 리퀘스트.

---

### 가능한 기능들 (.http) :

- 유저 아이디 틀리게 또는 비밀번호 틀리게 했을때 동작 확인

- 유저 생성

- 상품 생성

- 상품 목록 조회

- 상품 개별 조회

---

### findUnique 형태

findUnique({ 조건 : { DB속성명 : 비교할값 }})
findUnique({ where: { id: productId } })
