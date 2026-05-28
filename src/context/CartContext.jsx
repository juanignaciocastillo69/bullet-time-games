import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    const productInCart = cartItems.find(
      (item) => item.id === product.id && item.type === product.type
    );

    if (productInCart) {
      const updatedCart = cartItems.map((item) => {
        if (item.id === product.id && item.type === product.type) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });

      setCartItems(updatedCart);
    } else {
      const newProduct = {
        ...product,
        quantity: 1,
      };

      setCartItems([...cartItems, newProduct]);
    }
  }

  function removeFromCart(id, type) {
    const filteredCart = cartItems.filter(
      (item) => !(item.id === id && item.type === type)
    );

    setCartItems(filteredCart);
  }

  function clearCart() {
    setCartItems([]);
  }

  const totalItems = cartItems.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + Number(item.price) * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}