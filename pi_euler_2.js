// Fahri Aydos - aydos.com (2016-03-10)
// 1748 - Leonhard Euler (1707-1783)
var n = new Decimal(0)
var one = new Decimal(1)
function pi_step() {
	n = n.plus(one.div(i*i))
}
function pi_calc() {
	pi_step()
	pi = n.times(6).sqrt()
}
function pi_math() {
	return "\\frac{\\pi^2}{6}=\\frac{1}{1^2}+\\frac{1}{2^2}+\\frac{1}{3^2}+\\frac{1}{4^2}+\\frac{1}{5^2}+\\frac{1}{6^2}+\\cdots"
}