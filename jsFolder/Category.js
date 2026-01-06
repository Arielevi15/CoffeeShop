  /*const container = document.getElementById('categories');


document.addEventListener('DOMContentLoaded', loadCategories);

async function loadCategories() {

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
      </div>  `

    ).join('');



  container.addEventListener('click', (event) => {


  const categoryDiv = event.target.closest('.category');


  const item = categoryDiv.doocument.createElement('div');
  categoryDiv.className = 'category';
  categoryDiv.setAttribute('data-category-id', item.id);

  const title = document.createElement('span');
  title.className = 'category-title';
  title.textContent = item.topic;

  const img = document.createElement('img');
  img.src = item.picture;
  img.alt = item.topic;

  const infoP = document.createElement('p');
  infoP.className = 'category-info';
  infoP.textContent = item.information;

  categoryDiv.appendChild(title);
  categoryDiv.appendChild(img);
  categoryDiv.appendChild(infoP);

categoryDiv.addEventListener('click', () => {
        // 1. שמירת הקטגוריה שנבחרה בזיכרון הדפדפן כדי שדף המוצרים ידע מה להציג
        localStorage.setItem('selectedCategory', item.id); 
        
        // 2. מעבר לדף המוצרים
        window.location.href = '/HtmlFolder/products.html'; // ודא שזה הנתיב הנכון
      });

      // הוספה לדף
      container.appendChild(categoryDiv);


});


  } catch (err) {
    container.textContent = 'Failed to load categories.';
    console.error(err);
  }



  const container = document.getElementById('categories');




}
*/

const container = document.getElementById('categories');

// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', loadCategories);

async function loadCategories() {
    // Show loading state to the user
    container.textContent = 'Loading categories...';

    try {
        // 1. Fetch data from the JSON file
        const res = await fetch('/extra/categories.json');

        // Check if the request was successful
        if (!res.ok) {
            throw new Error(`HTTP Error: ${res.status}`);
        }

        const data = await res.json();
        const items = data.menu_categories; // Ensure this matches your JSON structure

        // Clear the loading message
        container.textContent = '';

        // Handle empty data case
        if (!items || items.length === 0) {
            container.textContent = 'No categories found.';
            return;
        }

        // 2. Iterate over the data and create DOM elements dynamically
        items.forEach(item => {
            // Create the main card container
            const categoryCard = document.createElement('div');
            categoryCard.className = 'category'; // CSS class for styling
            
            // Create the Title element
            const titleEl = document.createElement('span');
            titleEl.className = 'category-title';
            titleEl.textContent = item.topic; // 'topic' from JSON

            // Create the Image element
            const imgEl = document.createElement('img');
            imgEl.src = item.picture; // 'picture' path from JSON
            imgEl.alt = item.topic;   // Accessibility alt text

            // Create the Info paragraph
            const infoEl = document.createElement('p');
            infoEl.className = 'category-info';
            infoEl.textContent = item.information;

            // 3. Append all elements to the card
            categoryCard.appendChild(titleEl);
            categoryCard.appendChild(imgEl);
            categoryCard.appendChild(infoEl);

            // 4. Add Click Event Listener specifically to this card
            // This handles the navigation to the products page
            categoryCard.addEventListener('click', () => {
                console.log(`User selected category ID: ${item.id}`);
                
                // Save the selected ID to LocalStorage so the next page knows what to load
                localStorage.setItem('selectedCategory', item.id);
                
                // Redirect to the products page
                window.location.href = '/HtmlFolder/products.html';
            });

            // 5. Finally, add the card to the main container
            container.appendChild(categoryCard);
        });

    } catch (err) {
        // Handle errors gracefully
        container.textContent = 'Failed to load categories. Please try again later.';
        console.error('Error loading categories:', err);
    }
}






``