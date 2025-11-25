# Portfolio Website

Personal portfolio website built with React and Vite.

## 🚀 Deployment to GitHub Pages

This project is configured to deploy automatically to GitHub Pages.

### Setup Instructions:

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy when you push to the `main` branch

2. **Your site will be available at:**
   - `https://danabrunson.github.io/Portfolio/`

### Manual Deployment (if needed):

```bash
# Build the project
npm run build

# The dist folder contains the built files
# You can deploy this to GitHub Pages manually if needed
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

- `src/pages/` - Page components
- `src/components/` - Reusable components
- `src/styles/` - CSS stylesheets
- `src/data/` - Data files (projects, etc.)
- `public/` - Static assets

## 🎨 Styling

The project uses CSS variables for theming. Update `src/styles/variables.css` to customize colors, fonts, and spacing.

