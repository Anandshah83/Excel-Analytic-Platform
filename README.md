# 📊 Data Analytics Platform (MERN Stack)

A full-stack **Data Analytics Platform** built using the **MERN stack**, designed to help users upload files, analyze data, and visualize insights through interactive dashboards and charts.

---

## 🚀 Features

* 🔐 User Authentication (Signup / Login / JWT-based auth)
* 📁 File Upload & Management
* 📊 Interactive Dashboard & Charts
* 📈 Data Visualization
* 🧾 RESTful APIs
* 🔒 Secure backend with Helmet & Rate Limiting
* 🌐 Proxy-based frontend–backend integration (Vite + Express)

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* TypeScript
* Axios
* Chart Libraries
* Tailwind CSS / CSS

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* Multer (File Uploads)
* Helmet & Express Rate Limit

---

## 📂 Project Structure

```
Data-Analytic-Platform/
│
├── backend/
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   ├── uploads/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── vite.config.ts
│   └── package.json
│
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the **backend** folder:

```env
PORT=2000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

> ⚠️ Never push your `.env` file to GitHub.

---

## ▶️ How to Run the Project Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/Data-Analytic-Platform.git
cd Data-Analytic-Platform
```

---

### 2️⃣ Start Backend Server

```bash
cd backend
npm install
nodemon server.js
npm run dev
```

Backend will run at:

```
http://127.0.0.1:2000
```

---

### 3️⃣ Start Frontend Server

```bash
cd frontend
npm install
npm run dev
```

Frontend will run at:

```
http://127.0.0.1:3000
```

---

## 🔁 API Proxy Configuration

Vite proxy is configured to forward API requests:

```ts
'/api' → http://127.0.0.1:2000
```

This avoids CORS issues during development.

---

## 🧪 Common Issues & Fixes

### ❌ `ECONNREFUSED ::1:5000`

✅ Fix:

* Ensure backend & frontend ports match
* Use `127.0.0.1` instead of `localhost`
* Restart both servers

---

## 📸 Screenshots (Optional)

Add screenshots of:

* Login Page
* Dashboard
* Charts
* File Upload

Example:

```md
![Dashboard](screenshots/dashboard.png)
```

---

## 🔐 Security Notes

* Passwords are hashed using bcrypt
* JWT used for authentication
* Rate limiting applied to APIs
* Sensitive data stored in environment variables

---

## 🧑‍💻 Author

**Anand Shah**
B.Tech – Computer Science Engineering
Frontend & Backend Developer (MERN Stack)

---

## 📄 License

This project is licensed under the **MIT License**.

---

## ⭐ Support

If you like this project:

* ⭐ Star the repository
* 🐞 Report issues
* 🤝 Suggest improvements

---

If you want, I can also:

* Shorten this README
* Make it **resume-friendly**
* Add **deployment section**
* Add **API documentation section**

Just tell me 👍
