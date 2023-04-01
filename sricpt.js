function singleElem(element) {
  return document.querySelector(element);
}
function multiElem(element) {
  return document.querySelectorAll(element);
}

let input = singleElem(".input");
let addBtn = singleElem(".input-btn");
let task = singleElem(".task");
let list = singleElem(".todo-list");
let done = singleElem(".marked");
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
  let checkBox = multiElem(".check");
  let thick = multiElem(".thick");
  checkBox.forEach((check) => {
    check.onclick = () => {
      let todo = check.closest(".todo-items");
      check.innerHTML = `<i class = "fa fa-check"></i>`;
      setTimeout(() => {
        todo.style.display = "none";
      }, 1000);
      let choosen = check.closest(".todo-items").querySelector(".task");
      done.innerHTML += ` 
                         <h3 class="done">${choosen.innerText}</h3>
        `;
    };
  });
};

