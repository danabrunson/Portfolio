# Figma Design Implementation Guide

This guide will help you implement your Figma designs into this React portfolio.

## 📁 File Structure

The styles are organized into modular files:

- `src/styles/variables.css` - **START HERE** - Design tokens (colors, typography, spacing)
- `src/styles/base.css` - Base HTML element styles
- `src/styles/components.css` - Component-specific styles
- `src/styles/responsive.css` - Responsive breakpoints

## 🎨 Step-by-Step Implementation

### 1. Extract Design Tokens from Figma

When you create your Figma designs, extract these values and update `src/styles/variables.css`:

#### Colors
- Open your Figma design
- Select any colored element
- Copy the hex/rgb value
- Update the corresponding variable in `variables.css`:
  ```css
  --color-primary: #YOUR_COLOR;
  --color-white: #YOUR_COLOR;
  /* etc. */
  ```

#### Typography
- Select text elements in Figma
- Note the font family, size, weight, and line height
- Update in `variables.css`:
  ```css
  --font-family-primary: 'Your Font Name', sans-serif;
  --font-size-base: 1rem; /* Update based on Figma */
  --font-weight-normal: 400; /* Update based on Figma */
  ```

#### Spacing
- Use Figma's spacing measurements
- Update spacing scale in `variables.css`:
  ```css
  --spacing-4: 1rem; /* Match Figma spacing */
  ```

### 2. Update Component Styles

After updating variables, check `src/styles/components.css` for component-specific styles that might need adjustment:

- Navigation bar styles
- Section layouts
- Button styles
- Card/project styles

### 3. Responsive Design

Update `src/styles/responsive.css` with breakpoints that match your Figma designs:

```css
@media (max-width: 768px) {
  /* Mobile styles from Figma */
}
```

## 🔧 Quick Reference

### Common Figma to CSS Conversions

| Figma | CSS Variable |
|-------|-------------|
| Color styles | `var(--color-primary)` |
| Text styles | `var(--font-size-base)` |
| Spacing | `var(--spacing-4)` |
| Border radius | `var(--radius-lg)` |
| Shadows | `var(--shadow-md)` |

### Using Variables in Components

Instead of hardcoded values, use variables:

```css
/* ❌ Don't do this */
.my-component {
  color: #1E123D;
  padding: 20px;
}

/* ✅ Do this */
.my-component {
  color: var(--color-primary);
  padding: var(--spacing-5);
}
```

## 📐 Figma Plugin Recommendations

- **Figma Tokens**: Export design tokens directly
- **Figma to React**: Generate React components
- **Design Tokens**: Sync tokens between Figma and code

## 🎯 Tips

1. **Start with variables**: Update all design tokens first
2. **Test incrementally**: Change one section at a time
3. **Use browser DevTools**: Inspect elements to see applied styles
4. **Keep it modular**: Don't mix styles across files unnecessarily

## 📝 Notes

- All existing styles use CSS variables, so updating `variables.css` will cascade changes throughout
- Legacy variable names (like `--main`, `--white`) are aliased to new names for backward compatibility
- The structure is designed to make it easy to match Figma designs exactly

