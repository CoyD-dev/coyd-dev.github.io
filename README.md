# Rank Up Academy - Overwatch 2 Coaching Website

A modern, responsive React.js website for Rank Up Academy - Professional Overwatch 2 coaching and esports training. Built with modular architecture, CSS modules, and advanced UX features for optimal performance and maintainability.

🌐 **Live Site:** [https://coyd-dev.github.io](https://coyd-dev.github.io)

## ✨ Features

### 🎮 **Core Sections**
- **Hero Section** with dynamic background and call-to-action
- **Video Introduction** with responsive iframe integration
- **Benefits Section** with Intersection Observer scroll animations
- **Interactive Testimonials Gallery** with modal viewer, keyboard navigation, and smooth scrolling
- **Pricing Section** with character hero backgrounds (Zenyatta/Ana)
- **FAQ Section** with animated accordion functionality
- **Call-to-Action** with prominent signup button
- **Alternative messaging** section for engagement

### 🏗️ **Architecture & Code Quality**
- **Modular Component Architecture** - Each section broken into reusable, focused components
- **CSS Modules** - Scoped styling with dedicated `.module.css` files
- **TypeScript Integration** - Full type safety across all components
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Performance Optimized** - Code splitting and efficient rendering

### 🎨 **User Experience**
- **Smooth Animations** and hover effects throughout
- **Gaming-themed Design** with golden accent colors and dark theme
- **Accessibility Features** - Keyboard navigation, ARIA labels, semantic HTML
- **Interactive Elements** - Modal galleries, accordions, animated icons
- **Scroll Behavior** - Smart scrolling with navbar offset calculations

## 🛠️ Technology Stack

- **React.js 19.1.1** with TypeScript for type-safe development
- **CSS Modules** with scoped styling and custom animations
- **Intersection Observer API** for scroll-triggered animations
- **GitHub Pages** for hosting and deployment
- **ESLint** for code quality and consistency
- **Modern Web APIs** - ResizeObserver, smooth scrolling, keyboard events

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/CoyD-dev/coyd-dev.github.io.git
cd coyd-dev.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Deployment

To deploy to GitHub Pages:
```bash
npm run deploy
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm run deploy` - Deploys the app to GitHub Pages
- `npm test` - Launches the test runner

## 🚀 Recent Improvements

### Component Refactoring (Latest)
- **Modular Architecture**: Converted monolithic App.tsx into focused, reusable components
- **CSS Modules Integration**: Replaced all inline styles with scoped CSS modules
- **State Management**: Properly organized component state and event handlers
- **TypeScript Enhancement**: Added comprehensive type definitions across components

### Performance Enhancements
- **Code Splitting**: Components are now individually loadable
- **Optimized Rendering**: Reduced unnecessary re-renders through proper component structure
- **Scroll Performance**: Enhanced scroll behavior with proper offset calculations
- **Bundle Optimization**: Improved build size through better code organization

### UX/UI Improvements
- **Interactive Elements**: Enhanced FAQ accordion with smooth animations
- **Gallery Experience**: Improved testimonials gallery with keyboard navigation
- **Responsive Design**: Better mobile and tablet experience across all sections
- **Accessibility**: Added ARIA labels, semantic HTML, and keyboard navigation support

## Credits & Acknowledgments

### Content Creator
**Awkward** - Professional Overwatch 2 Coach & Content Creator
- 🌐 Website: [rankupacademy.gg](https://rankupacademy.gg)
- 🐦 Twitter: [twitter.com/awkwardOW](https://twitter.com/awkwardOW)
- 📸 Instagram: [instagram.com/danynovak1](https://instagram.com/danynovak1)
- 🎥 YouTube: [youtube.com/@Awkward3](https://youtube.com/@Awkward3)

### Design & Assets
**sweetiepie3820** (Discord) - Design consultation and image assets

## Disclaimer

This is a **volunteer project** created for educational and portfolio purposes.

- **No commercial intent** - This project was built as a demonstration of web development skills
- **No rights claimed** - All content, branding, and testimonials belong to their respective owners
- **Educational use** - Created to showcase React.js development capabilities and modern web design

## 📁 Project Structure

```
src/
├── App.tsx                     # Main application component with section orchestration
├── index.css                   # Global styles and responsive design
├── testemonials.json           # Testimonials data
├── assets/                     # Static assets and reference images
└── components/                 # Modular component architecture
    ├── Shared/                 # Shared components (BrandedSectionTitle, etc.)
    ├── Navigation/             # Navigation bar with responsive behavior
    ├── Hero/                   # Hero section with dynamic content
    ├── VideoIntro/             # Video introduction section
    ├── Benefits/               # Benefits with scroll animations
    ├── Testimonials/           # Interactive gallery with modal viewer
    ├── Choice/                 # Pricing section with character backgrounds
    │   ├── Choice.tsx
    │   ├── PricingSection.tsx
    │   ├── PricingColumn.tsx
    │   ├── PricingCenter.tsx
    │   ├── PricingFeatures.tsx
    │   └── PricingFeatureItem.tsx
    ├── CallToAction/           # Call-to-action with CSS modules
    │   ├── CallToAction.tsx
    │   ├── CallToAction.module.css
    │   ├── CTAButton.tsx
    │   └── CTAMessage.tsx
    ├── AlternativeText/        # Alternative messaging section
    │   ├── AlternativeText.tsx
    │   ├── AlternativeText.module.css
    │   └── AlternativeMessage.tsx
    ├── FAQ/                    # Accordion FAQ with state management
    │   ├── FAQ.tsx
    │   ├── FAQ.module.css
    │   ├── FAQSection.tsx
    │   ├── FAQItem.tsx
    │   ├── FAQQuestion.tsx
    │   ├── FAQAnswer.tsx
    │   ├── FAQIcon.tsx
    │   └── faqData.ts
    ├── Footer/                 # Footer component
    └── CookieConsent/          # Cookie consent banner
```

### 🏗️ **Architecture Benefits**

- **Separation of Concerns** - Each component has a single responsibility
- **Reusability** - Components can be easily reused and composed
- **Maintainability** - Changes are isolated to specific component areas
- **Testability** - Individual components can be tested in isolation
- **Scalability** - New features can be added without affecting existing code

## License

This project is created for educational purposes. All rights to the Rank Up Academy brand, content, and testimonials remain with their respective owners.

---

Built with ❤️ using React.js and modern web technologies.