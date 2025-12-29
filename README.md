# Gurumukh Machine Industries Website

A professional, responsive website for Gurumukh Machine Industries - manufacturers of industrial machinery including Power Press Machines, Shearing Machines, Hydraulic Machines, and more.

## 🚀 Features

- **Exact Replication**: Pixel-perfect recreation of the original Gurumukh Machine Industries website
- **Modular Architecture**: Clean, maintainable code with separate HTML sections, CSS components, and JS modules
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern Build Process**: Webpack-based development with hot reload and production optimization
- **SEO Optimized**: Proper meta tags, semantic HTML, and fast loading
- **Interactive Elements**: Carousel sliders, dropdown menus, and smooth animations
- **Deployment Ready**: Easy deployment to any web hosting service

## 🏗️ Project Structure

```
d:\DEPLOYMENT/
├── src/
│   ├── html/
│   │   ├── index.html          # Main HTML file with section placeholders
│   │   └── sections/           # Modular HTML sections
│   │       ├── header.html     # Navigation and logo
│   │       ├── hero.html       # Hero carousel with machine categories
│   │       ├── about.html      # Company highlights
│   │       ├── services.html   # Why choose us section
│   │       ├── portfolio.html  # Product categories, industries, stats, CTA
│   │       └── footer.html     # Footer with contact info
│   ├── css/
│   │   ├── styles.css          # Global styles and variables
│   │   └── components/         # Modular CSS components
│   │       ├── base.css        # Base styles and container
│   │       ├── header.css      # Header and navigation styles
│   │       ├── sections.css    # All section-specific styles
│   │       ├── footer.css      # Footer styles
│   │       └── responsive.css  # Media queries and responsive design
│   ├── js/
│   │   ├── main.js             # Main JavaScript file
│   │   └── modules/            # Modular JavaScript
│   │       ├── navigation.js   # Menu and navigation functionality
│   │       └── form.js         # Form handling (if needed)
│   └── images/                 # All website images organized by category
│       ├── Home Page/          # Hero and homepage images
│       ├── About-Us/           # About page images
│       ├── Hydraulic Machines/ # Hydraulic machine images
│       ├── Shearing Machines/  # Shearing machine images
│       └── ...                 # Other machine categories
├── dist/                       # Built production files
├── Gurumukh-Web/               # Original website files (reference)
├── package.json                # Node.js dependencies and scripts
├── webpack.config.js           # Webpack configuration
└── README.md                   # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with modular sections
- **CSS3**: Modern CSS with Flexbox, Grid, and custom properties
- **JavaScript ES6+**: Modular code with async/await and fetch API
- **Webpack 5**: Build tool for bundling and optimization
- **Node.js & Express**: Backend server for contact form
- **Nodemailer**: SMTP email sending
- **Font Awesome**: Icons for UI elements
- **Responsive Images**: Optimized image loading

## 📧 Contact Form Setup (SMTP)

The project includes a fully functional contact form with email integration:

### Backend Setup

1. **Install server dependencies:**
   ```bash
   npm run server:install
   ```

2. **Configure SMTP settings:**
   ```bash
   cd server
   cp .env.example .env
   ```
   
   Edit `.env` with your email credentials:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   CONTACT_EMAIL=info@gurumukhmachines.com
   ```

3. **For Gmail (recommended):**
   - Enable 2-factor authentication
   - Generate an "App Password" in Google Account settings
   - Use your Gmail address as SMTP_USER
   - Use the App Password as SMTP_PASS

4. **Start the backend server:**
   ```bash
   npm run server
   ```
   Server runs on `http://localhost:3001`

### Frontend Integration

The contact form automatically sends emails when submitted:
- **To:** Configured CONTACT_EMAIL
- **From:** Your SMTP email
- **Auto-reply:** Sent to customer
- **Validation:** Client and server-side
- **Error handling:** User-friendly messages

### Production Deployment

For production, deploy the backend separately:
```bash
# Backend (separate server)
cd server
npm start

# Frontend (static files)
npm run build
npm run serve
```

## 📋 Prerequisites

- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)
- **Git** (for version control)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd d:\DEPLOYMENT
```

### 2. Install Dependencies

```bash
npm run full-setup
```

This installs both frontend and backend dependencies.

### 3. Configure Email Settings

```bash
cd server
cp .env.example .env
# Edit .env with your SMTP credentials
```

### 4. Development Mode

**Frontend (separate terminal):**
```bash
npm run dev
```
Opens at `http://localhost:8080`

**Backend (separate terminal):**
```bash
npm run server:dev
```
Runs on `http://localhost:3001`

### 4. Production Build

Build optimized files for production:

