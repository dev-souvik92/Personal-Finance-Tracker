const transactionName = document.getElementById("transactionName");
const amountSpent = document.getElementById("amount");
const trackerBtn = document.getElementById("addBtn");
const unorderdList = document.getElementById("displayTrackerDetails");

trackerBtn.addEventListener("click", function () {
  const listElement = document.createElement("li");
  listElement.className = "list-group-item";
  listElement.innerHTML = `<p class="d-flex align-items-center d-flex justify-content-between mb-0">${transactionName.value} Rs.${amountSpent.value} <button class="btn btn-danger" onClick="deleteListBtn(this)">Delete</button></p>`;

  unorderdList.appendChild(listElement);
});

function deleteListBtn(delBtn) {
  const list = delBtn.parentElement.parentElement;
  list.remove();
}
