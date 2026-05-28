import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GameContainer() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=30")
      .then((response) => response.json())
      .then((data) => {
        setGames(data.slice(0, 8));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching games:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="games-section">
        <p className="games-loading">Loading digital games...</p>
      </section>
    );
  }

  return (
    <section className="games-section" id="games">
      <div className="games-header">
        <span className="games-tag">Digital Deals</span>
        <h2>Video Games</h2>
        <p>Explore digital game deals powered by real-time offers.</p>
      </div>

      <div className="games-grid">
        {games.map((game) => (
          <article className="game-card" key={game.dealID}>
            <img src={game.thumb} alt={game.title} className="game-image" />

            <div className="game-info">
              <h3>{game.title}</h3>

              <p className="game-rating">
                Steam rating: {game.steamRatingText || "No rating"}
              </p>

              <p className="game-normal-price">
                Normal price: ${game.normalPrice}
              </p>

              <p className="game-sale-price">${game.salePrice}</p>

              <Link
                to={`/detail/game/${game.dealID}`}
                className="game-button"
              >
                View game
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default GameContainer;