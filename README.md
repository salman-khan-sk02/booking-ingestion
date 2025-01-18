# Booking Data Ingestion System

A backend service for processing and managing booking data from various vendors. Built with **Node.js**, **Express**, and **MongoDB**.

---

## Features

- User authentication with JWT.
- CRUD operations for managing booking data.
- Data validation and secure API endpoints.
- Flexible filtering for bookings by date and vendor.

---

## Prerequisites

- **Node.js** (v14 or above)
- **MongoDB** (local or hosted)

---

## Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd booking-ingestion
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a .env file in the root directory with the following(refer to .env.example):

PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret

### 4. Run the application

```bash
npm run dev
```

### 5. File Structure

```bash
booking-ingestion-system/
│
├── src/
│   ├── config/          # Database configuration
│   ├── controllers/     # Request handlers
│   ├── middleware/      # Authentication middleware
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API routes
│   ├── utils/           # utility methods
│
├── app.js               # Main application file
├── package.json         # Project metadata and dependencies
├── .env                 # Environment variables
└── README.md            # Project documentation
```

### 6. API Endpoints

- Authentication
  1. POST /api/auth/register
     - Register a new user.
  2. POST /api/auth/login
     - Authenticate a user and retrieve a JWT.
- Bookings
  1. POST /api/bookings
     - Add a new booking (protected route).
  2. GET /api/bookings
     - Retrieve all bookings with optional filters (protected route).
  3. GET /api/bookings/:id
     - Retrieve a booking by ID (protected route).
  4. DELETE /api/bookings/:id
     - Delete a booking by ID (protected route).

### 7. Postman collection and API Documentation

https://documenter.getpostman.com/view/6119291/2sAYQamrbC
