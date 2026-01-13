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
  // מציג למשתמש הודעת טעינה עד שהנתונים יגיעו מהשרת
    container.textContent = 'Loading categories...';

    try {
        // ביצוע בקשת רשת (Fetch) כדי לשלוף נתונים מקובץ ה-JSON
        const res = await fetch('/extra/categories.json');

        // בדיקה אם הבקשה הצליחה
        if (!res.ok) {
            throw new Error(`HTTP Error: ${res.status}`);
        }

        const data = await res.json();
        const items = data.menu_categories; // בדיקת וודאות האם הJSON באותו המבנה בקובץ

        // ניקוי הודעת הטעינה לאחר שהנתונים הגיעו
        container.textContent = '';

        // // טיפול במקרה קצה: אם אין נתונים או שהמערך ריק
        if (!items || items.length === 0) {
            container.textContent = 'No categories found.';
            return;
        }

        //לולאה שרצה באופן דינאמי ויוצרת אלמנטים
        items.forEach(item => {
            // יוצר את הכרטיס עבור כל קטגוריה
            const categoryCard = document.createElement('div');
            categoryCard.className = 'category'; // CSS class for styling
            
            // יוצר את כותרת הקטכוריה
            const titleEl = document.createElement('span');
            titleEl.className = 'category-title';
            titleEl.textContent = item.topic; // 'topic' from JSON

            // יוצר את תמונה הקטגוריה
            const imgEl = document.createElement('img');
            imgEl.src = item.picture; // 'picture' path from JSON
            imgEl.alt = item.topic;   // Accessibility alt text

            // יוצר את פסקת התיאור של הקטגוריה
            const infoEl = document.createElement('p');
            infoEl.className = 'category-info';
            infoEl.textContent = item.information;

            // הדביק את כל המידע שנאסף אל כרטיס האבא של הקטגוריה
            categoryCard.appendChild(titleEl);
            categoryCard.appendChild(imgEl);
            categoryCard.appendChild(infoEl);

            // הוספת מאזין ללחיצה ספציפית לכרטיס
            // זה מטפל במעבר לדף המוצרים של הקטגוריה שנבחרה
            categoryCard.addEventListener('click', () => {
                console.log(`User selected category ID: ${item.id}`);
                
                //שומר את מזהה הקטגוריה באחסון המקומי כדי שדף המוצרים יידע איזה קטגוריה נבחרה
                localStorage.setItem('selectedCategory', item.id);
                
                // העברה לדף המוצרים
                window.location.href = '/HtmlFolder/products.html';
            });

            // הוספת כרטיס הקטגוריה לקונטיינר הראשי של הדף
            container.appendChild(categoryCard);
        });

    } catch (err) {
        // תפיסת שגיאות
        container.textContent = 'Failed to load categories. Please try again later.';
        console.error('Error loading categories:', err);
    }
}






``