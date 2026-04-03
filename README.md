## Finance Data Backend

A scalable backend system for managing financial transactions, users, and analytics with `role-based access control.

---

## Features

* Authentication using JWT (Access + Refresh Tokens)
* Role-based Access Control (ADMIN, ANALYST, VIEWER)
* Transaction Management (Create, Update, Delete)
* Dashboard Analytics

  * Total Income / Expense
  * Net Balance
  * Trends (Weekly / Monthly)
  * Filtering & Search
  * Pagination
* Rate Limiting for security
* Swagger API Documentation

---

## 🛠 Tech Stack

* **Backend:** Node.js, Express, TypeScript
* **Database:** Prisma (Supabase)
* **Authentication:** JWT
* **Validation:** express-validator
* **Docs:** Swagger UI
* **Testing:** Jest & Supertest

---

## Setup Instructions


#### 1. Express Setup
```
npm init -y
npm install express
```
#### 2. Install Dependencies

```
npm i -D nodemon
npm i -D typescript
npm i -D @types/node

npm i -D prisma@7 
npm i -D @prisma/client@7
```

#### 3. Environment Variables

Create `.env` file:

```env
PORT=7000
DATABASE_URL=
DIRECT_URL=
ACCESS_SECRET=
REFRESH_SECRET=
```

#### 4. Run Database

```bash
npx prisma init
npx prisma generate
npx prisma migrate dev
```

#### 5. Start Server

```bash
npm run dev
```
#### 6. Run Test

```bash
npm test
npm run test:watch  # auto rerun
```

## ER Design Model

<p align="center">
  <img src="public/Database Relation.png" alt="_picture" height="500">
</p>

---

## API Documentation

Swagger UI available at:

```
http://localhost:7000/api-docs
```

---


#### Auth APIs

* `POST /api/auth/login`
* `POST /api/auth/refresh`
* `POST /api/auth/logout`

---

#### Admin User APIs

* `POST /api/admin/users/create`
* `PATCH /api/admin/users/:id/role`
* `PATCH /api/admin/users/:id/status`
* `DELETE /api/admin/users/:id`

---

#### Admin Transaction APIs

* `POST /api/admin/transactions`
* `PATCH /api/admin/transactions/:id`
* `DELETE /api/admin/transactions/:id`

---

#### Dashboard APIs

* `GET /api/dashboard/balance`
* `GET /api/dashboard/type`
* `GET /api/dashboard/recent`
* `GET /api/dashboard/trend`
* `GET /api/dashboard/transactions`
* `GET /api/dashboard/filter/records`
* `GET /api/dashboard/search/records`

---

## Tradeoffs

* Used **JWT (stateless authentication)** instead of sessions
  → improves scalability but requires token handling on client side

  *

* Stored `categoryName` directly in transactions
  → simplifies queries but introduces duplication (denormalization)

  *

* Used **express-validator**
  → easy to integrate but less powerful than schema-based validators like Zod

  *

* No caching layer (e.g., Redis)
  → simpler implementation but dashboard APIs can be optimized further

  *

* Decent Error handling
  → readable code but can be improved with centralized logging & monitoring

---

## Additional Thoughtfulness

* Followed **layered architecture**
  (routes → controllers → services → database) for scalability

  *

* Designed **reusable response structure** across all APIs:

```json
{
  "success": true,
  "data": {}
}
```

* Built **dashboard-focused APIs**
  → includes aggregation, trends, filtering, and pagination

  *

* Added **rate limiting middleware**
  → protection & limiting

  *

* Used **Prisma ORM**
  → type-safe queries and better maintainability

  *

* Structured APIs with clear prefixes (`/api/auth`, `/api/admin`, `/api/dashboard`)
  → improves readability and scalability

  *

* Integrated **Swagger documentation**
  → improves developer experience and API testing

