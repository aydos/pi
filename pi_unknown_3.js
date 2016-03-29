// Fahri Aydos - aydos.com (2016-03-13)
// Unknown
var n = new Decimal(0)
var one = new Decimal(1)
function pi_step() {
	var m = new Decimal(2*i)
	n = n.plus(one.div(m.times(m)))
}
function pi_calc() {
	pi_step()
	pi = n.times(24).sqrt()
}
function pi_math() {
	return "\\frac{\\pi^2}{24}=\\frac{1}{2^2}+\\frac{1}{4^2}+\\frac{1}{6^2}+\\frac{1}{8^2}+\\frac{1}{10^2}+\\cdots"
}