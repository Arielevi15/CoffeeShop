document.addEventListener('DOMContentLoaded', loadCategories);

async function loadCategories() {

  const container = document.getElementById('categories');
  container.textContent = 'Loading...';

  try {
    const res = await fetch('/extra/categories.json');
     
    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    const items = data.menu_categories;

    if (!items.length) {
      container.textContent = 'No categories yet.';
      return;
    }



    container.innerHTML = items.map(item => 

      `<div class="category">
        <span class="category-title">${item.topic}</span>
        <img src="${item.picture}"/>
        <p class="category-info">${item.information}</p>
      </div>`

    ).join('');

  } catch (err) {
    container.textContent = 'Failed to load categories.';
    console.error(err);
  }

}
