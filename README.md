# E-commerce Product Page

A React frontend exercise focused on a product-details page and an in-memory shopping cart. Product information comes from a local data module, not a live commerce backend.

## Features

- Product image slider, pricing, discounts and rating display.
- Size, color and quantity selection.
- Add-to-cart flow that combines matching product variants.
- Cart item count, navigation and breadcrumb updates.
- Lazy-loaded product-details route.

## Stack

React 18, JavaScript, React Router 6, SCSS and Create React App.

## Run locally

Requires Node.js and npm. From the repository directory:

```sh
npm install
npm start
```

The development server runs at `http://localhost:3000`.

```sh
npm run build
npm test
```

The build command creates the production bundle in `build/`. The test command starts the configured React Scripts test runner.

## Source guide

- `src/pages/ItemDetails/ItemDetails.js`: product selection and cart logic.
- `src/components/`: slider, product cards, navigation, rating and footer.
- `src/services/Products/Product.js`: local product data.
- `src/App.js`: shared cart state and routes.

## Scope

This is a frontend exercise, not a production store. It has no real checkout, payment processing or order backend. Cart state is held in memory and is reset on a page refresh. The repository uses an older Create React App toolchain; dependency updates and a fresh build/test pass should come before production use.