```bash
npm run build
```

- Creates optimized bundle in `dist/` folder
- Minifies CSS and JavaScript
- Copies all assets and images

### 5. Serve Production Build

Test the production build locally:

```bash
npm run serve
```

- Serves files from `dist/` folder
- Opens at `http://localhost:3000`
- Simulates production environment

## 📁 Code Structure Explanation

### HTML Architecture
- **index.html**: Entry point with dynamic section loading
- **sections/**: Individual HTML files for each page section
- Sections load via JavaScript fetch() for better performance

### CSS Organization
- **base.css**: Container styles, typography, global resets
- **header.css**: Navigation, dropdowns, mobile menu
- **sections.css**: Hero carousel, cards, grids, buttons
- **footer.css**: Footer layout and styling
- **responsive.css**: Media queries for all screen sizes

### JavaScript Modules
- **main.js**: Initializes sections, handles dynamic loading
- **navigation.js**: Mobile menu toggle, dropdown functionality
- **form.js**: Contact form validation and submission (extendable)

### Image Organization
Images are organized by category matching the original website:
- Home Page images for hero carousel
- Machine category folders (Hydraulic, Shearing, etc.)
- Product images for portfolio section

## 🎯 Key Features Implemented

### Navigation
- Sticky header with smooth scroll
- Multi-level dropdown menus
- Mobile hamburger menu
- Active state indicators

### Hero Section
- 4-slide image carousel
- Auto-play with manual controls
- Gradient overlays for text readability
- Call-to-action buttons

### Content Sections
- **Company Highlights**: 6 feature cards
- **Why Choose Us**: 6 benefit cards with checkmarks
- **Product Categories**: 6 machine types with images
- **Industries Served**: 8 industry badges
- **Statistics**: 4 key metrics
- **Call-to-Action**: Contact encouragement

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly navigation
- Optimized images for all devices

### Performance
- Lazy-loaded sections
- Optimized image formats
- Minified CSS/JS bundles
- Efficient Webpack configuration

## 🚀 Deployment

### GitHub Pages
```bash
npm run deploy
```

### Manual Deployment
1. Run `npm run build`
2. Upload `dist/` folder contents to your web server
3. Ensure server supports modern file types

### Other Hosting Services
- **Netlify**: Connect GitHub repo, auto-deploys on push
- **Vercel**: Similar to Netlify with better performance
- **AWS S3 + CloudFront**: For scalable hosting
- **Traditional Hosting**: FTP upload of `dist/` files

## 🔧 Customization

### Adding New Sections
1. Create `src/html/sections/new-section.html`
2. Add styles in appropriate CSS component file
3. Update `main.js` sections array
4. Add placeholder div in `index.html`

### Modifying Content
- Edit HTML files in `src/html/sections/`
- Update images in `src/images/`
- Modify styles in `src/css/components/`

### Changing Styling
- Global variables in `src/css/styles.css`
- Component-specific styles in respective files
- Responsive breakpoints in `responsive.css`

## 🐛 Troubleshooting

### Build Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear dist folder
npm run clean
npm run build
```

### Development Server Not Starting
- Check if port 8080 is available
- Ensure Node.js version is v14+
- Try `npm run dev` again

### Images Not Loading
- Verify paths in HTML/CSS match folder structure
- Check Webpack copy configuration
- Ensure images are in correct folders

## � Code Reusability Guide

This project is built with reusability in mind. Here's how to access and reuse different components:

### 🎨 CSS Components

All CSS is modular and can be easily extracted for other projects:

#### **Base Styles** (`src/css/components/base.css`)
```css
/* Container system - reusable across projects */
.container {
  width: 80%;
  max-width: 1000px;
  margin-left: 10px;
  margin-right: auto;
}

/* Global typography */
body { font-family: 'Segoe UI', Arial, sans-serif; }
h1, h2, h3 { color: #0f172a; }
```

#### **Component Classes** (`src/css/components/sections.css`)
```css
/* Reusable card component */
.highlight-card, .why-card, .category-card {
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 8px 30px rgba(15,23,42,0.08);
  transition: transform 0.3s;
}

.highlight-card:hover, .why-card:hover, .category-card:hover {
  transform: translateY(-8px);
}

/* Reusable grid system */
.highlights-grid, .why-grid, .categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 30px;
}
```

#### **Responsive Utilities** (`src/css/components/responsive.css`)
```css
/* Mobile-first responsive breakpoints */
@media (max-width: 768px) {
  .container { padding: 0 1rem; }
  .nav { flex-direction: column; }
}

