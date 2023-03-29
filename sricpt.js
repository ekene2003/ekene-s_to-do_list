function singleElem(element) {
  return document.querySelector(element);
}
function multiElem(element) {
  return document.querySelectorAll(element);
}

let input = singleElem(".input");
let addBtn = singleElem(".input-btn");
let checkBox = singleElem(".check");
let task = singleElem(".task");
let list = singleElem(".todo-list");
addBtn.onclick = (e) => {
  e.preventDefault();
  let userTask = input.value;
  list.innerHTML += `<div class="todo-items">
                              <div class="check">
                                   <div class="thick"></div>
                              </div>
                              <div class="task">${userTask}</div>
                              <div class="delete">
                                   <h2>Remove</h2>
                              </div>
                         </div>`;
  input.value = " ";
  let removeBtn = multiElem(".delete");
  removeBtn.forEach((btn) => {
    btn.onclick = () => {
      let closeList = btn.closest(".todo-items");
      closeList.style.display = "none";
    };
  });
};
