// Fahri Aydos - aydos.com (2016-03-28)
// Unknown
var n = new Decimal(1)
var m = new Decimal(2)
var one = new Decimal(1)
var two = new Decimal(2)
function pi_step() {
	n = n.times(one.minus(one.div(m.times(m))))
	m = m.plus(2)
}
function pi_calc() {
	pi_step()
	pi = two.div(n)
}
function pi_math() {
	return "\\frac{2}{\\pi}=(1-\\frac{1}{2^2})\\times(1-\\frac{1}{4^2})\\times(1-\\frac{1}{6^2})\\times\\cdots"
}