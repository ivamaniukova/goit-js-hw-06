const listCategories = document.querySelectorAll("li.item");
console.log('Number of categories: ' + listCategories.length);

listCategories.forEach((item) => {
    const title = item.firstElementChild.textContent;
    const itemCount = item.lastElementChild.querySelectorAll("li").length;
    console.log('Category: ' + title);
    console.log('Elements: ' + itemCount);

})