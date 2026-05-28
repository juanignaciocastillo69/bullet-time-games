function HomeFilters({ selectedType, setSelectedType }) {
  return (
    <section className="home-filters">
      <div className="filter-group">
        <span className="filter-label">Category</span>

        <div className="filter-buttons">
          <button
            className={
              selectedType === "all" ? "filter-button active" : "filter-button"
            }
            onClick={() => setSelectedType("all")}
          >
            All
          </button>

          <button
            className={
              selectedType === "console"
                ? "filter-button active"
                : "filter-button"
            }
            onClick={() => setSelectedType("console")}
          >
            Consoles
          </button>

          <button
            className={
              selectedType === "game" ? "filter-button active" : "filter-button"
            }
            onClick={() => setSelectedType("game")}
          >
            Games
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomeFilters;