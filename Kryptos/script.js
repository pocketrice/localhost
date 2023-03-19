// PROJECT 3: CAREER PAGE | Lucas Xie | P4A Web Programming
// Description: The Javascript for this website. It is used for the interactive slideshow, "to top" button, and other small 'interactive' aspects.
// An abbreviated version of this is used on all the pages except for homepage, as those don't need any of the slideshow code.

var slideIndex = 1;
var pageIndex = 1; // Scrapped idea; supposed to take you to the previous page you were on from citations.html
var topToggle = true;
var autoSlides = true;
var naturalTop = true;




window.addEventListener("load", function() {	
	//var debugThing = document.getElementById("debugThing");
	showSlides(slideIndex);
	timer = setInterval(function() {plusSlides(1)}, 7000);

	seamless.polyfill(); // Fixes scroll-behavior: smooth for browsers that don't support it

	slideshowMain.addEventListener('mouseenter', pause);
slideshowMain.addEventListener('mouseleave', resume); // From https://betterprogramming.pub/make-a-slideshow-with-automatic-and-manual-controls-using-html-css-and-javascript-b7e9305168f9
})


function topCheck() { // Scroll detection via JS is broken by overflow-x: hidden. This is a workaround.
	var header = document.getElementsByClassName("top");
  var rect = header[0].getBoundingClientRect(); // https://stackoverflow.com/questions/7922988/jquery-detect-coordinate-of-top-of-page-after-scrolling
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  if (((rect.bottom < 0 || rect.top - viewHeight >= 0) && (naturalTop == true)) == true)
  { // NATURAL, NOT TOP
  	topToggle = false;
  	topButtonToggle(1);
  	console.log("NATURAL/NT");
  }

  else if ((!(rect.bottom < 0 || rect.top - viewHeight >= 0) && (naturalTop == true)) == true)
  { // NATURAL, TOP
  	topToggle = true;
  	topButtonToggle(2);
  	console.log("NATURAL/T");
  }

  // UNNATURAL/TOP and UNNATURAL/NOT TOP don't do anything.
}



pause = () => {
	clearInterval(timer);
	//debugThing.style.color = "gray";
}

resume = () => {
	clearInterval(timer);
	timer = setInterval(function() {plusSlides(1)}, 7000);
	//debugThing.style.color = "red";
}




function plusSlides(n) {
	clearInterval(timer);
	showSlides(slideIndex += n);

}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slidesImg");
	var slidesCaption = document.getElementsByClassName("slidesCaption");
	var slideshowMain = document.getElementById("slideshowMain");

	if (n > slides.length) {slideIndex = 1} // When n exceeds length, wrap back around
	if (n < 1) {slideIndex = slides.length}
			for (i = 0; i < slides.length; i++)
			{
				slides[i].style.opacity = "0";
				slidesCaption[i].style.opacity = "0";

			}

	var slideIndexPreload = slideIndex-2;

	if (slideIndexPreload == -1)
	{
		slideIndexPreload = 3;
	}

	if (slideIndexPreload == 3)
	{
		slideIndexPreload = 0;
	} // NOTE: imagePreload b/w last image and first image doesn't work (still shows the vanilla BG)
	
	console.log(slideIndexPreload);

	slides[slideIndexPreload].style.opacity = "1"
	slides[slideIndexPreload].style.zIndex = "-100";
	slides[slideIndex-1].style.opacity = "1";
	slidesCaption[slideIndex-1].style.opacity = "1";


}



function topButtonToggle(n)
{
	var topButton = document.getElementsByClassName("topbutton");
	var minimize = document.getElementsByClassName("topbuttonToggle");

	if (topToggle == true && n == 1)
		{ // Only call when not minimized (topToggle == true) and button -- not X -- is pressed (n == 1).
			window.scrollTo(0, 0);
		}

		if (topToggle == true && n == 0) // Only minimize has n = 0; minimize the button
		{
			minimize[0].style.opacity = "0";
			minimize[0].style.bottom = "-10px";
			topButton[0].style.bottom = "-140px";
			topToggle = false;
			naturalTop = false;
		}
		else if (topToggle == false && n == 1) // Only topButton has n = 1; maximize the button
		{
			minimize[0].style.opacity = "1";
			minimize[0].style.bottom = "105px";
			topButton[0].style.bottom = "-30px";
			topToggle = true;
			naturalTop = true;
		}
		else if (n == 2) // Special case where button is minimized but still natural (was not manually minimized)
		{
			minimize[0].style.opacity = "0";
			minimize[0].style.bottom = "-10px";
			topButton[0].style.bottom = "-140px";
			topToggle = false;
		}
	}
