# E-Commerce Product Catalog

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript)
![Redux](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=flat&logo=redux)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css)

A modern e-commerce product catalog built with React, TypeScript, and Redux Toolkit. Features product browsing, filtering, and shopping cart functionality.

## 🌟 Features

- **Product Catalog** - Browse products with images, prices, and descriptions
- **Category Filtering** - Filter products by category
- **Search Functionality** - Search products by name
- **Shopping Cart** - Add/remove items, update quantities
- **Responsive Design** - Works on desktop and mobile
- **State Persistence** - Cart saved to localStorage

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Fake Store API** - Product data

## 📁 Project Structure

```
ecommerce-catalog/
├── src/
│   ├── components/
│   │   ├── ProductCard.tsx
│   │   ├── ProductList.tsx
│   │   ├── Cart.tsx
│   │   ├── FilterSidebar.tsx
│   │   └── Navbar.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Products.tsx
│   │   └── CartPage.tsx
│   ├── store/
│   │   ├── index.ts
│   │   ├── productsSlice.ts
│   │   └── cartSlice.ts
│   ├── hooks/
│   │   └── useCart.ts
│   └── types/
│       └── index.ts
├── public/
└── README.md
```

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/rahanasuleiman8-ship-it/ecommerce-catalog.git

# Install dependencies
cd ecommerce-catalog
npm install

# Start development server
npm start
```

## 📸 Features Preview

### Product Grid
- Responsive product grid layout
- Product cards with images, titles, prices
- Add to cart functionality

### Shopping Cart
- Slide-out cart drawer
- Update quantities
- Remove items
- Total calculation

### Filtering
- Category filter
- Price range filter
- Sort by price/name

## 🔧 Key Components

| Component | Description |
|-----------|-------------|
| `ProductCard` | Individual product display |
| `ProductList` | Grid of all products |
| `Cart` | Shopping cart drawer |
| `FilterSidebar` | Category and price filters |

## 📈 What I Learned

- Redux Toolkit for complex state management
- React hooks and custom hooks
- TypeScript interfaces for API data
- Responsive design with Tailwind CSS
- Local storage persistence

## 🔮 Future Improvements

- [ ] User authentication
- [ ] Checkout flow
- [ ] Product detail pages
- [ ] Wishlist functionality
- [ ] Product reviews

## 📄 License

MIT License

## 📬 Contact

**Rahana Suleiman**
- Email: rahanasuleiman8@gmail.com
- LinkedIn: [linkedin.com/in/rahana-suleiman-106b103b1](https://linkedin.com/in/rahana-suleiman-106b103b1)
- GitHub: [github.com/rahanasuleiman8-ship-it](https://github.com/rahanasuleiman8-ship-it)

---

⭐️ If you found this project interesting, please consider giving it a star!