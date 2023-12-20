class Product {
  // title = "DEFAULT";
  // imgUrl;
  // description;
  // price;
  //IF WE DEFINING OUR CLASS IN CONSTRUCTOR WE DON'T NEED THESE

  constructor(title, image, desc, price) {
    this.title = title;
    this.imgUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
      <div>
        <img src="${this.product.imgUrl}" alt="${this.product.title}"/>
        <div class = 'product-item__content'>
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to cart</button>
        </div>
      </div>
      `;
    return prodEl;
  }
}

class ProductList {
  products = [
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
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
