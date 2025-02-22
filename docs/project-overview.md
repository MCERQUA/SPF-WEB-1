# InsulationPro Website Template

## Project Overview
A modern, responsive website template for an insulation company, based on the design of foamworks.ca. Built with React and TypeScript, focusing on clean, maintainable code and optimal user experience.

## Deployment
This project is configured for deployment on Netlify through GitHub with the following setup:

### Build Configuration
- **Build Command**: `npm run build`
- **Publish Directory**: `build`
- **Environment**: Node.js
- **Entry Point**: `public/index.html`

### Important Files
- `netlify.toml`: Contains build settings and redirect rules
- `public/_redirects`: Ensures proper client-side routing for SPA
- `public/index.html`: Main entry point
- `src/index.tsx`: Application entry point

### Deployment Steps
1. Push your code to a GitHub repository
2. Log in to Netlify and click "New site from Git"
3. Choose GitHub and select your repository
4. Build settings will be automatically detected from netlify.toml
5. Click "Deploy site"

### Post-Deployment
- Set up custom domain (if needed)
- Configure SSL/TLS certificate
- Review deploy logs for any build issues

## Dependencies
- React 18+
- TypeScript
- CSS Modules
- Google Fonts (Poppins)

## File Structure
```
foamworks-template/
├── docs/
│   ├── project-overview.md
│   └── image-usage.md
├── public/
│   ├── images/
│   │   ├── hero-bg.jpg
│   │   ├── residential-foam.jpg
│   │   ├── commercial-foam.jpg
│   │   ├── why-choose-bg.jpg
│   │   ├── cert1.png
│   │   ├── cert2.png
│   │   ├── cert3.png
│   │   ├── visa.png
│   │   ├── mastercard.png
│   │   ├── amex.jpg
│   │   ├── interac.png
│   │   ├── check.png
│   │   ├── facebook.png
│   │   ├── instagram.png
│   │   └── google.png
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.tsx
│   │   │   └── Navbar.module.css
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   └── Hero.module.css
│   │   ├── Services/
│   │   │   ├── Services.tsx
│   │   │   └── Services.module.css
│   │   ├── Testimonials/
│   │   │   ├── Testimonials.tsx
│   │   │   └── Testimonials.module.css
│   │   └── Footer/
│   │       ├── Footer.tsx
│   │       └── Footer.module.css
│   ├── styles/
│   │   └── global.css
│   ├── App.tsx
│   └── index.tsx
└── package.json
```

## Component Structure
1. **Navbar**: Fixed navigation with logo, menu items, and contact information
   - Mobile-responsive hamburger menu
   - Top banner with certifications
   - Contact buttons

2. **Hero**: Main landing section
   - Hero content with company tagline
   - CTA section with contact options
   - Main content section about company expertise

3. **Services**: Service offerings section
   - Two main service cards (Residential & Commercial)
   - Why choose section with background image
   - Call-to-action buttons

4. **Testimonials**: Customer reviews section
   - Star ratings
   - Paginated testimonials
   - TV show features
   - Company logos

5. **Footer**: Site footer with multiple sections
   - Location cards for different regions
   - Payment method icons
   - Social media links
   - Copyright information

## Styling System
- CSS Modules for component-specific styles
- Global CSS variables for consistent theming
- Responsive design breakpoints:
  - Desktop: 1200px+
  - Tablet: 768px - 1199px
  - Mobile: < 768px
  - Small Mobile: < 480px

## Color Scheme
```css
--primary-color: #1a365d;
--secondary-color: #2b6cb0;
--accent-color: #ed8936;
--text-color: #2d3748;
--text-light: #718096;
--text-dark: #1a202c;
--bg-primary: #ffffff;
--bg-secondary: #f7fafc;
--bg-accent: #edf2f7;
```

## Typography
- Primary Font: 'Poppins' (300, 400, 500, 600, 700 weights)
- Responsive font sizing
- Modular scale for headings

## Best Practices
- Semantic HTML structure
- Accessible navigation
- Mobile-first responsive design
- Performance optimized images
- SEO-friendly markup
- Progressive enhancement
