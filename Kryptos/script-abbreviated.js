var topToggle = true;
var naturalTop = true;
var fontItem = document.getElementsByClassName("font");
var tooltipItem = document.getElementsByClassName("infoTooltipAbsolute"); // RENAME
var fontPosTop = [210, 240, 275, 360, 390, 410, 430, 460, 500, 530];
var fontPosLeft = [150, 185, 170, 400, 500, 390, 530, 200, 230, 210];
var fontPosRot = [-5, 5]; // Note: three different rotations are used in total (and one is 0).
var fontType = ['Albertus MT', 'Alegreya SC', 'B612 Mono', 'Inconsolata', 'Marcellus SC', 'Monaco', 'Nova Mono', 'Nugelo Serif', 'Top Secret Stamp', 'Victor Mono']



window.addEventListener("load", function() {
	//seamless.polyfill(); // Fixes scroll-behavior: smooth for browsers that don't support it
  forcePosition();
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
  /*else if (((rect.bottom < 0 || rect.top - viewHeight >= 0) && (naturalTop == false)) == true)
  { // UNNATURAL, NOT TOP -- does nothing

  }*/
  else if ((!(rect.bottom < 0 || rect.top - viewHeight >= 0) && (naturalTop == true)) == true)
  { // NATURAL, TOP
  	topToggle = true;
	topButtonToggle(2);
  	console.log("NATURAL/T");
  }
}




	function topButtonToggle(n)
	{
		var topButton = document.getElementsByClassName("topbutton");
		var minimize = document.getElementsByClassName("topbuttonToggle");

		if (topToggle == true && n == 1)
		{ // Only call when not minimized (topToggle == true) and button -- not X -- is pressed (n == 1).
			window.scrollTo(0, 0);
		}

		if (topToggle == true && n == 0) // Only minimize has n = 0
		{
			minimize[0].style.opacity = "0";
			minimize[0].style.bottom = "-10px";
			topButton[0].style.bottom = "-140px";
			topToggle = false;
			naturalTop = false;
		}
		else if (topToggle == false && n == 1) // Only topButton has n = 1
		{
			minimize[0].style.opacity = "1";
			minimize[0].style.bottom = "105px";
			topButton[0].style.bottom = "-30px";
			topToggle = true;
			naturalTop = true;
		}
		else if (n == 2)
		{
			minimize[0].style.opacity = "0";
			minimize[0].style.bottom = "-10px";
			topButton[0].style.bottom = "-140px";
			topToggle = false;
		}
	}


function forcePosition()
{
	for (let i = 0; i < 10; i++)
	{
			fontItem[i].style.top = fontPosTop[i] + "px";
		fontItem[i].style.left = fontPosLeft[i] + "px";
		fontItem[i].style.fontFamily = fontType[i];

		if (i <= 2) // font1 - font3
		{
			fontItem[i].style.transform = "rotateZ(" + fontPosRot[0] + "deg)";
		}

		// font4 - font6 (which would be 3 <= x <= 5) has no rotation at all

		else if ((i <= 9) && (i >= 7)) // font8 - font10
		{
			fontItem[i].style.transform = "rotateZ(" + fontPosRot[1] + "deg)";
		}

		fontItem[i].addEventListener('mouseover', function() {
			tooltipItem[i].style.opacity = 1;
			tooltipItem[i].style.transition = "opacity 0.75s, transform 0.15s";
		})

		fontItem[i].addEventListener('mouseout', function() {
			tooltipItem[i].style.opacity = 0;
			tooltipItem[i].style.transition = "opacity 0.75s, transform 0.75s";
		})

				document.addEventListener('mousemove', function(e) {
			tooltipItem[i].style.transform = 'translateY('+(e.clientY-210)+'px)';
			tooltipItem[i].style.transform += 'translateX('+(e.clientX-100)+'px)';
		})

			document.addEventListener('scroll', function() {``
				if (tooltipItem[i].style.opacity == 1)
				{
					tooltipItem[i].style.transition = "opacity 0s, transform 0.75s";
					tooltipItem[i].style.opacity == 0;
				}
			})

	}
}