# 🛍️ React Store App

A clean, modern React + TypeScript eCommerce app with Tailwind CSS, showcasing a responsive product catalog, detailed product view, and cart functionality.

---

## 🚀 Tech Stack

- **React** (with Vite for fast development)
- **TypeScript**
- **Tailwind CSS**
- **React Router DOM v6**
- **Context API** (for global cart state)

---

## 📦 Features

### 🛍️ Product Catalog
- Responsive grid layout
- Images, titles, categories, and prices
- Links to individual product detail pages

### 📄 Product Detail Page
- Left image gallery + preview thumbnails
- Right section with:
  - Title, category, price
  - Size selection
  - Add to Cart button
  - Google Pay-style button
  - Accepted payment icons
- Back to home link

### 🛒 Cart Page
- List of all cart items
- Quantity control (➕ ➖)
- Remove item
- Clear cart
- Cart total
- Floating cart button visible globally

---

## 📁 Folder Structure

```
src/
├── components/       # Shared components (Layout, ProductCard)
├── context/          # Cart context for global state
├── pages/            # ProductList, ProductDetail, CartPage
├── services/         # API calls (fetchProducts, fetchProductById)
├── types/            # TypeScript interfaces (e.g., Product)
├── App.tsx           # Route definitions
├── main.tsx          # App root
└── index.css         # Tailwind styles
```

---

## 🧪 Getting Started

### ✅ Prerequisites
- Node.js v18+
- npm or yarn

### 📦 Install dependencies
```bash
npm install
```

### 🚴 Run the app locally
```bash
npm run dev
```

App will be available at: `http://localhost:5173`

---

## 🧹 To Do / Ideas for Enhancement
- Add toast notification on add/remove from cart
- Support quantity input directly
- Add wishlist or favorites
- Pagination or filtering in product list
- Authentication and checkout flow

---

## 📸 Screenshots
_(optional: add screenshots of product list, detail view, cart)_

---

## 🧑‍💻 Author
Developed by **Waleed** — a passionate Flutter developer diving into the React ecosystem 💙
