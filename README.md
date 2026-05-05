# Alaleh Mohseni - Portfolio Website

A modern, bilingual (English/Persian) portfolio website showcasing my work as a Frontend Developer. Built with React, TailwindCSS, and Vite, featuring RTL/LTR support, dark/light theme, and smooth navigation.

## 📸 Live Preview

<div align="center">
  
  | | |
  |:---:|:---:|
  | <img src="public/projects/portfolio-dark-en.png" width="400" alt="Dark Theme - English"><br><b>🌙 Dark Theme (English/LTR)</b> | <img src="public/projects/portfolio-light-fa.png" width="400" alt="Light Theme - Persian"><br><b>☀️ Light Theme (Persian/RTL)</b> |
  
  <br>
  
  <img src="public/projects/portfolio-mobile-dark.png" width="200" alt="Mobile Dark">
  <img src="public/projects/portfolio-mobile-light.png" width="200" alt="Mobile Light">
  
  *Mobile responsive views - Dark & Light themes*
  
</div>

## ✨ Features

- **🌐 Bilingual Support** - Full English and Persian (Farsi) translations with RTL/LTR layout switching
- **🎨 Dark/Light Theme** - Persistent theme preference saved in localStorage
- **📱 Fully Responsive** - Optimized for all screen sizes from mobile to desktop
- **🧭 Smooth Navigation** - Throttled scroll handler with active section highlighting
- **⚡ Performance Optimized** - Custom throttle hook, lazy loading ready, smooth animations
- **💾 Persistent Settings** - Language and theme preferences stored locally

## 🛠️ Tech Stack

| Category         | Technologies              |
| ---------------- | ------------------------- |
| **Core**         | React 19, Vite 7          |
| **Styling**      | TailwindCSS 4, Custom CSS |
| **Icons**        | React Icons               |
| **Language**     | JavaScript (ES6+)         |
| **Build Tool**   | Vite                      |
| **Code Quality** | ESLint, Prettier          |

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── dev/              # Technology icons
│   ├── projects/         # Project screenshots
│   └── resume/           # CV files (EN/FA)
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── Skills/
│   │   ├── Experience/
│   │   ├── Projects/
│   │   └── Footer/
│   ├── contexts/
│   │   ├── LanguageContext.js
│   │   └── ThemeContext.js
│   ├── hooks/
│   │   └── useThrottle.js
│   ├── services/
│   │   └── localStorageService.js
│   ├── data/
│   │   └── portfolioData.js
│   └── App.jsx
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn or pnpm

### Installation

1. Clone the repository

```bash
git clone https://github.com/Alaleh-Mohseni/portfolio.git
cd portfolio
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
```

5. Preview production build

```bash
npm run preview
```

## 📦 Key Features Implementation

### Bilingual System (RTL/LTR)

The portfolio supports seamless switching between English and Persian:

- Automatic RTL layout for Persian content
- Persistent language preference in localStorage
- Dynamically updates document direction and language attributes

### Theme System

Dark/light mode with smooth transitions:

- Saves user preference to localStorage
- Applies `.dark` class to HTML element
- Zero-flash on page load

### Throttled Scroll Handling

Custom `useThrottle` hook prevents excessive scroll event calls:

- 100ms throttle delay
- Active section detection
- Header visibility toggle on mobile

## 🎯 Sections

| Section        | Description                                             |
| -------------- | ------------------------------------------------------- |
| **Hero**       | Introduction, role, social links, and current work info |
| **Skills**     | Visual showcase of technologies and tools               |
| **Experience** | Work history with detailed achievements                 |
| **Projects**   | Filterable portfolio with 13+ real-world projects       |

## 🌟 Featured Projects

The portfolio includes 13+ projects across categories:

- **Dashboards** - Performance management, logistics, cryptocurrency
- **Web Applications** - E-commerce clone, movie platform, shopping cart
- **Mobile Web Apps** - Hub management systems
- **Browser Extensions** - Persian Meeting Assistant with AI transcription
- **UI/UX** - Modern landing pages based on Figma designs

## 🔧 Available Scripts

| Command           | Description               |
| ----------------- | ------------------------- |
| `npm run dev`     | Start development server  |
| `npm run build`   | Build for production      |
| `npm run preview` | Preview production build  |
| `npm run lint`    | Run ESLint validation     |
| `npm run format`  | Format code with Prettier |

## 📱 Responsive Design

- **Desktop** - Full layout with side navigation
- **Tablet** - Adjusted spacing and typography
- **Mobile** - Collapsible header, optimized touch targets

## 🎨 Customization

### Adding New Projects

Edit `src/data/portfolioData.js` and add to the `projects.items` array:

```javascript
{
  id: 14,
  title: "Project Name",
  description: "Project description",
  category: ["dashboard", "web"],
  technologies: ["React", "TailwindCSS"],
  image: "/projects/image.png",
  link: "https://project-url.com"
}
```

### Modifying Skills

Update the `skills.items` array in `portfolioData.js`:

```javascript
{ name: "Technology", icon: "/dev/icon.svg" }
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Connect With Me

- **GitHub**: [@Alaleh-Mohseni](https://github.com/Alaleh-Mohseni)
- **LinkedIn**: [Alaleh Mohseni](https://www.linkedin.com/in/alaleh-mohseni)
- **Email**: alalamohseni@gmail.com

## 🙏 Acknowledgments

- Icons provided by React Icons
- Built with Vite for optimal performance
- TailwindCSS for utility-first styling

---

**Made with ❤️ by Alaleh Mohseni**

```

```
