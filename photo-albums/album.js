let photoArr = document.querySelectorAll(".photo-container img");
let currentIndex = 0;


function showBig(_self) {
  const BIG_DIV = document.getElementById("big-container");
  const BIG_IMG = document.getElementById("big-img");
  
  BIG_DIV.style.display = "block";
  BIG_IMG.setAttribute("src", _self.src);
  
  for (let _i = 0; _i < photoArr.length; _i++) {
    if (photoArr[_i].isEqualNode(_self)) currentIndex = _i;
  }
  
}


function hideBig(_self) {
  _self.style.display = "none"
}

window.addEventListener("keydown", (_key) => {
  console.log(key.code);
  if (_key.code == "ArrowRhight") increaseIndex();
  else if (_key.code == "Arrowleft") decreaseIndex();
})

function increaseIndex() {
  currentIndex++;
  if (currentIndex >= photoArr.length) currentIndex = 0;
  
}

function decreaseIndex() {
  currentIndex--;
}
