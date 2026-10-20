# Product Management Backend – Setup & Run Guide

**Name:** MD ASHIQUR RAHMAN  
**Student ID:** 23-54637-3  
**Section:** E

This guide explains how to install, configure, and run the Product Management Backend locally using NestJS and PostgreSQL.

## 🚀 Prerequisites

Ensure the following are installed:

- Node.js
- PostgreSQL
- pnpm
- Postman (for API testing)
- DBeaver (optional, for database management)

## 📦 1. Installation

Navigate to the project root directory and install dependencies:

```bash
pnpm install
```

## 🔧 2. Environment Configuration

Create a `.env` file in the project root directory and configure the following variables:

```env
PORT=5001

DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_DATABASE=product_management
```

Replace `your_password` with your actual PostgreSQL password. Ensure the variable names match those used in your project configuration.

## 🗄️ 3. Database Setup

### Create the Database

Open DBeaver and connect to your PostgreSQL server.

Execute the following SQL command in an SQL Editor connected to an existing database:

```sql
CREATE DATABASE product_management;
```

If the database already exists, skip this step.

### Verify the Database

Run the following query to confirm the database exists:

```sql
SELECT datname
FROM pg_database
WHERE datname = 'product_management';
```

Ensure your application is configured to connect to the `product_management` database.

## ▶️ 4. Run the Backend

Start the NestJS application in development mode:

```bash
pnpm start:dev
```

The backend should be available at:

```text
http://localhost:5001
```

Check the terminal for database connection errors or startup messages.

## 🌐 5. API Endpoints

**Base URL:** `http://localhost:5001`

| HTTP Method | Endpoint        | Description                |
| ----------- | --------------- | -------------------------- |
| GET         | `/products`     | Retrieve all products      |
| GET         | `/products/:id` | Retrieve a product by ID   |
| POST        | `/products`     | Create a new product       |
| PATCH       | `/products/:id` | Update an existing product |
| DELETE      | `/products/:id` | Delete a product           |

_Note: These routes assume your NestJS controller defines the endpoints as listed above._

## 📝 6. Example Product Request

Use the following JSON body to create a product using Postman.

**Endpoint:** `POST http://localhost:5001/products`

**Body → raw → JSON**

```json
{
  "name": "Dell Inspiron 15",
  "category": "Electronics",
  "price": 75000,
  "quantity": 10
}
```

Set the request header:

```text
Content-Type: application/json
```

## 🧪 7. Testing with Postman

1. Start the backend using `pnpm start:dev`.
2. Open Postman.
3. Enter the appropriate endpoint using `http://localhost:5001` as the base URL.
4. Select the required HTTP method.
5. For POST and PATCH requests, select **Body → raw → JSON**.
6. Send the request and inspect the response.

## 📁 8. Project Structure

```text
project-root/
├── src/
│   ├── modules/
│   ├── common/
│   ├── config/
│   ├── main.ts
│   └── app.module.ts
├── test/
├── .env
├── .env.example
├── package.json
└── tsconfig.json
```

_The project structure may vary depending on your implementation._

## ⚠️ 9. Troubleshooting

- **Database does not exist:** Create `product_management` in PostgreSQL.
- **Database connection failed:** Verify the host, port, username, password, and database name in `.env`.
- **Port already in use:** Ensure port `5001` is available.
- **Tables are missing:** Check your TypeORM entity registration, migrations, or schema synchronization configuration.
- **Dependencies are missing:** Run `pnpm install` again.

## ✅ 10. Important Notes

- Ensure PostgreSQL is running before starting the backend.
- Keep your `.env` file private and do not commit database credentials to GitHub.
- Run migrations if your project requires them.
- Verify that the endpoint paths match your actual NestJS controller routes.
