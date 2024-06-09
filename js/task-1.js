const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const listItemsCount = category.querySelectorAll('ul li').length;
    console.log(`Category: ${title} 
Elements: ${listItemsCount}`);
});
