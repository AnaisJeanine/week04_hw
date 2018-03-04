function weather(){
	
	var a = document.querySelector("#celsius").value;
	var b =  a * 1.8 + 32;

	if (b > 60) {
		document.querySelector("body").style.backgroundImage = "url(./images/warm.jpg)";
	} else if (30 < b && b < 60) {
		document.querySelector("body").style.backgroundImage = "url(./images/autumn.jpeg)";
	} else {
		document.querySelector("body").style.backgroundImage = "url(./images/winter.jpeg)";
	}

	console.log(b);
}


document.querySelector("#submit").addEventListener("click", weather);










