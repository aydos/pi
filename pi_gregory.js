// Fahri Aydos - aydos.com (2016-03-11)
// 1671 - James Gregory (1638-1675)
var n = new Decimal(0)
var d = 1
var one = new Decimal(1)
function pi_step() {
	if (i & 1) {
		n = n.plus(one.div(d))
	} else {
		n = n.minus(one.div(d))
	}
	d += 2
}
function pi_calc() {
	pi_step()
	pi = n.times(4)
}
function pi_math() {
	return "\\frac{\\pi}{4}=\\frac{1}{1}-\\frac{1}{3}+\\frac{1}{5}-\\frac{1}{7}+\\frac{1}{9}-\\frac{1}{11}+\\cdots"
}