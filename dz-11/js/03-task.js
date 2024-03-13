let productForm = document.forms.productForm;
let productsTable = document.querySelector("#productsTable");
let saveButton = document.querySelector("#saveButton");
let searchError = document.querySelectorAll("searchError");

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
