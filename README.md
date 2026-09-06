# 🏹 Kaman Blog Platform

A sleek, responsive, and performance-focused Article/Blog application built with **React**, **Vite**, **React Router v6**, and **Tailwind CSS**. Designed with a dark-mode aesthetic, smooth user experience, dynamic routing, and custom visual components.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

---

## ✨ Features

- **Dynamic Article Routing:** View detailed article pages fetched seamlessly using React Router.
- **Interactive Article Creation:** Full form input handling with computed property names for clean dynamic state updates.
- **Custom Animated 404 Page:** Features a standalone animated bow & arrow passing a target for missing routes.
- **Responsive Layout:** Tailored for mobile, tablet, and desktop screens with modern Tailwind glassmorphism styles.
- **Form Controls:** Category selection dropdowns and clean input validations.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React (Vite)
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM (v6)
- **Icons & Assets:** Custom SVG / PNG assets

---

## 🚀 Getting Started Locally

### Prerequisites

Ensure you have **Node.js** (v18 or higher) and **npm** installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/YOUR_USERNAME/kaman-blog-platform.git](https://github.com/YOUR_USERNAME/kaman-blog-platform.git)
   cd kaman-blog-platform

2. **Install dependencies:**
    npm install

3. **Start the development server:**
    npm run dev

4. **Open your browser at**
    http://localhost:5173.

## 📁 Project Structure
    src/
    ├── assets/         # Project logos and image assets
    ├── components/     # Reusable UI components (Footer, Spinner, Navbar, ArticleBox)
    ├   ├── pages/      # Page components (Home, ArticleDetail, CreateArticle, AboutUs)
    ├   └── NotFound/   # NotFound components
    ├── data/           # db.json
    ├── App.jsx         # Main router layout
    ├── index.css       # tailwind css
    └── main.jsx        # Application entry point

## 📄 License
    This project is open-source and available under the MIT License.