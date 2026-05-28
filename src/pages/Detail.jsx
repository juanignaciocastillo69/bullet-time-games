import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../firebase/db";
import DetailCard from "../components/DetailCard";
import RelatedGames from "../components/RelatedGames";

function Detail() {
  const { type, id } = useParams();
  const productId = decodeURIComponent(id);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    if (type === "console") {
      getProducts()
        .then((data) => {
          const selectedConsole = data.find((item) => item.id === productId);

          if (!selectedConsole) {
            setProduct(null);
            setLoading(false);
            return;
          }

          const formattedConsole = {
            id: selectedConsole.id,
            type: "console",
            name: selectedConsole.nombre,
            description:
              selectedConsole.descripcion ||
              selectedConsole.Descripcion ||
              selectedConsole.description ||
              "No description available.",
            price: selectedConsole.precio,
            category: selectedConsole.categoria,
            image: selectedConsole.url,
            rating: null,
          };

          setProduct(formattedConsole);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error getting console detail:", error);
          setLoading(false);
        });
    }

    if (type === "game") {
      fetch(`https://www.cheapshark.com/api/1.0/deals?id=${productId}`)
        .then((response) => response.json())
        .then((data) => {
          const gameInfo = data.gameInfo;

          const formattedGame = {
            id: productId,
            type: "game",
            name: gameInfo.name,
            description: "Digital video game deal available through CheapShark.",
            price: gameInfo.salePrice,
            category: "Digital game",
            image: gameInfo.thumb,
            rating: gameInfo.steamRatingText || "No rating",
          };

          setProduct(formattedGame);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error getting game detail:", error);
          setLoading(false);
        });
    }
  }, [type, id, productId]);

  if (loading) {
    return <p className="detail-loading">Loading detail...</p>;
  }

  if (!product) {
    return (
      <section className="detail-page">
        <h1>Product not found</h1>
        <p>We could not find this product.</p>
      </section>
    );
  }

  return (
    <section className="detail-page">
      <DetailCard product={product} />
      <RelatedGames />
    </section>
  );
}

export default Detail;