const UNCHECK_ICON = '/<svg onclick="crossOut(this)" viewBox="0 0 448 512" width="2em" title="square-check"><path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z" />/</svg>'
const CHECK_ICON = '<svg viewBox="0 0 448 512" width="2em" title="square-check"><path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
</svg>'

function addNewItem() {
  let newItem;
  let myList;
  let newItemText;
  let input;
  
  
  //Getting the text from the input feild for the new li
  input = document.getElementById("new-item");
  newItemText = input.value;
  
  if (newItemText != "") {  
    newItem = document.createElement("li");
    newItem.innerHTML = UNCHECK_ICON + "  " + newItemText;
    input.value = "";

    myList = document.getElementById("to-do-list");

    myList.appendChild(newItem);
  }
}

function clearList() {
  let theList = document.getElementById("to-do-list");
  theList.innerHTML = "";
}

function crossOut (_icon) {
  let thisItem = _icon.parentElement;
  thisItem.style.textDecoration = "solid 2px line-through";
}

window.addEventListener("keydown", (_key) => {
  if (_key.code == "Enter") addNewItem();
});















<div id="input-grp">
  <label for="new-item">New Item:</label>
  <input id="new-item">
  <button onclick="addNewItem()">Add Item</button>
  <button onclick="clearList()">Clear List</button>
</div>

<div id="list-grp">
  <ul id="to-do-list">
 
  </ul>
</div>






<svg viewBox="0 0 448 512" width="2em" title="square-check">
  <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
</svg>

<svg viewBox="0 0 448 512" width="2em" title="square-check">
  <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z" />
</svg>
