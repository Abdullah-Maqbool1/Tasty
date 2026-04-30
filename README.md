# 🍳 TASTY - Recipe Discovery Web App

> A modern, responsive recipe discovery application built with React and powered by [TheMealDB API](https://www.thememealdb.com/api). Browse thousands of recipes, save your favorites, and explore meals from around the world.

## Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [Support & Documentation](#support--documentation)
- [License](#license)

## Features

✨ **Recipe Discovery**
- Browse meals by 7+ categories (Beef, Chicken, Dessert, Seafood, Vegetarian, and more)
- Search recipes by name with real-time suggestions
- View detailed recipe information with ingredients and cooking instructions
- Featured "Recipe of the Day" on the home page
- Popular meals showcase

💾 **Favorites Management**
- Save recipes to your personal collection
- Persistent favorites with visual indicators
- Quick access to saved recipes from the navigation menu

🎨 **User Experience**
- Dark mode / Light mode toggle support
- Fully responsive design (mobile, tablet, desktop)
- Neo-brutalist aesthetic with Tailwind CSS
- Smooth animations and transitions
- Accessible UI components

📧 **Contact & Feedback**
- Contact form for user inquiries and recipe suggestions
- Email validation and form error handling

## Quick Start

### Prerequisites

- **Node.js** 16.0 or higher
- **npm** 7.0 or higher (or use yarn)

### Installation

1. **Clone and install dependencies**

```bash
git clone https://github.com/your-username/Tasty.git
cd Tasty
npm install
```

2. **Start the development server**

```bash
npm run dev
```

The app will open at `http://localhost:5173` with hot module reloading enabled.

## Usage

### Browsing Recipes

1. **Homepage**: View featured categories and popular meals
2. **Explore Page**: 
   - Filter by category using the category buttons
   - Search by meal name using the search bar
   - Click any meal card to view full recipe details
3. **Recipe Details**: 
   - View ingredients with measurements
   - Follow step-by-step cooking instructions
   - Watch tutorial videos (when available)
   - Save to favorites with one click

### Managing Favorites

- Click the ☆ icon on any recipe card to save it
- View all saved recipes in the "Saved" section
- Use the badge counter in the navigation menu to see total saved recipes
- Remove recipes from favorites at any time

### Mode Switching

Toggle between dark and light modes using the sun/moon icons in the navigation header.

## Project Structure

```
Tasty/
├── src/
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Homepage with featured meals
│   │   ├── Browse.jsx      # Recipe browse & search page
│   │   ├── RecipeDetail.jsx # Detailed recipe view
│   │   ├── Contact.jsx     # Contact form page
│   │   └── Saved.jsx       # Saved recipes collection
│   ├── components/         # Reusable React components
│   │   ├── Layout.jsx      # Main layout wrapper
│   │   └── MealCard.jsx    # Recipe card component
│   ├── context/            # React Context for state management
│   │   ├── FavoritesContext.jsx
│   │   └── ThemeContext.jsx
│   ├── hooks/              # Custom React hooks
│   │   ├── useFavorites.js
│   │   └── useTheme.js
│   ├── App.jsx             # Root component with routing
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies & scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite build configuration
└── README.md               # This file
```

## Technologies

| Technology | Purpose |
|-----------|---------|
| **React 19** | UI library and component framework |
| **Vite 8** | Ultra-fast build tool and dev server |
| **React Router 7** | Client-side routing and navigation |
| **Axios** | HTTP client for API requests |
| **Tailwind CSS 3** | Utility-first CSS framework |
| **Open Props** | Standardized design tokens |
| **ESLint** | Code quality and linting |

## Available Scripts

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code for issues
npm run lint
```

## Contributing

We welcome contributions! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

Please ensure:
- Your code follows the existing style (run `npm run lint`)
- Changes are tested in both light and dark modes
- Your PR description explains what and why

## Support & Documentation

### Getting Help

- **Issues**: Report bugs or request features via [GitHub Issues](../../issues)
- **Discussions**: Ask questions in [GitHub Discussions](../../discussions)
- **API Documentation**: See [TheMealDB API](https://www.thememealdb.com/api) for data structure details

### Key Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Router Guide](https://reactrouter.com)
- [Vite Guide](https://vitejs.dev/guide/)

## License

This project is open source and available under the MIT License. See the LICENSE file for details.

---

**Made with ❤️ for food lovers and developers**
