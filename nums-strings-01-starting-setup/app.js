function randomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomIntBetween(2, 13));

function productDescription(strings, productName, productPrice) {
  console.log(strings);
  console.log(productName);
  console.log(prodPrice);
  let priceCategory = "cheap";
  if (productPrice > 20) {
    priceCategory = "fair";
  }
  return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;
}

const prodName = "Javascript";
const prodPrice = 29.99;

const productOutput = productDescription`This product (${prodName}) is a ${prodPrice}`;
console.log(productOutput);