@media (max-width: 480px) {
  h1 { font-size: 2rem; }
  .hero-content h1 { font-size: 28px; }
}
```

### 🏗️ HTML Section Templates

#### **Hero Carousel** (`src/html/sections/hero.html`)
```html
<section class="hero-carousel">
  <div class="hero-slide slide-1 active">
    <img src="images/your-image.jpg" alt="Your Alt Text">
    <div class="hero-content">
      <h1>Your Headline</h1>
      <p>Your description text</p>
      <a class="btn">Call to Action</a>
    </div>
  </div>
</section>
```

#### **Card Grid Section** (`src/html/sections/about.html`)
```html
<section class="section highlights">
  <div class="container">
    <h2>Your Section Title</h2>
    <p class="subtitle">Your subtitle text</p>
    <div class="highlights-grid">
      <div class="highlight-card">
        <h3>Card Title</h3>
        <p>Card description</p>
      </div>
    </div>
  </div>
</section>
```

#### **Navigation Menu** (`src/html/sections/header.html`)
```html
<div class="container header-flex">
  <div class="logo">
    <img src="images/your-logo.jpg" alt="Your Logo">
  </div>
  <ul class="nav">
    <li><a href="#home">Home</a></li>
    <li>
      <a href="#products">Products</a>
      <ul>
        <li><a href="#item1">Sub Item 1</a></li>
      </ul>
    </li>
  </ul>
</div>
```

### ⚙️ JavaScript Modules

#### **Dynamic Section Loading** (`src/js/main.js`)
```javascript
// Reusable section loader
const sections = ['header', 'hero', 'about', 'services', 'portfolio', 'footer'];

sections.forEach(section => {
  fetch(`sections/${section}.html`)
    .then(response => response.text())
    .then(html => {
      document.getElementById(section).innerHTML = html;
    });
});
```

#### **Navigation Module** (`src/js/modules/navigation.js`)
```javascript
// Mobile menu toggle - reusable
export function initNavigation() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  menuToggle?.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}
```

#### **Carousel Functionality**
```javascript
// Reusable carousel logic
function showSlide(index) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');

  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
  });

  slides[index].classList.add('active');
  dots[index].classList.add('active');
}
```

### 🎯 Reusable Component Patterns

#### **Button Styles**
```css
/* Primary button */
.btn {
  background: linear-gradient(135deg, #2563eb, #1e40af);
  color: #fff;
  padding: 16px 40px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
}
```

#### **Card Components**
```css
/* Universal card styling */
.card {
  background: #fff;
  border-radius: 14px;
  padding: 30px;
  box-shadow: 0 8px 30px rgba(15,23,42,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 18px 45px rgba(15,23,42,0.18);
}
```

#### **Grid Systems**
```css
/* Flexible grid for any content */
.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 50px;
}
```

### 📁 How to Extract Components

#### **For a New Project:**

1. **Copy CSS Components:**
   ```bash
   # Copy individual component files
   cp src/css/components/base.css your-project/css/
   cp src/css/components/sections.css your-project/css/
   ```

2. **Extract HTML Templates:**
   ```bash
   # Copy section templates
   cp src/html/sections/hero.html your-project/templates/
   cp src/html/sections/about.html your-project/templates/
   ```

3. **Reuse JavaScript Modules:**
   ```javascript
   // In your project
   import { initNavigation } from './modules/navigation.js';
   import { initForm } from './modules/form.js';
   ```

4. **Adapt the Container System:**
   ```css
   /* Use the same container for consistent layouts */
   .container {
     width: 80%;
     max-width: 1000px;
     margin: 0 auto;
     padding: 0 20px;
   }
   ```

#### **Component Customization:**

- **Colors:** Modify CSS custom properties in `styles.css`
- **Spacing:** Adjust padding/margins in component files
- **Breakpoints:** Update responsive rules in `responsive.css`
- **Content:** Replace text and images in HTML templates

### 🚀 Quick Start for Reusing Components

1. **Basic Page Structure:**
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <link rel="stylesheet" href="css/base.css">
     <link rel="stylesheet" href="css/sections.css">
   </head>
   <body>
     <header>
       <div class="container header-flex">
         <!-- Navigation content -->
       </div>
     </header>
     
     <main>
       <section class="section">
         <div class="container">
           <div class="content-grid">
             <!-- Your content -->
           </div>
         </div>
       </section>
     </main>
   </body>
   </html>
   ```

2. **Include JavaScript:**
   ```javascript
   import { initNavigation } from './js/modules/navigation.js';
   
   document.addEventListener('DOMContentLoaded', () => {
     initNavigation();
   });
   ```

This modular architecture makes it easy to reuse individual components or entire sections in new projects while maintaining consistency and reducing development time.

## 📞 Support