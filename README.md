# Bullet Time Games

Bullet Time Games is a React ecommerce project focused on digital video games and gaming consoles.  
The application allows users to browse console products loaded from Firebase, view video game deals from an external API, access product detail pages, add products to a shopping cart, and simulate a successful purchase.

## Project overview

This project was developed as a final React course assignment.  
The main goal was to build a functional ecommerce-style Single Page Application using React components, routing, external data sources, Firebase, and global state management.

## Main features

- Home page with banner, console section, video game section and footer.
- Product cards for consoles loaded from Firebase.
- Video game cards loaded from the CheapShark API.
- Product detail page for both consoles and video games.
- Related games section inside the detail page.
- Shopping cart using React Context.
- Add to cart functionality.
- Remove products from cart.
- Clear cart functionality.
- Checkout simulation with purchase success message.
- Navigation using React Router.
- Category filter to show all products, only consoles, or only games.
- Responsive design for smaller screens.

## Technologies used

- React
- Vite
- JavaScript
- React Router DOM
- Firebase / Firestore
- Context API
- HTML
- CSS
- CheapShark API

## Data sources

The project uses two different data sources:

### Firebase

Firebase is used to store and retrieve console products such as:

- PlayStation 5
- Xbox Series X
- Nintendo Switch 2

Each console includes information such as name, description, price, category and image URL.

### CheapShark API

The CheapShark API is used to retrieve digital video game deals, including:

- Game title
- Sale price
- Normal price
- Steam rating
- Game image

## Project structure

```txt
src/
├── assets/
├── components/
│   ├── Banner.jsx
│   ├── ConsoleSection.jsx
│   ├── DetailCard.jsx
│   ├── Footer.jsx
│   ├── GameContainer.jsx
│   ├── HomeFilters.jsx
│   ├── navbar.jsx
│   └── RelatedGames.jsx
│
├── context/
│   └── CartContext.jsx
│
├── firebase/
│   ├── config.js
│   └── db.js
│
├── pages/
│   ├── Cart.jsx
│   ├── Detail.jsx
│   └── Home.jsx
│
├── App.jsx
├── App.css
└── main.jsx