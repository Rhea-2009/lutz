function addNewItem() {
  let newItem;
  let myList;
  let newItemText;
  let input;
  
  newItem = document.createElement("li");
  
  //Getting the text from the input feild for the new li
  input = document.getElementById("new-item");
  newItemText = input.value;
  newItem.innerText = newItemText;
  input.value = "";
  

  myList = document.getElementById("to-do-list");

  myList.appendChild(newItem);
}

















<div id="input-grp">
  <label for="new-item">New Item:</label>
  <input id="new-item">
  <button onclick="addNewItem()">Add Item</button>
</div>

<div id="list-grp">
  <ul id="to-do-list">
 
  </ul>
</div>
