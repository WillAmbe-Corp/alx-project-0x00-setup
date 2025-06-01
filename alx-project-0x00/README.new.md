# ALX Frontend Engineering Project

> A modern, responsive web application showcasing frontend development skills using Next.js, TypeScript, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-13+-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 📌 Overview

This project demonstrates modern frontend development practices and patterns, featuring:

- Server-side rendering with Next.js
- Type-safe development with TypeScript
- Utility-first styling with Tailwind CSS
- Component-based architecture
- Responsive design principles

## 🎯 Key Features

- **Modern Stack**: Built with Next.js 13+, TypeScript, and Tailwind CSS
- **Performance Optimized**: Leverages Next.js features for optimal loading
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Type Safety**: Full TypeScript implementation
- **Component Library**: Reusable UI components
- **Developer Experience**: Hot reloading, ESLint integration

## 🏗️ Architecture

```plaintext
alx-project-0x00/
├── components/          # Reusable UI components
│   ├── Button.tsx      # Custom button component
│   └── Card.tsx        # Card layout component
├── pages/              # Application routes
│   ├── _app.tsx        # App entry point
│   ├── index.tsx       # Home page
│   └── landing.tsx     # Landing page
├── styles/             # Global styles
│   └── globals.css     # Global CSS with Tailwind
├── interfaces/         # TypeScript definitions
├── public/            # Static assets
└── config files       # Various configuration files
```

## 💻 Development Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd alx-project-0x00
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **View the Application**
   - Open [http://localhost:3000](http://localhost:3000)
   - Hot reloading enabled for development

## 🧱 Component Usage

### Button Component
```tsx
// Import
import { Button } from "@/components/Button";

// Usage
<Button 
  title="Click me" 
  style="rounded-sm md:rounded-md lg:rounded-full"
/>
```

### Card Component
```tsx
// Import
import Card from "@/components/Card";

// Usage
<Card />
```

## 📚 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts development server |
| `npm run build` | Creates production build |
| `npm run start` | Runs production server |
| `npm run lint` | Runs ESLint checks |

## 🔍 Code Quality

- ESLint configuration for code consistency
- TypeScript for type checking
- Prettier for code formatting
- Git hooks for pre-commit checks

## 🚀 Deployment

The application can be deployed to various platforms:

- Vercel (Recommended)
- Netlify
- AWS Amplify
- Custom server

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact & Support

- Project Link: [https://github.com/yourusername/alx-project-0x00](https://github.com/yourusername/alx-project-0x00)
- Documentation: [Project Wiki](https://github.com/yourusername/alx-project-0x00/wiki)
- Issues: [GitHub Issues](https://github.com/yourusername/alx-project-0x00/issues)

---

<p align="center">Made with ❤️ for ALX Frontend Engineering</p> 