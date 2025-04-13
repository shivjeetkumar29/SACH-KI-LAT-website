document.addEventListener("DOMContentLoaded", () => {
    let allSeries = [];
  
    // Load data from JSON
    fetch("series-data.json")
      .then(response => response.json())
      .then(data => {
        allSeries = data;
        renderSeries(allSeries);
      })
      .catch(error => console.error("Error loading series:", error));
  
    // Render series cards
    function renderSeries(seriesArray) {
      const container = document.getElementById("seriesGrid");
      container.innerHTML = "";
  
      seriesArray.forEach(series => {
        const card = document.createElement("div");
        card.className = "series-card";
        card.innerHTML = `
          <img src="${series.image}" alt="${series.title}">
          <h3>${series.title}</h3>
          <p>${series.description}</p>
        `;
        container.appendChild(card);
      });
    }
  
    // Search & Filter events
    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");
  
    searchInput.addEventListener("input", applyFilters);
    categoryFilter.addEventListener("change", applyFilters);
  
    function applyFilters() {
      const searchText = searchInput.value.toLowerCase();
      const selectedCategory = categoryFilter.value;
  
      const filtered = allSeries.filter(series => {
        const titleMatch = series.title.toLowerCase().includes(searchText);
        const categoryMatch =
          selectedCategory === "all" ||
          series.title.toLowerCase().includes(selectedCategory);
  
        return titleMatch && categoryMatch;
      });
  
      renderSeries(filtered);
    }
  });
  