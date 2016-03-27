// Fahri Aydos - aydos.com (2016-03-10)
// Leonhard Euler (1707-1783)
var n = new Decimal(0)
var d = new Decimal(1)
var one = new Decimal(1)
var onethird = one.div(3)
function pi_step() {
	if (i & 1) {
		n = n.plus(one.div(d.pow(3)))
	} else {
		n = n.minus(one.div(d.pow(3)))
	}
	d = d.plus(2)
}
function pi_calc() {
	pi_step()
	pi = n.times(32).pow(onethird)
}
function pi_math() {
	return "\\frac{\\pi^3}{32}=\\frac{1}{1^3}-\\frac{1}{3^3}+\\frac{1}{5^3}-\\frac{1}{7^3}+\\frac{1}{9^3}-\\frac{1}{11^3}+\\cdots"
}