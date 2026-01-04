
try{

    const res = await fetch('/extra/categories.json');
    if(res.ok){
        throw new Error(res.statusText);
        const data = await res.json();
        const categoryType = data.menu_categories.topic;
    }    

} 
catch (err) {
    console.error(err);
}



document.addEventListener
