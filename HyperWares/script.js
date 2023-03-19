	function getRndInteger(min, max) { // Extracted from W3Schools
		return Math.floor(Math.random() * (max - min + 1) ) + min;
	}

	

	function menuOnClick() {
		document.getElementById("menu-bar").classList.toggle("change");
		document.getElementById("nav").classList.toggle("change");
		document.getElementById("menu-bg").classList.toggle("change-bg");
	}

	function resetQuantity(num) {
		document.getElementsByClassName("quantityNeedsValidation")[num].value = '';
		calcPrices();
	}


	function calcPrices() {
		var subtotalObj = document.getElementById("subtotalValue");
		var taxObj = document.getElementById("taxValue");
		var totalObj = document.getElementById("totalValue");
		var unitPrice = ["0.99", "0.99", "1.99"]
		const TAX_RATE = 0.0575;

		var subtotal = 0;
		var tax = 0;
		var total = 0;


		for (let i = 0; i < 3; i++)
		{
			subtotal += +parseFloat(document.getElementsByClassName("quantityNeedsValidation")[i].value * unitPrice[i]);
		}

		subtotal = (Math.round(subtotal*100)/100).toFixed(2);
		tax = (parseFloat(subtotal * TAX_RATE)).toFixed(2);
		total = (parseFloat(+subtotal + +tax)).toFixed(2);

		subtotalObj.innerText = "$" + subtotal;
		taxObj.innerText = "$" + tax;
		totalObj.innerText = "$" + total;

	if ((document.getElementsByClassName("quantityNeedsValidation")[0].value.length == 0) || (document.getElementsByClassName("quantityNeedsValidation")[1].value.length == 0) || (document.getElementsByClassName("quantityNeedsValidation")[2].value.length == 0)) // Super inefficient!!
	{
		subtotalObj.innerText = "...";
		taxObj.innerText = "...";
		totalObj.innerText = "...";
	}
}

for (let i = 0; i < 3; i++)
{
	document.getElementsByClassName("quantityNeedsValidation")[i].addEventListener("input", function(){
		calcPrices();
	});
}


