# **Simple Shop**

## **Overview**

**Simple Shop** is an e-commerce application built with **Angular**. It allows users to browse products, search products, view product details, and explore different categories.

---

## **Approach**

- **Component-Based Architecture**: The app is divided into components like Navbar, Product Card, Home, Product Details, and Cart.
- **Routing**: Angular routing is used to navigate between the home page, product details, and cart.
- **Search & Categories**: The home page allows searching products and viewing products by category.
- **State Management**: Services like `ProductService` manage fetching data and maintaining cart state.

---

## **Setup and Installation**

### **Prerequisites**
- **Node.js** (v16.x or later)
- **Angular CLI**: Install globally using `npm install -g @angular/cli`.

### **Step 1: Clone the Repository**
```bash
git clone https://github.com/your-username/simple-shop.git
cd simple-shop
```

### **Step 2: Install Dependencies**
```bash
npm install
```

### **Step 3: Run the Application**
```bash
ng serve
```
Visit `http://localhost:4200` to view the app.

---

## **Application Structure**

```
src/
│── app/
│   ├── components/
│   │   ├── navbar/
│   │   ├── product-card/
│   ├── pages/
│   │   ├── home/
│   │   ├── product-details/
│   ├── services/
│   │   ├── product.service.ts
│   ├── models/
│   │   ├── product.model.ts
│   ├── app.component.ts
│   ├── app.routes.ts
```

- **Home Page**: Lists all products with a search bar and product categories.
- **Product Details**: Shows detailed information about each product.

---

## **Key Features**
- **Product Listing**: All products are displayed on the home page.
- **Search**: Users can search for products by name or category.
- **Categories**: Products can be filtered by categories.
- **Product Details**: Clicking on a product shows its details.

---



This guide helps you set up **Simple Shop** locally. For any issues, feel free to open an issue in the GitHub repository!