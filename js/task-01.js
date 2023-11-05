const listCategories = document.querySelectorAll("li.item");
console.log('Number of categories: ' + listCategories.length);

listCategories.forEach((item) => {
    const title = item.querySelector("h2").textContent;
    const itemCount = item.querySelectorAll("li").length;
    console.log('Category: ' + title);
    console.log('Elements: ' + itemCount);

})