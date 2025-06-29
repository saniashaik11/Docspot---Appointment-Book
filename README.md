# 🩺 DocSpot – Seamless Appointment Booking App (MERN Stack)

**DocSpot** is a full-stack appointment booking platform built with the MERN stack. It enables patients to book appointments with doctors effortlessly, and provides a structured dashboard for doctors and admins to manage schedules, users, and bookings.

---

## 📌 Features

### 👨‍⚕️ Doctor

* Login/Register securely
* Manage profile and availability
* View upcoming appointments
* Accept or decline bookings

### 🧑‍💼 Patient

* Browse doctors by specialty
* View availability and book appointments
* Manage existing appointments
* Email confirmation for bookings

### 🛠️ Admin

* Manage doctor and patient accounts
* Monitor total appointments
* Delete users or doctors if needed
* Central dashboard for full control

---

## 🧰 Tech Stack

| Layer              | Technology                              |
| ------------------ | --------------------------------------- |
| **Frontend**       | React.js, Axios, Bootstrap              |
| **Backend**        | Node.js, Express.js                     |
| **Database**       | MongoDB + Mongoose                      |
| **Authentication** | JWT, bcrypt.js                          |
| **Other Tools**    | React Router, Postman (for API testing) |

---

## 🗂️ Folder Structure (Simplified)

```
DocSpot/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/saniashaik11/Docspot---Appointment-Book.git
cd Docspot---Appointment-Book
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
# Add a .env file with:
# MONGO_URI=your_mongodb_uri
# JWT_SECRET=your_jwt_secret
npm run server
```

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

---

## 🧪 Sample Environment Variables (`.env`)

```
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/docspot
JWT_SECRET=yourSecretKey
PORT=5000
```

---

## 🛣️ Future Enhancements

* Email/SMS reminders
* Ratings & reviews for doctors
* Rescheduling & cancellation workflow
* Payment gateway integration

---

## 🙋‍♀️ Author

Shaik Sania
📧 [saniashaik11@gmail.com](mailto:saniashaik11@gmail.com)
🔗 [GitHub Profile](https://github.com/saniashaik11)


