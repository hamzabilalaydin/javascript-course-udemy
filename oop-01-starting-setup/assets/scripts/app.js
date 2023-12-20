const productList = {
  products: [
    {
      title: "a pillow",
      imgurl:
        "https://bpb-us-w2.wpmucdn.com/u.osu.edu/dist/4/4139/files/2016/01/pillows-1z38kzh.jpg",
      price: 19.99,
      description: "A soft pillow",
    },
    {
      title: "a carpet",
      imgurl:
        "https://mydecorative.com/wp-content/uploads/2016/11/carpet-designs.jpg",
      price: 89.99,
      description: "A carpet which you might like - or not.",
    },
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
        <img src="${prod.imgurl}" alt="${prod.title}"/>
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
