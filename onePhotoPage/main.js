const items = document.querySelector('#current_photo');


function currentPhotoMarkup(product) {
  return `
<figure class="photo">
    <img src="${product.image[id]} alt="" />
</figure>
<article class="description">
    <h1 class="product_title">${product.name}</h1>
    <article class="stars">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <p class="price">${product.price}</p>
        <a href="" class="add_to_cart">Add to cart</a>
    </article>
</article>
    `;
}

function insertCurrentPhoto()
{
  
}