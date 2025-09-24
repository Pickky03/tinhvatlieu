# TND Granite API

A RESTful API built with Node.js, Express, and MongoDB for user authentication and management.

## 📋 Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Authorization](#authorization)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- User registration and authentication
- JWT-based authentication
- Role-based authorization (Admin/User)
- Password hashing with bcrypt
- MongoDB integration with Mongoose
- CORS enabled
- Environment-based configuration

## 🛠 Technologies

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment variables management

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

## 🚀 Installation

1. Clone the repository:

```bash
git clone https://github.com/Pickky03/tinhvatlieu.git
cd tndgranite_api
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables (see [Environment Variables](#environment-variables))

4. Start the server:

```bash
# Development mode with nodemon
npm run dev

# Production mode
npm start
```

## 🔧 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/tndgranite
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d
```

## 💻 Usage

The API will be running on `http://localhost:3000` (or your specified PORT).

You can test the API using tools like:

- Postman
- Insomnia
- curl
- Any HTTP client

## 📚 API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint             | Description         | Auth Required |
| ------ | -------------------- | ------------------- | ------------- |
| POST   | `/api/auth/register` | Register a new user | No            |
| POST   | `/api/auth/login`    | Login user          | No            |

### User Routes (`/api/users`)

| Method | Endpoint     | Description       | Auth Required | Role Required |
| ------ | ------------ | ----------------- | ------------- | ------------- |
| POST   | `/api/users` | Create a new user | Yes           | Admin         |
| GET    | `/api/users` | Get all users     | Yes           | Admin         |

## 🔐 Authentication

This API uses JWT (JSON Web Tokens) for authentication. After successful login, you'll receive a token that must be included in the Authorization header for protected routes.

### Login Request Example:

```json
POST /api/auth/login
{
  "email": "user@example.com",
  "password": "your_password"
}
```

### Login Response Example:

```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "user@example.com",
    "role": "user"
  }
}
```

### Using the Token:

Include the token in the Authorization header:

```
Authorization: Bearer your_jwt_token_here
```

## 🔒 Authorization

The API implements role-based authorization with two roles:

- **admin**: Can create and view all users
- **user**: Default role for registered users

Admin-only routes are protected and will return a 403 Forbidden status if accessed by non-admin users.

## 📁 Project Structure

```
tndgranite_api/
├── src/
│   ├── controllers/
│   │   ├── authController.js    # Authentication logic
│   │   └── userController.js    # User management logic
│   ├── middlewares/
│   │   ├── authorize.js         # Role-based authorization
│   │   └── verifyToken.js       # JWT verification
│   ├── models/
│   │   └── userModel.js         # User data model
│   ├── router/
│   │   ├── authRouter.js        # Authentication routes
│   │   └── userRouter.js        # User routes
│   └── index.js                 # Application entry point
├── package.json
├── .env                         # Environment variables (create this)
└── README.md
```

## 🎯 Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon
- `npm test` - Run tests (not implemented yet)

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**vanhai.dev**

---

## 📞 Support

If you have any questions or need help with setup, please create an issue in the repository.

## 🚧 Roadmap

- [ ] Add input validation
- [ ] Implement password reset functionality
- [ ] Add rate limiting
- [ ] Add unit and integration tests
- [ ] Add API documentation with Swagger
- [ ] Add logging middleware
- [ ] Implement refresh tokens
