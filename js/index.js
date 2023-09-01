const handleCategory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await res.json();
  const categories = data.data;

  const btnContainer = document.getElementById("btn-container");

  categories.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <button class="btn">${category.category}</button>
    `;
    btnContainer.appendChild(div);
  });
};
handleCategory();
