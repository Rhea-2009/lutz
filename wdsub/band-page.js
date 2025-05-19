
let bigButton = document.getElementById("big-play-button");
bigButton.addEventListener("click", hitBigButton)
let canPlay = true;
													 
let trackArr = document.querySelectorAll(".track-player");	
let currentIndex = 0;

let buttonArr = document.querySelectorAll(".track-li button");
for (const element of buttonArr) {
	element.addEventListener("click", (e) => {hitSmallButton(e.srcElement);});
}
													 
function hitBigButton() {
	if (canPlay) {
		//play the track
		bigButton.innerHTML = '<svg viewBox="0 0 512 512" width="40px"title="pause-circle"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-16 328c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160zm112 0c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160z"/></svg>';
		canPlay = !canPlay;
		
		trackArr[currentIndex].play();
	} else {
		//pause the track
		bigButton.innerHTML = '<svg viewBox="0 0 512 512" width="40" title="play-circle"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z" /></svg>';
		canPlay = !canPlay;
		
		trackArr[currentIndex].pause();
	}
}

function hitSmallButton(_sender) {
	
	//pause curret song
	if (!canPlay) {
		trackArr[currentIndex].pause();
		
	}

	
	
	//nothing is curently playing
	if (canPlay) { 
		
	
  	//change small icon to pause
		_sender.innerHTML =  '<svg viewBox="0 0 512 512" width="15px"title="pause-circle"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-16 328c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160zm112 0c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160z"/></svg>';	
	//update current index to match the button that was clicked
	currentIndex = Number(_sender.getAttribute("id"));
	//call hitBIgButton
	hitBigButton();
		
	}
	
		//smt alreadt playing, and it its not this one 
	else if (currentIndex != Number(_sender.getAttribute("id"))) {
		//change currentIndex to our index
		
		
	}
	
	//smt is playing , and it is this one
	else {
		
	}

}
