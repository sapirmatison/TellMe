
function isMobileDevice() {
	return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

function checkIfDesktop() {
	if (isMobileDevice() == false) {
		//***** עיצוב לתצוגת מחשב *****
		//alert("computer");

		// שינוי עיצוב לפסקת הפתיחה
		$("p#myInfo").css("padding-right", "40px");
		$("p#myInfo").css("padding-left", "40px");
		$("p#myInfo").css("font-size", "16px");

		// שינוי עיצוב לתמונת ההורים
		$(".items").css("background-size", "25%");
		$(".items").css("background-position", "50% 36vh");

		// שינוי עיצוב לכפתורים
		$("#orangeBTN").css("width", "7vw");
		$("#orangeBTN").css("height", "39vh");
		$("#orangeBTN").css("top", "23%");
		$("#orangeBTN").css("left", "61%");
		$("#orangeClick").css("width", "6vw");
		$("#orangeClick").css("height", "12vh");
		$("#orangeClick").css("top", "41%");
		$("#orangeClick").css("left", "62%");

		$("#blueBTN").css("width", "11vw");
		$("#blueBTN").css("height", "36vh");
		$("#blueBTN").css("top", "10%");
		$("#blueBTN").css("left", "24%");
		$("#blueClick").css("width", "8vw");
		$("#blueClick").css("height", "13vh");
		$("#blueClick").css("top", "29%");
		$("#blueClick").css("left", "26%");

		$("#greenBTN").css("width", "10vw");
		$("#greenBTN").css("height", "36vh");
		$("#greenBTN").css("top", "40%");
		$("#greenBTN").css("left", "24%");
		$("#greenClick").css("width", "7vw");
		$("#greenClick").css("height", "16vh");
		$("#greenClick").css("top", "50%");
		$("#greenClick").css("left", "26%");

		$("#pinkBTN").css("width", "10vw");
		$("#pinkBTN").css("height", "36vh");
		$("#pinkBTN").css("top", "4%");
		$("#pinkBTN").css("left", "52%");
		$("#pinkClick").css("width", "8vw");
		$("#pinkClick").css("height", "12vh");
		$("#pinkClick").css("top", "10%");
		$("#pinkClick").css("left", "53%");

		$("#purpelBTN").css("width", "11vw");
		$("#purpelBTN").css("height", "36vh");
		$("#purpelBTN").css("top", "0%");
		$("#purpelBTN").css("left", "35%");
		$("#purpelClick").css("width", "7vw");
		$("#purpelClick").css("height", "13vh");
		$("#purpelClick").css("top", "13%");
		$("#purpelClick").css("left", "40%");
	}
}

$(document).ready(function () {
	$("#TLM").click(function () {
		window.location.href = "http://www.hit.ac.il/telem/overview"
	});

	$(".close").click(function () {
		var myPopname = $(this).attr('id');
		if (myPopname == "closePurple") {
			document.getElementById("popupBasicPurpel").hidden = true;
		} else if (myPopname == "closeGreen") {
			document.getElementById("popupBasicGreen").hidden = true;
		} else if (myPopname == "closeBlue") {
			document.getElementById("popupBasicBlue").hidden = true;
		} else if (myPopname == "closePink") {
			document.getElementById("popupBasicPink").hidden = true;
		} else if (myPopname == "closeOrange") {
			document.getElementById("popupBasicOrange").hidden = true;
		} else if (myPopname == "closeOdot") {
			document.getElementById("popupBasicOdot").hidden = true;
		}
	});

	// הצגת הפופאפים 
	$("#purpelClick").click(function () {
		document.getElementById("popupBasicPurpel").hidden = false;
	});
	$("#greenClick").click(function () {
		document.getElementById("popupBasicGreen").hidden = false;
	});
	$("#blueClick").click(function () {
		document.getElementById("popupBasicBlue").hidden = false;
	});
	$("#pinkClick").click(function () {
		document.getElementById("popupBasicPink").hidden = false;
	});
	$("#orangeClick").click(function () {
		document.getElementById("popupBasicOrange").hidden = false;
	});
	$("#odotClick").click(function () {
		document.getElementById("popupBasicOdot").hidden = false;
	});

});


