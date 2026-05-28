import { useCart } from "../context/CartContext";

function DetailCard({ product }) {
  const { addToCart } = useCart();

  return (
    <section className="detail-card">
      <div className="detail-image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="detail-image"
        />
      </div>

      <div className="detail-info">
        <span className="detail-category">{product.category}</span>

        <h1>{product.name}</h1>

        <p className="detail-description">{product.description}</p>

        {product.rating && (
          <p className="detail-rating">Rating: {product.rating}</p>
        )}

        <p className="detail-price">${product.price}</p>

        <button
          className="detail-button"
          onClick={() => {
            addToCart(product);
            console.log("Product added to cart:", product);
          }}
        >
          Add to cart
        </button>
      </div>
    </section>
  );
}

export default DetailCard;