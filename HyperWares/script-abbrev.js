function menuOnClick() { // Credit to https://alvarotrigo.com/blog/hamburger-menu-css/
	document.getElementById("menu-bar").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	document.getElementById("menu-bg").classList.toggle("change-bg");
}

window.addEventListener('load', function() {
	var navElement = document.getElementsByClassName("navElement");
	var navCount = 0;

	var timeout = document.getElementById("exploreTimeout");
	var timeoutRemainder = document.getElementById("exploreTimeoutRemainder");
	var hoverHint = document.getElementById("hover-hint");
	var promoTitleObj = document.getElementById("promoTitle");
	var promoDescObj = document.getElementById("promoDesc");
	var timer;
	var timerDelayed;
	var promoItems = [];
	var promoItemsPair = [];

	var timerTooltip = document.getElementById("time");
	var date = new Date();
	var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone.replaceAll('_', ' ');
	var minutes;

	if (date.getMinutes() < 10)
	{
		minutes = "0" + date.getMinutes();
	}
	else
	{
		minutes = date.getMinutes();
	}



	setInterval(function() {
		timerTooltip.innerText = date.getHours() + ":" + minutes + ", " + timezone + " time";
	}, 1000)



	function inactivePage() {
		var inactiveLinks = document.getElementsByClassName("inactive");
		var inactiveWarning = document.getElementById("inactiveWarning");
		var inactiveTimer;


		console.log(inactiveLinks.length)
		for (let i = 0; i < inactiveLinks.length; i++)
		{
			inactiveLinks[i].addEventListener("click", function() {
				clearTimeout(inactiveTimer);
				inactiveWarning.style.opacity = 1;
				inactiveWarning.style.top = 140 + (i * 50) + "px";
				inactiveWarning.style.left = 140 - (i * 20) + "px";
				inactiveTimer = setTimeout(function() {
					inactiveWarning.style.opacity = 0;
				}, 2000)
			})
		}
	}


	function populateHomepageAdvert() {

		var promoColor = ["#63AB5C", "#6DA5A0", "#9CA2D7", "#b6d3a6", "#c09eb4", "#7486c1", "#9f959b", "#87bead", "#ee924a", "#9ac0b5", "#bdb983", "#97D2DF", "#c39625", "#9EE0BB", "#6eb663", "#cda9c9"]
		var promoColorAccent = ["#63AB5Cbf", "#6DA5A0bf", "#9CA2D7bf", "#b6d3a6bf", "#c09eb4bf", "#7486c1bf", "#9f959bbf", "#87beadbf", "#ee924abf", "#9ac0b5bf", "#bdb983bf", "#97D2DFbf", "#c39625bf", "#9EE0BBbf", "#6eb663bf", "#cda9c9bf"]; // Hooray for ultra inefficient code!!
		var promoTitle = ["the best type of doctor", "language of hypertexts", "getting ahead of the competition", "master the web meta", "a title you'll never forget", "limitless potential and power", "obscure and secure", "the solution to all your problems", "contentful paints await", "worth more than a thousand words", "brush away your svg worries", "frame it or embed it", "a touch of nostalgia", "your search engine will thank you", "a formal experience", "find your footing"];
		var promoDesc = ["This is one of the most important elements in web design. As a token of gratitude to all web developers, this element is offered for free, forever.", "This essential element is the first step to creating the website of your dreams. Make your website without worrying about your html tag expiring -- our licenses are 100% permanent.", "Your website is nothing without control over what happens backstage. Customize your website using metatags and powerful Javascript scripts and libraries to make the most out of your content.", "The web meta is difficult and finicky to succeed in. In the ever-competitive web scene, know what and how to use meta tags to your advantage.", "Make your website recognizable universally and unforgettable with a memorable, impactful title. Stand above the crowd confidently without fear of fading into irrelevancy.", "Harness the power of Javascript to your advantage and innovate with interactivity. Your visitors will certainly be impressed.", "There are elements that aren't as widespread as others, but that doesn't make them any less useful.<br><br>Root your links in a base link for better quality of life or to ensure unfinished links still lead to a safe destination.", "The exclusive &lt;hw&gt; tag is designed by The Hypertext Warehouse to quickly and easily load your element licenses so you can worry less about managing your licenses and more about making your website awesome.", "Your content is all housed in this tag, working in conjunction with your &lt;head&gt; and &lt;hw&gt; tags to effectively create your content.<br><br>With the efficient Hyperwares Library, your First Contentful Paint will be optimized for top SEO performance.", "Images are one of the most effective ways of conveying a message, so why should your website not use them?<br><br>The Hyperwares Library will automatically optimize and compress your images -- in any format! -- to .webp for quick and efficient loading.", "Troubled with SVG problems riddling your website? Use the newly-introduced canvas feature of HTML5 to efficiently render vectorized illustrations or images.<br><br>Still need SVGs? You'll receive the SVG bundle of elements for free too!", "Looking for an alternative to iframe? Use the embed element to quickly insert any file of your choosing -- including any page or widget!<br><br>The iframe bundle is included free of charge for your convenience as well.", "Still nostalgic for deprecated HTML3 or HTML4 elements?<br><br>Experiment and try them out using our new deprecated elements bundle found on the Markdown page without worrying about outdated, inadequate parts from outdated online archives.", "Websites are not just for human consumption -- search engines need to be able to process them, too, to provide a better experience for all types of users.<br><br>Make your website both more accessible and increase SEO with our Search Engine Formatting bundle -- combining everything you need, including ARIA support.", "Empower your website with the power of forms and widgets to diversify your website's content.<br><br>Conduct surveys, apply regex bounds, or easily set up a date picker at the press of a finger and never worry about building your own widgets again.", "Leave a powerful impact or offer additional resources and information unobtrusively with the footer element, offering full compatibility with all other elements and website-wide applicability.<br><br>Plus, harness the power of HTML entities and express your message without limits for free by purchasing any bundle."];




		for (let i = 0; i < 16; i++)
		{
			promoItems.push(document.getElementById("promo"+(i+1)));

			promoItems[i].addEventListener("mouseover", function() {
				timeout.style.transition = "width 10s linear, opacity 2s";
				timeout.style.opacity = 1;
				timeoutRemainder.style.opacity = 1;
				hoverHint.style.opacity = 0;
				promoItems[i].style.color = promoColor[i];

				for (let j = 0; j < 16; j++)
				{
					if (j != i)
					{
						promoItems[j].style.color = "#121f21";
						promoTitleObj.style.opacity = 0;
						promoDescObj.style.opacity = 0;

						if ((j == 1) || (j == 2) || (j == 8))
						{
							promoItemsPair.push(document.getElementById("promo"+(i+1)+"Z"));
							document.getElementById("promo"+(j+1)+"Z").style.color = "#121f21";
						}
					}
				}

				setTimeout(function() {
					promoTitleObj.innerHTML = promoTitle[i];
					promoTitleObj.style.color = promoColor[i];
					promoTitleObj.style.filter = "brightness(120%)";
					promoDescObj.innerHTML = promoDesc[i];
					promoDescObj.style.color = promoColorAccent[i];
					promoDescObj.style.filter = "brightness(110%)";


					promoTitleObj.style.opacity = 1;
					promoDescObj.style.opacity = 1;
				}, 200)

				if ((i == 1) || (i == 2) || (i == 8))
				{
					document.getElementById("promo"+(i+1)+"Z").style.color = promoColor[i];
				}

				isPromoHovered = true;
			});


			promoItems[i].addEventListener("mouseout", function() {
				/*
				promoItems[i].style.color = "#121f21";
				promoTitleObj.style.opacity = 0;
				promoDescObj.style.opacity = 0;

				if ((i == 1) || (i == 2) || (i == 8))
				{
					document.getElementById("promo"+(i+1)+"Z").style.color = "#121f21";
				}*/
				isPromoHovered = false;
				exploreTimeout();
			});
		}
	}

	function exploreTimeout() {
		timeout.style.width = 0;
		clearTimeout(timer);
		clearTimeout(timerDelayed);

		timer = setTimeout(function() {
			timeout.style.opacity = 0;
			timeoutRemainder.style.opacity = 0;
			hoverHint.style.opacity = 1;


			for (let i = 0; i < 16; i++)
			{
				promoItems[i].style.color = "#121f21";

				if ((i == 1) || (i == 2) || (i == 8))
				{
					document.getElementById("promo"+(i+1)+"Z").style.color = "#121f21";
				}
			}

			document.getElementById("promo8").style.color = "#a3dbc8";

			promoTitleObj.innerHTML = "reimagine your website.";
			promoTitleObj.style.color = "#DFF9FF";
			promoTitleObj.style.filter = "brightness(100%)";
			promoDescObj.innerHTML = "Think outside the box and refurbish your website with effective site parts that fit around your nuances and purposes, not the other way around.<a href='checkout.html' class='checkoutButton'>Browse our catalogue</a>";
			promoDescObj.style.color = "#A9B8C0";
			promoDescObj.style.filter = "brightness(100%)";

			timeout.style.transition = "opacity 2s";
		}, 10300)

		timerDelayed = setTimeout(function(){
			timeout.style.width = "360px";
		}, 11000)



	}

	populateHomepageAdvert();
	inactivePage();





	var cnv = document.getElementById("logo");
	var ctx = cnv.getContext('2d');
	/*
	var base = ctx.createRadialGradient(182.5, 90.5, 10, 300, 200, 360);

	base.addColorStop(0, "#FFFFFF"); // Color fix?
	base.addColorStop(0.3, "#C2D6D7");
	base.addColorStop(1, "#3E4D4F");*/
	var base = "#FFFFFF";

	var border = ctx.createRadialGradient(182.5, 90.5, 10, 300, 200, 360);

	border.addColorStop(0, "#51677D");
	border.addColorStop(1, "#8CB1E0")

	ctx.beginPath();
	ctx.fillStyle = border;
	ctx.arc(162.5, 137.5, 112.5, 0, Math.PI*2, true)
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.fillStyle = base;
	ctx.arc(162.5, 137.5, 102.5, 0, Math.PI*2, true);
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.fillStyle = "#14C7DE";
	ctx.arc(162.5, 137.5, 102.5, 0, Math.PI*2, true);
	ctx.fill();
	ctx.closePath();
	
	ctx.beginPath();
	ctx.fillStyle = "#25AFDC";
	ctx.arc(162.5, 137.5, 102.5, Math.PI*0.8, Math.PI*2, true);
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.fillStyle = "#2DA3DC";
	ctx.arc(162.5, 137.5, 102.5, Math.PI*0.5, Math.PI*3.5, true);
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.fillStyle = "#3498DB";
	ctx.arc(162.5, 137.5, 102.5, Math.PI*0.2, Math.PI*3.6, true);
	ctx.fill();
	ctx.closePath();


	ctx.beginPath(); 
	ctx.fillStyle = "#3F4C48";
	ctx.ellipse(175.5, 128.5, 80, 80, 0, Math.PI*2, 0, true);
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.fillStyle = "#2571b6";
	ctx.ellipse(175.5, 125, 80, 90, Math.PI*0.9, Math.PI*1.2, 0, true);
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.fillStyle = "#1c63ae";
	ctx.ellipse(175.5, 125, 80, 90, Math.PI*0.78, Math.PI*0.81, 0, true);
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.fillStyle = "#1c5c9d";
	ctx.ellipse(175.5, 125, 80, 90, Math.PI*0.63, Math.PI*0.65, 0, true);
	ctx.fill();
	ctx.closePath();

		ctx.beginPath();
	ctx.fillStyle = "#3F4C48";
	ctx.ellipse(175.5, 140, 74, 60, Math.PI, Math.PI*2, 0, true);
	ctx.fill();
	ctx.closePath();

	console.log("Script loaded. (" + performance.now() + "ms)");
})
