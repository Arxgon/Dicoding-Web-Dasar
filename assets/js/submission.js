var index = 1;
slides(index);

function plus(n) {
	slides((index += n));
	gotoId(index);
}

function gotoId(n) {
	var slideId = "#slide" + n;
	window.location.assign(slideId);
}

function cur(n) {
	slides((index = n));
}

function slides(n) {
	var slides = document.getElementsByClassName("slide");
	var side = document.getElementsByClassName("dope");

	if (n > slides.length) {
		index = 1;
	}
	if (n < 1) {
		index = slides.length;
	}
	for (let i = 0; i < slides.length; i++) {
		side[i].className = side[i].className.replace(" active", "");
	}
	side[index - 1].className += " active";
}
