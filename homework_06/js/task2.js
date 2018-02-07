var euro = Number(prompt("enter amount of EURO"));
var usd = Number(prompt("enter amount of USD"));

var euroRate = 33.8565;
var usdRate = 27.4609;

if (!isNaN(euro) && !isNaN(usd) && euro > 0 && usd > 0) {
	var euroToUah = Number((euro * euroRate).toFixed(2)),
		usdToUah = Number((usd * usdRate).toFixed(2)),
		usdEuro = euroRate / usdRate;
	console.log(
		euro +
			" euros are equal " +
			euroToUah +
			" UAH, " +
			usd +
			" dollars are equal " +
			usdToUah +
			" UAH, one euro is equal " +
			usdEuro.toFixed(2) +
			" dollars."
	);
} else {
	console.log("Incorrect data");
}
