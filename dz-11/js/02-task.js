/*
        Завдання:
        Додайте у форму поле введення "Кількість на складі". Зробіть так, щоб під час натискання на кнопку "Зберегти" значення з поля "Кількість на складі"
        додавалася як четверта колонка таблиці.
        */
let productForm = document.forms.productForm;
let productsTable = document.querySelector("#productsTable");
let saveButton = document.querySelector("#saveButton");

saveButton.addEventListener("click", function () {
  addRow(
    productForm.name.value,
    productForm.price.value,
    productForm.currency.value
  );

  for (let i = 0; i < productForm.elements.length; i++) {
    const element = productForm.elements[i];
    if (element.type == "text") element.value = "";
  }
});

function addRow(name, price, currency) {
  let tr = document.createElement("tr");
  tr.insertAdjacentHTML("beforeend", `<td>${name}</td>`);
  tr.insertAdjacentHTML("beforeend", `<td>${price}</td>`);
  tr.insertAdjacentHTML("beforeend", `<td>${currency}</td>`);
  productsTable.append(tr);
}
