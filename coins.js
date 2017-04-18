
function coinCounter (input) {
	var coinPurse = {};
	coinPurse.quarters = 0;
	coinPurse.dimes = 0;
	coinPurse.nickels = 0;
	coinPurse.pennies = 0;

	coinPurse.quarters = Math.floor(input / .25);
	var quarter = input - (coinPurse.quarters * .25);

	coinPurse.dimes = Math.floor(quarter / .1);
	var dime = quarter - (coinPurse.dimes * .1);

	coinPurse.nickels = Math.floor(dime / .05);
	var nickel = dime - (coinPurse.nickels * .05);

	if (nickel < .04 && nickel > .039) {
		nickel = nickel + .01;
	} else if (nickel < .02 && nickel > .019) {
		nickel = nickel + .01;
	}

	coinPurse.pennies = Math.floor(nickel / .01);

	return coinPurse;
}


var coins = coinCounter(.67);
console.log(coins);