window.addEventListener('load', function() {

	var navElement = document.getElementsByClassName("navElement");
	var navCount = 0;
	var colorPicker = document.getElementById("color-picker");
	var colorPickerDisplay = document.getElementById("color-picker-display");
	var invalidMessage = ["Must be only alphabetic, dashes, or apostrophes", "Must be a valid email address", "This date is unavailable.", "This color is unavailable."]
	var validMessage = ["Valid!", "Valid!", "Date available!", "Color available!"]
	var advertName = document.getElementById("advert-name");
	var advertCaption = document.getElementById("advert-caption");
	var advertImg = document.getElementById("advert-img");
	var advertNameCollection = ["There <em>is</em> such thing as a free lunch.", "Cryptography doesn't have to be difficult.", "The history of the internet, now more readable.", "Text doesn't just have to be Arial 16px #000000."];
	var advertCaptionCollection = ["Get a free element license of your choice when you spend over $50.", "Visit Kryptos for a free comprehensive resource on cryptography.", "Visit the Internet Timeline to learn more about web history.", "Explore the Markdown page for the latest innovations in typography."]
	var advertImgCollection = ["dumplings.jpg", "kryptos.jpg", "internet-archive.jpg", "printing-press.jpg", ""]
	var randomAdvertValue = getRndInteger(0, 4); // Or use advertCaptionCollection.length or something
	console.log("randomAdvertValue: " + randomAdvertValue);

	if (randomAdvertValue != 4)
	{
		advertName.innerHTML = advertNameCollection[randomAdvertValue];
		advertCaption.innerHTML = "/* " + advertCaptionCollection[randomAdvertValue] + " */";
		advertImg.setAttribute("src", advertImgCollection[randomAdvertValue]);
	}
	colorPicker.addEventListener("input", function() {
		colorPickerDisplay.innerText = colorPicker.value;
	});


	var validationFields = document.getElementsByClassName("inputNeedsValidation");
	var validationLabel = document.getElementsByClassName("form-validator");

	for (let i = 0; i < validationFields.length; i++)
	{
		validationFields[i].addEventListener('input', function() {
			validationLabel[i].innerHTML = "<span class='material-symbols-outlined'>cached</span>&nbsp;Checking validity...";
			validationLabel[i].setAttribute("class", "form-validator");
			validationLabel[i].classList.add('form-loading');

			setTimeout(function() {
				validationLabel[i].setAttribute("class", "form-validator");

				if (validationFields[i].value.length == 0)
				{
					validationLabel[i].innerHTML = "<span class='material-symbols-outlined'>cached</span>&nbsp;Checking validity...";
					validationLabel[i].classList.add('form-loading');
				}

				validator: if (validationFields[i].checkValidity() == true)
				{
					console.assert(tinycolor(colorPicker.value).isValid(), "Invalid tinycolor!" + colorPicker.value);

					if (i == 3) // Color picker
					{
						if ((tinycolor(colorPicker.value).getBrightness() > 50) && (tinycolor(colorPicker.value).getBrightness() < 230))
						{
							validationLabel[i].classList.add('form-valid');
							validationLabel[i].innerHTML = "<span class='material-symbols-outlined'>done</span>&nbsp;" + validMessage[i];
						}
						else
						{
							validationLabel[i].classList.add('form-fail');
							validationLabel[i].innerHTML = "<span class='material-symbols-outlined'>error</span>&nbsp;" + invalidMessage[i];
						}
						break validator;
					}

					if (i == 2) // Date picker
					{
						var datePicked = new Date(validationFields[i].value);

						if ((datePicked < Date.now()) || (Math.abs(Date.now() - datePicked) > (30 * 24 * 60 * 60 * 1000)))
						{
							validationLabel[i].classList.add('form-fail');
							validationLabel[i].innerHTML = "<span class='material-symbols-outlined'>error</span>&nbsp;" + invalidMessage[i];
						}
						else
						{
							validationLabel[i].classList.add('form-valid');
							validationLabel[i].innerHTML = "<span class='material-symbols-outlined'>done</span>&nbsp;" + validMessage[i];
						}
						break validator;
					}


					validationLabel[i].classList.add('form-valid');
					validationLabel[i].innerHTML = "<span class='material-symbols-outlined'>done</span>&nbsp;" + validMessage[i];
				}
				else
				{
					validationLabel[i].classList.add('form-fail');
					validationLabel[i].innerHTML = "<span class='material-symbols-outlined'>error</span>&nbsp;" + invalidMessage[i];
				}
			}, 1500)

				if (validationFields[i].value.length == 0) // If input is empty
				{
					validationLabel[i].style.opacity = 0;
				}
				else
				{
					validationLabel[i].style.opacity = 1;
				}

			})
	}

	function indirectTooltip(baseId, tooltipId) { // Generalized tooltip function; use this later!
		document.getElementById(baseId).addEventListener("mouseover", function() {
			document.getElementById(tooltipId).style.opacity = 1;
		})

		document.getElementById(baseId).addEventListener("mouseout", function() {
			document.getElementById(tooltipId).style.opacity = 0;
		})
	}

	indirectTooltip("basketHelp", "basketInfo");

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

	inactivePage();


	Mousetrap.bind('tab', function() { // TODO: hide mouse; when mouse moved/clicked revert 'mouseless mode'.
		navCount++;

		if (navCount > 3)
		{
			navCount = 0;
		}

		navElement[navCount].style.color = "#E0E5EC";

		for (let i = 0; i < navElement.length; i++)
		{
			if (i != navCount)
			{
				navElement[i].style.color = "#96A9A7";
			}
		}
	});

	colorPickerDisplay.innerText = colorPicker.value;
	console.log("Script loaded. (" + performance.now() + "ms)");
})
