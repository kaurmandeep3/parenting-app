document.getElementById("filter-btn").addEventListener("click", () => {
  const search = document.getElementById("search").value.toLowerCase();
  const ageGroup = document.getElementById("age-group").value;
  const topic = document.getElementById("topic").value;

  // Fetch data from the JSON file
  fetch("tips.json")
    .then((response) => response.json())
    .then((data) => {
      // Filter data
      let filteredTips = data;

      if (search) {
        filteredTips = filteredTips.filter((tip) =>
          tip.title.toLowerCase().includes(search)
        );
      }

      if (ageGroup) {
        filteredTips = filteredTips.filter((tip) => tip.ageGroup === ageGroup);
      }

      if (topic) {
        filteredTips = filteredTips.filter((tip) => tip.topic === topic);
      }

      // Render filtered tips
      const contentCards = document.getElementById("content-cards");
      contentCards.innerHTML = "";

      if (filteredTips.length === 0) {
        contentCards.innerHTML = "<p>No tips found. Try adjusting the filters.</p>";
        return;
      }

      filteredTips.forEach((tip) => {
        const card = document.createElement("article");
        card.classList.add("card");
        card.innerHTML = `
          <h3>${tip.title}</h3>
          <p>${tip.description}</p>
          <a href="#" class="btn">Read More</a>
        `;
        contentCards.appendChild(card);
      });
    })
    .catch((error) => console.error("Error fetching tips:", error));
});
