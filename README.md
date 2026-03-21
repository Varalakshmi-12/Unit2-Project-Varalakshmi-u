# 🛒 Store Employee Toolkit – Order & Product Management System

## 🏠 Homepage

<img width="975" height="685" alt="image" src="https://github.com/user-attachments/assets/58822c44-6af2-422c-9498-1979208fb65d" />


# 🛒 Store Employee Toolkit – Order & Product Management System


## 📌 Project Overview

The Store Employee Toolkit is a full-stack web application that helps store employees create customer orders and manage products efficiently.

### 🎨 Frontend
- Built with **React, JavaScript, HTML, and CSS**
- Search products using **product number**
- Add products to a **shopping cart**
- Display **product details using child component**
- Calculate **order totals with tax**
- Communicate with backend using **Fetch API (async/await)**
- Product management (CRUD operations)

### ⚙️ Backend
- Built with **Java and Spring Boot**
- Provides **REST API endpoints** for product and order operations
- Uses **Spring Data JPA** for database interaction
- Stores data in **MySQL database**
- Manages relationships between **Product, Order, and OrderItem**

---

## ✨ Features

- Create customer cart order
- Getting all orders
- Getting orders by customer phone number
- Getting all products details
- Admin login page to access AdminProducts Page
- Products management(CRUD operations)
- Customer creditcard sign up (only frontend)
- Employee shift tracking (only frontend)

---

## 🚀 Technologies Used

### 🎨 Frontend
- React
- JavaScript
- HTML
- CSS

### ⚙️ Backend
- Java
- Spring Boot
- Spring Data JPA

### 🗃️ Database
- MySQL
- Hibernate ORM

### 🛠️ Tools
- Postman
- Git
- GitHub
- VS Code / IntelliJ IDEA

---


# :rocket: Installation

## Prerequisites

To run this project locally you need:

- Node.js
- npm
- Java 21
- Maven
- MySQL




# Backend Setup (Spring Boot)

### :one: Clone the repository

```bash
git clone https://github.com/Varalakshmi-12/Unit2-Project-Varalakshmi-u.git
cd Unit2-Project-Varalakshmi-u
```

Open a **new terminal**.

### Navigate to the backend

```bash
cd Unit2-Project-Varalakshmi-u/storeemployeetoolkit-backend
```
### :two: Create the database

Open MySQL and run:

```sql
CREATE DATABASE fullstack_project;
```

### :three: Code in the file application.properties

In your terminal set:

```
spring.application.name=storeemployeetoolkit-backend

spring.datasource.url=jdbc:mysql://localhost:3306/fullstack_project?useSSL=false&serverTimezone=UTC
spring.datasource.username=your username
spring.datasource.password=your password
spring.jpa.hibernate.ddl-auto=update
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver


spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
```



### :four: Run the backend

```bash
mvn spring-boot:run
```

🟢The backend will run at:

```
http://localhost:8080
```

:warning: Make sure `application.properties` matches your database credentials.

---

# Frontend Setup (React / Vite)

Open a **new terminal**.

### Navigate to the frontend

```bash
cd Unit2-Project-Varalakshmi-u/storeemployeetoolkit
```

### Install dependencies

```bash
npm install
```

### Run the frontend

```bash
npm run dev
```

🟢The frontend will run at:

```
http://localhost:5173
```
# To access AdminProductsPage 
Goto Products page click login button ,enter password do CRUD operations then logout
```
Admin log in password:admin1234
```

---



# :building_construction: System Architecture



```
React Frontend (Vite)
        │
        │ HTTP Requests (REST API)
        ▼
Spring Boot Backend (Java)
        │
        ├── Spring Data JPA / Hibernate
        │
        ▼
 MySQL Database
        
```


# ERD

<details>
<summary>https://dbdiagram.io/d/ERD-for-StoreEmployeeToolkit-69928d7ebd82f5fce2c899b4</summary>
</details>

## 📘 Database Schema (ER Diagram Description)

<img width="975" height="685" alt="image" src="https://github.com/user-attachments/assets/d746a7df-fe03-4978-940f-c2d453d4c5b8" />


---
#Wireframe link

<details>
<summary>https://www.figma.com/design/sNcOjJ5ASgYHBS4gT1Gge3/StoreEmployee-ToolKit--fullstack-?node-id=0-1&p=f&t=sYFlkZA69Xg3XvGM-0</summary>
</details>

## 📝Wireframing

<img width="975" height="685" alt="image" src="https://github.com/user-attachments/assets/8ba4c788-90ba-42d7-8a4a-729c3ba63e67" />


# :gear: API Endpoints

## Orders 🛒:

| Method | Endpoint | Description |
|------|------|------|
| GET | /api/orders | Retrieve all orders |
| GET | /api/orders/phone{phoneNumber} | Retrieve orders by phone number |
| POST | /api/orders | Create a order |

---

## Products 🛍️:

| Method | Endpoint | Description |
|------|------|------|
| GET | /api/Products | Retrieve all products details |
| POST | /api/Products | Create product details |
| PUT | /api/Products/{id} | Update product price by id |
| DELETE | /api/Products/{id} | Delete product by id |

---




# :crystal_ball: Future Features

## User Experience

- Add purchase date tracking for orders
- Implement inventory management (stock tracking)
- Develop backend to Employee shift tracking feature
- Develop backend to customer creditcard sign up feature


## Deployment

- Deploy frontend and backend online
- Connect to hosted production database

---

# :technologist: Author

Varalakshmi Uppara

Full-Stack Developer (React + Spring Boot) 

LaunchCode Full-Stack Web Development Program

---
