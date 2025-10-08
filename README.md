# Random_Quote_Generator
# 🌐 Random Quote Generator — Full Stack Web Application

A responsive full-stack web application that allows users to **sign up, log in, and generate random inspirational quotes** using an external API.  
The project integrates **Bootstrap**, **JavaScript/jQuery**, and **Flask (Python)** with **SQLite database**, and is **deployed on Render**.

---

## 🎯 Project Aim
To develop a full-stack Random Quote Generator web application that enables users to authenticate, interact with an API to fetch quotes dynamically, and experience a clean, responsive interface.  
The project demonstrates frontend-backend integration, form validation, and live deployment on a cloud platform.

---

## 🧩 Features

- 🌈 **Responsive UI** built with **Bootstrap 5**
- 🔐 **User Authentication** (Login/Signup)
- 🧠 **Random Quote Generation** using an external Quote API
- 🧾 **Form Validation** (empty fields, email format, password strength)
- ⚡ **Dynamic UI Effects** using **jQuery**
- 🗄️ **SQLite Database** for user data
- ☁️ **Deployed on Render** for public access

---

## 🧱 Tech Stack

| Layer | Technologies |
|-------|---------------|
| **Frontend** | HTML, CSS, Bootstrap 5, JavaScript, jQuery |
| **Backend** | Flask (Python) |
| **Database** | SQLite |
| **Deployment** | Render |
| **Version Control** | Git & GitHub |

---

## 🗂️ Project Structure
📦 random-quote-generator
┣ 📂 static
┃ ┣ 📂 css
┃ ┃ ┗ style.css
┃ ┣ 📂 js
┃ ┃ ┗ script.js
┣ 📂 templates
┃ ┣ home.html
┃ ┣ login.html
┃ ┗ signup.html
┣ app.py
┣ requirements.txt
┗ runtime.txt

## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/<your-username>/random-quote-generator.git
   cd random-quote-generator

2. Create a virtual environment
   python -m venv venv
source venv/bin/activate      # For Mac/Linux
venv\Scripts\activate         # For Windows

3.Install dependencies
pip install -r requirements.txt

4. Run the application
   python app.py

5.Access locally
 http://127.0.0.1:5000/

🌍 Deployment (Render)

1 Push the code to GitHub

2 Go to Render
 → New → Web Service

3 Connect your repo and configure:

Setting	Value
Build Command	pip install -r requirements.txt
Start Command	gunicorn app:app

4  Render will auto-deploy your app and give you a public URL.

API Used
Quotable API
https://api.quotable.io/random

Used to fetch random quotes dynamically using JavaScript.

<img width="1504" height="714" alt="image" src="https://github.com/user-attachments/assets/17970e5f-e6ee-4fec-9892-9ecaca38996f" />

<img width="1512" height="711" alt="image" src="https://github.com/user-attachments/assets/ae64d9e3-a87d-44b7-bcc8-e968c7ffbcd1" />

<img width="1464" height="691" alt="image" src="https://github.com/user-attachments/assets/8eebac1a-fcfe-426c-84e0-f299c09db93f" />

<img width="1352" height="714" alt="image" src="https://github.com/user-attachments/assets/e3a71b8a-54c7-4853-8506-eaecdead49ea" />

<img width="1326" height="714" alt="image" src="https://github.com/user-attachments/assets/312886b4-73d4-4933-a65f-d548bcd997ae" />

<img width="1326" height="714" alt="image" src="https://github.com/user-attachments/assets/ebc68ddc-1eeb-4cbe-9cec-7aabd3909ead" />

<img width="1725" height="568" alt="image" src="https://github.com/user-attachments/assets/4472c7a4-c302-4673-b6ea-22e2c9484d04" />

<img width="1396" height="744" alt="image" src="https://github.com/user-attachments/assets/dd677a3a-0887-4524-941e-974810878042" />

Learning Outcomes

Implemented Frontend–Backend integration

Used Flask for dynamic routing and templating

Applied Bootstrap grid system and components

Performed client-side validation with jQuery

Learned deployment pipeline on Render


Author
Yashaswini Rao


