// Fahri Aydos - aydos.com (2016-03-29)
// William Brouncker (1620-1684)
// https://en.wikipedia.org/wiki/William_Brouncker,_2nd_Viscount_Brouncker
var n = new Decimal(2)
var one = new Decimal(1)
var four = new Decimal(4)
function pi_step() {
	n = new Decimal(2)
	for (var j=i; j>1; j--) {
		var k = new Decimal(j*2-1)
		k = k.times(k)
		n = k.div(n).plus(2)
	}
	n = one.div(n).plus(1)
}
function pi_calc() {
	pi_step()
	pi = four.div(n)
}
function pi_math() {
	return "\\frac{4}{\\pi}=1+\\frac{1^2}{2+\\frac{3^2}{2+\\frac{5^2}{2+\\frac{7^2}{2+\\cdots}}}}"
}