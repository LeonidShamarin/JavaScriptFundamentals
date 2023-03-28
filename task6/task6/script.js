// Реалізувати логіку підрахунку ціни товару по його варіаціях(шаблон наведений
//   тут, при кліку на колір змінювати ціну товару).
// Придумати ще 2 варіації, від яких буде залежати ціна товару.

// оновлюємо ціну залежно від вибраного кольору, розміру та кількості
function updatePrice() {
  // отримуємо обрані елементи
  const selectedColor = document.querySelector(".color.active");
  const selectedSize = document.querySelector(".size.active");
  const quantity = document.getElementById("quantity").value;
  // отримуємо ціну з даних елементів
  const colorPrice = parseInt(selectedColor.getAttribute("data-price"));
  const sizePrice = parseFloat(selectedSize.getAttribute("data-price"));
  const totalPrice = (colorPrice + sizePrice) * quantity;
  // виводимо ціну на сторінку
  const outPriceElement = document.getElementById("outprice");
  outPriceElement.textContent = totalPrice.toFixed(2);
}
// викликаємо функцію оновлення ціни при зміні кольору, розміру та кількості
const colors = document.querySelectorAll(".color");
colors.forEach((color) => {
  color.addEventListener("click", () => {
    // відмічаємо клас active для обраного кольору
    colors.forEach((c) => c.classList.remove("active"));
    color.classList.add("active");
    updatePrice();
  });
});

const sizes = document.querySelectorAll(".size");
sizes.forEach((size) => {
  size.addEventListener("click", () => {
    // відмічаємо клас active для обраного розміру
    sizes.forEach((c) => c.classList.remove("active"));
    size.classList.add("active");
    updatePrice();
  });
});

const quantity = document.getElementById("quantity");
quantity.addEventListener("input", () => {
  updatePrice();
});
