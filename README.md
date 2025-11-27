<h1 align="center">🐾 Pet Adoption System</h1>

<p align="center">
  A clean and responsive <b>Frontend Pet Adoption System</b> built using HTML, CSS, and JavaScript.
  <br>
  Helping users explore pets, view details, and request adoption with a smooth UI experience.
</p>

---

## 🚀 Live Demo  
👉 **[Click here to view the live project](#)**  
*(Add your live link here — I can help you deploy on Netlify/Vercel if needed.)*

---

## 📸 Screenshots

| Home Page | Pet Listing | Pet Details |
|-----------|-------------|-------------|
| ![Home](assets/screenshots/home.png) | ![Listing](assets/screenshots/listing.png) | ![Details](assets/screenshots/details.png) |

*(Add your own screenshots inside `/assets/screenshots/` folder.)*

---

## 🧩 Features

- 🌟 Clean and modern adoption-themed UI  
- 📱 Fully responsive (Mobile + Tablet + Desktop)  
- 🐶 Dynamic pet cards with images  
- 🔍 Search & filter pets  
- 📄 Dedicated pet info page  
- ❤️ Adoption request modal / form  
- 🎨 Smooth UI/UX with structured layout  
- ⚡ No backend required — pure frontend implementation  

---

## 🛠️ Tech Stack (Frontend)

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" />
  <img src="https://img.shields.io/badge/React.js-87CEEB?style=for-the-badge&logo=reactp&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
</p>

---

## 📂 Folder Structure
PET-ADOPTION-SYSTEM/
│
├── backend/
│   ├── Controllers/
│   │   ├── AdminController.js
│   │   ├── AdoptFormController.js
│   │   └── PetController.js
│   │
│   ├── Middleware/
│   │   └── authMiddleware.js
│   │
│   ├── Model/
│   │   ├── AdoptFormModel.js
│   │   ├── PetModel.js
│   │   └── UserModel.js
│   │
│   ├── Routes/
│   │   ├── AdminRoute.js
│   │   ├── AdoptFormRoute.js
│   │   ├── PetRoute.js
│   │   └── UserRoute.js
│   │
│   ├── uploads/                 # Stores uploaded pet images
│   ├── server.js                # Express server entry
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── assets/              # Static images & icons
│   │   │
│   │   ├── Components/
│   │   │
│   │   │   ├── AdminPanel/
│   │   │   │   ├── AdminLogin.jsx
│   │   │   │   ├── AdminNavbar.jsx
│   │   │   │   ├── AdminPanel.jsx
│   │   │   │   ├── FormCard.jsx
│   │   │   │   ├── AdoptCard.jsx
│   │   │   │   ├── PostingPets.jsx
│   │   │   │   ├── ApprovedRequests.jsx
│   │   │   │   ├── AdoptingRequests.jsx
│   │   │   │   ├── AdoptedHistory.jsx
│   │   │   │   └── Admin.css
│   │   │
│   │   │   ├── AdoptForm/
│   │   │   │   ├── AdoptForm.jsx
│   │   │   │   └── AdoptForm.css
│   │   │
│   │   │   ├── Auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   ├── SignUp.jsx
│   │   │   │   ├── Overlay.jsx
│   │   │   │   └── Auth.css
│   │   │
│   │   │   ├── Contact/
│   │   │   │   ├── Contact.jsx
│   │   │   │   └── Contact.css
│   │   │
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── Footer.css
│   │   │
│   │   │   ├── Home/
│   │   │   │   ├── Home.jsx
│   │   │   │   ├── Card.jsx
│   │   │   │   ├── BottomContainer.jsx
│   │   │   │   ├── MiddleCard.jsx
│   │   │   │   ├── HomeContainer.jsx
│   │   │   │   ├── Card.css
│   │   │   │   ├── MiddleCard.css
│   │   │   │   ├── BottomContainer.css
│   │   │   │   └── HomeContainer.css
│   │   │
│   │   │   ├── Navbar/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── Navbar.css
│   │   │
│   │   │   ├── Pets/
│   │   │   │   ├── Pets.jsx
│   │   │   │   ├── PetsViewer.jsx
│   │   │   │   └── Pets.css
│   │   │
│   │   │   ├── Services/
│   │   │   │   ├── Services.jsx
│   │   │   │   ├── AdoptSection.jsx
│   │   │   │   ├── PostPetSection.jsx
│   │   │   │   ├── Service.css
│   │   │   │   ├── AdoptSection.css
│   │   │   │   └── PostPetSection.css
│   │   │
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── App.jsx
│   │   │   ├── App.css
│   │   │   ├── main.jsx
│   │   │   └── index.css
│   │   │
│   ├── vite.config.js
│   ├── package.json
│   └── .gitignore
│
├── README.md
└── Runcommand



