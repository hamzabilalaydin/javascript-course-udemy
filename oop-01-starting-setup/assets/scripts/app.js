class Product {
  title = "DEFAULT";
  imgUrl;
  description;
  price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imgUrl = image;
    this.description = desc;
    this.price = price;
  }
}

const productList = {
  products: [
    new Product(
      "A pillow",
      "https://bpb-us-w2.wpmucdn.com/u.osu.edu/dist/4/4139/files/2016/01/pillows-1z38kzh.jpg",
      "A soft pillow",
      19.99
    ),
    new Product(
      "A carpet",
      "https://mydecorative.com/wp-content/uploads/2016/11/carpet-designs.jpg",
      "A carpet which you might like - or not.",
      89.99
    ),
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
      <div>
        <img src="${prod.imgUrl}" alt="${prod.title}"/>
        <div class = 'product-item__content'>
        <h2>${prod.title}</h2>
        <h3>\$${prod.price}</h3>
        <p>${prod.description}</p>
        <button>Add to cart</button>
        </div>
      </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
