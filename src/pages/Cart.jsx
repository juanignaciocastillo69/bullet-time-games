import { useState } from "react";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, clearCart, totalPrice } = useCart();
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);

  function handleCheckout() {
    setPurchaseCompleted(true);
    clearCart();
  }

  if (purchaseCompleted) {
    return (
      <section className="cart-page">
        <div className="purchase-success">
          <div className="purchase-check">✓</div>

          <h1>Purchase completed</h1>

          <p>
            Thanks for shopping at Bullet Time Games. Your order was successfully processed.
          </p>
        </div>
      </section>
    );
  }

  if (cartItems.length === 0) {
    return (
      <section className="cart-page">
        <div className="cart-empty">
          <h1>Your cart is empty</h1>
          <p>You have not added any products yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <div className="cart-header">
        <span className="cart-tag">Shopping Cart</span>
        <h1>Your selected products</h1>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map((item) => (
            <article className="cart-item" key={`${item.type}-${item.id}`}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />

              <div className="cart-item-info">
                <span className="cart-item-category">{item.category}</span>

                <h3>{item.name}</h3>

                <p>Quantity: {item.quantity}</p>

                <p className="cart-item-price">${item.price}</p>
              </div>

              <button
                className="cart-remove-button"
                onClick={() => removeFromCart(item.id, item.type)}
              >
                Remove
              </button>
            </article>
          ))}
        </div>

        <aside className="cart-summary">
          <h2>Order summary</h2>

          <div className="cart-summary-row">
            <span>Products</span>
            <span>{cartItems.length}</span>
          </div>

          <div className="cart-summary-row">
            <span>Total</span>
            <strong>${totalPrice.toFixed(2)}</strong>
          </div>

          <button className="cart-checkout-button" onClick={handleCheckout}>
            Checkout
          </button>

          <button className="cart-clear-button" onClick={clearCart}>
            Clear cart
          </button>
        </aside>
      </div>
    </section>
  );
}

export default Cart;