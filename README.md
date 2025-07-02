# 🔐 Secure Login & Registration System (Node.js + PostgreSQL)

A full-featured authentication backend built using **Node.js**, **Express.js**, and **PostgreSQL**, with **secure password encryption** using `bcrypt`. All API endpoints have been thoroughly tested using **Postman**, and version control is maintained through **GitHub** for transparency and collaboration.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Platform](https://img.shields.io/badge/platform-Node.js%20%7C%20Express%20%7C%20PostgreSQL-brightgreen)
![Security](https://img.shields.io/badge/security-encryption-success)

---

## 🚀 Features

- ✅ User **Registration** with password encryption
- ✅ User **Login** with credential verification
- ✅ Passwords hashed securely using **bcrypt**
- ✅ PostgreSQL used for secure and reliable data storage
- ✅ Modular and maintainable codebase
- ✅ All API endpoints tested using **Postman**
- ✅ Integrated version control with **GitHub**

---

## 📁 Project Structure



  signup-login-encryption/
├── dbConfig.js
├── routes/
│ └── auth.js
├── views/
│ ├── login.hbs
│ └── register.hbs
├── public/
│ └── styles.css
├── .env
├── .gitignore
├── package.json
├── app.js
└── README.md


## 🛠️ Technologies Used

| Tech         | Description                        |
|--------------|------------------------------------|
| **Node.js**  | JavaScript runtime for the backend |
| **Express.js** | Web framework for Node.js         |
| **PostgreSQL** | Relational database system         |
| **bcrypt**   | Password hashing & encryption      |
| **dotenv**   | Manage environment variables       |
| **Postman**  | API testing tool                   |
| **Git/GitHub** | Version control & collaboration  |

---

## 🔧 API Endpoints

### 📥 Register User

**Body:**

```json
{
  "name": "Soumen Mondal",
  "email": "soumen@example.com",
  "password": "strongpassword"
}
```

🔐 Login User
POST /login

Body:

{
  "email": "john@example.com",
  "password": "yourpassword"
}


🔐 Security
Passwords are hashed before being stored in the database.

Uses bcrypt with salting to enhance security.

Environment variables like database URL and secret keys are stored securely using .env.

✅ Postman Collection
All routes and responses have been tested using Postman. You can import the collection or manually test the endpoints using the body data above.



📦 Setup Instructions
1. Clone the Repository
   git clone https://github.com/Soumen-Developer/signup-login-backend-stack.git
cd signup-login-backend-stack

2. Install Dependencies
   npm install
3. Setup Environment Variables
Create a .env file based on .env.sample:
DB_USER=USER_DB
DB_PASSWORD=PASS_DB
DB_HOST=IP_DB
DB_PORT=PORT_DB
DB_NAME=NAME_DB

4. Run the App
   npm start
   The app will be live at http://localhost:3000

📌 Version Control
This project is version controlled using Git and hosted publicly on GitHub for transparency and collaboration.

🙌 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

📃 License
This project is licensed under the MIT License.

👨‍💻 Author
Soumen
GitHub


