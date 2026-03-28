# VibeCheck - Creative Brand Collection

A cyberpunk-themed e-commerce application built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Cyberpunk aesthetic with neon gradients and animations
- 🛍️ Full e-commerce functionality with shopping cart
- 🎯 Style quiz to help users discover their vibe
- 👕 Virtual closet with drag-and-drop outfit builder
- 📱 Fully responsive design
- ✨ Smooth animations powered by Framer Motion
- 🎭 Interactive components with Tailwind CSS

## Tech Stack

- **Frontend**: React 18.2
- **Build Tool**: Vite 5.0
- **Styling**: Tailwind CSS 3.3
- **Animations**: Framer Motion 10.16
- **Routing**: React Router DOM 6.20
- **Icons**: Lucide React 0.294
- **UI Components**: Headless UI 1.7

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd C.B.C.-Creative-Brand-Collection

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
vibe-check-cbc/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Footer.jsx
│   │   └── ui/
│   │       └── Toaster.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── ProductPage.jsx
│   │   ├── StyleQuiz.jsx
│   │   ├── Checkout.jsx
│   │   └── VirtualCloset.jsx
│   ├── hooks/
│   │   └── useCart.js
│   ├── data/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
├── vercel.json
└── index.html
```

## Pages

### Home (`/`)
Landing page with hero section and featured collection preview

### Shop (`/shop`)
Browse all available products with category filtering and add to cart functionality

### Product Page (`/product/:id`)
Detailed product view with specifications and purchase options

### Style Quiz (`/quiz`)
Interactive quiz to help users discover their personal cyberpunk vibe

### Virtual Closet (`/virtual-closet`)
Drag-and-drop outfit builder for mixing and matching items

### Checkout (`/checkout`)
Shopping cart review and purchase completion

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import repository in Vercel dashboard
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy!

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## Colors & Styling

The project uses a custom cyberpunk color palette:
- **Neon Green**: `#00ff88`
- **Neon Blue**: `#00d4ff`
- **Neon Purple**: `#ff00ff`
- **Cyber Black**: `#0a0a0a`
- **Cyber Dark**: `#1a1a1a`

## Animations

All animations are built with Framer Motion and include:
- Page transitions
- Component hover effects
- Scroll-triggered animations
- Smooth glowing effects
- Floating elements

## Contributing

Feel free to fork and submit pull requests for any improvements.

## License

MIT License - feel free to use this project as you wish!

## Support

For issues or questions, please open an issue on GitHub.

---

Made with ❤️ by Creative Brand Collection
