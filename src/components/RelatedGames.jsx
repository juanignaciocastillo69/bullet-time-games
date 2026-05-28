import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function RelatedGames() {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=20")
      .then((response) => response.json())
      .then((data) => {
        setGames(data.slice(0, 4));
      })
      .catch((error) => {
        console.error("Error fetching related games:", error);
      });
  }, []);

  function handleViewGame(gameId) {
    navigate(`/detail/game/${encodeURIComponent(gameId)}`);

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
  }

  return (
    <section className="related-games">
      <div className="related-header">
        <span className="related-tag">You may also like</span>
        <h2>Related games</h2>
      </div>

      <div className="related-grid">
        {games.map((game) => (
          <article className="related-card" key={game.dealID}>
            <img
              src={game.thumb}
              alt={game.title}
              className="related-image"
            />

            <div className="related-info">
              <h3>{game.title}</h3>

              <p className="related-price">${game.salePrice}</p>

              <button
                type="button"
                className="related-button"
                onClick={() => handleViewGame(game.dealID)}
              >
                View game
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default RelatedGames;