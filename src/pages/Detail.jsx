useEffect(() => {
  window.scrollTo(0, 0);
  setLoading(true);

  if (type === "console") {
    getProducts()
      .then((data) => {
        const selectedConsole = data.find((item) => item.id === id);

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
    fetch(`https://www.cheapshark.com/api/1.0/deals?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        const gameInfo = data.gameInfo;

        const formattedGame = {
          id,
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
}, [type, id]);