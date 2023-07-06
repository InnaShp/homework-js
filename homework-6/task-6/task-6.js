const colorProducts = document.querySelectorAll('.color');
const productPrice = document.getElementById('outprice');
const images = document.querySelectorAll('.shoe');
const gradients = document.querySelectorAll('.gradient');
const waterproof = document.getElementById('waterproof');
const breathable = document.getElementById('breathable');
const dropdownButton = document.getElementById('sizeDropdown');
const dropdownItems = document.querySelectorAll('.dropdown-menu li');

let selectedSize = null;

colorProducts.forEach(product => {
  product.addEventListener('click', () => {
    colorProducts.forEach(el => el.classList.remove('active'));
    product.classList.add('active');
    updateProductPrice();
    changeProductColor(product);
  });
});

dropdownItems.forEach(item => {
  item.addEventListener('click', () => {
    const size = item.textContent;
    dropdownButton.textContent = size;
    selectedSize = size;
    updateProductPrice();
    const selectedColorProduct = document.querySelector('.color.active');
    if (selectedColorProduct) {
      changeProductColor(selectedColorProduct);
    }
  });
});

waterproof.addEventListener('change', () => {
  updateProductPrice();
});

breathable.addEventListener('change', () => {
  updateProductPrice();
});

function updateProductPrice() {
  const selectedColorProduct = document.querySelector('.color.active');
  if (selectedColorProduct) {
    const price = +selectedColorProduct.getAttribute('data-price');
    const functionalityPriceAdjustment = calculateFunctionalityPriceAdjustment();
    const sizePriceAdjustment = getPriceAdjustmentWithSize(selectedSize);
    showProductPrice(price, functionalityPriceAdjustment, sizePriceAdjustment);
  }
}

function showProductPrice(standard, withFunctionality, withSize) {
  const fullPrice = parseFloat(standard + withFunctionality + withSize).toFixed(2);
  productPrice.textContent = `${fullPrice} $`;
}

function changeProductColor(product) {
  const productColor = product.getAttribute('color');
  gradients.forEach(gradient => {
    const gradientColor = gradient.getAttribute('color');
    gradient.classList.toggle('second', gradientColor === productColor);
  });
  images.forEach(image => {
    const imageColor = image.getAttribute('color');
    image.classList.toggle('show', imageColor === productColor);
  });
}

function calculateFunctionalityPriceAdjustment() {
  let priceAdjustment = 0;
  if (waterproof.checked) priceAdjustment += parseFloat(waterproof.getAttribute('price-koeficient'));
  if (breathable.checked) priceAdjustment += parseFloat(breathable.getAttribute('price-koeficient'));
  return priceAdjustment;
}

function getPriceAdjustmentWithSize(size) {
  if (size >= 36 && size <= 39) return -50;
  if (size >= 42) return 50;
  return 0;
}
