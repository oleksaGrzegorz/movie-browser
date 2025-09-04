# 🎬 Movies Browser  

A modern web application for browsing movies and TV shows. Built with **React** and bundled with **Vite** for lightning-fast development. State management is powered by **Redux Toolkit**, navigation is handled with **React Router**, and styling is implemented with **styled-components**.  

We followed the **Scrum methodology** during development, organizing our work into sprints and tracking progress in **Trello**. The user interface was created based on a **Figma design project**, ensuring a consistent and visually appealing look.  

## 🚀 Features  
- 🔍 **Browse movies & TV shows** – discover popular titles.  
- 📄 **Detailed pages** – get cast, release date, description, and more.  
- 🎨 **Modern UI** – styled with `styled-components` for a responsive and elegant look.  
- ⚡ **Global state management** – powered by `react-redux` and `@reduxjs/toolkit`.  
- 🧭 **Smooth navigation** – client-side routing via `react-router`.  
- ⚡ **Vite-powered development** – fast builds and hot module replacement.  
- 🛠️ **Agile workflow** – Scrum methodology with Trello for task management.  
- 🎨 **UI/UX design** – based on a collaborative Figma project.  

## 🛠️ Tech Stack  
- **React** – component-based UI library  
- **Vite** – next-generation frontend tooling  
- **React Router** – navigation & routing  
- **Redux Toolkit** – efficient global state management  
- **React Redux** – bindings for React & Redux  
- **styled-components** – CSS-in-JS styling solution  
- **Trello** – project & sprint management  
- **Figma** – design system & mockups  

## 📂 Project Structure  
```
movie-browser/
│── dist/ # build output
│── node_modules/ # dependencies
│── public/ # public assets
│ └── favicon.svg
│── src/
│ ├── api/ # API utilities
│ ├── common/ # shared components/helpers
│ ├── features/ # feature-based structure
│ │ ├── errorPage/
│ │ ├── movieDetails/
│ │ ├── movieList/
│ │ ├── noResult/
│ │ ├── personDetails/
│ │ └── personList/
│ ├── images/ # static images
│ ├── store/ # Redux store & slices
│ │ ├── searchSlice.js
│ │ └── store.js
│ ├── App.jsx # root component
│ ├── GlobalStyle.js # global styles
│ ├── main.jsx # Vite entry point
│ └── theme.js # styled-components theme
│── .env # environment variables
│── .gitignore
│── eslint.config.js # ESLint configuration
│── index.html # HTML template
│── package-lock.json
│── package.json
└── README.md
```

## ⚙️ Installation & Setup  
1. Clone the repository:  
   ```bash
   git clone https://oleksagrzegorz.github.io/movie-browser/
   cd movies-browser
   ```  
2. Install dependencies:  
   ```bash
   npm install
   ```  
3. Run the development server:  
   ```bash
   npm run dev
   ```  
4. Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.  

## 🌐 Live Demo  
Check out the live version here:  
👉 [Movies Browser](https://oleksagrzegorz.github.io/movie-browser/)

## 📸 Screenshots  
Tu będzie gif jak już wszystko będzie na cito  

## 👨‍💻 Team  
This project was developed by:  
- Grzegorz Oleksa (https://github.com/oleksaGrzegorz)
- Paweł Paluch (https://github.com/pawel-paluch)
- Aleksandra Jurkiewicz (https://github.com/AleksandraJurkiewicz)