// Fahri Aydos - aydos.com (2016-03-27)
// Leonhard Euler (1707-1783)
var n = new Decimal(1)
function pi_step() {
	var p = pr[i-1] // begin with 2
	var u = new Decimal(p*p)
	var m = new Decimal(u.div(u.minus(1)))
	n = n.times(m)
}
function pi_calc() {
	pi_step()
	pi = n.times(6).sqrt()
}
function pi_math() {
	return "\\frac{\\pi^2}{6}=\\frac{2^2}{2^2-1}\\times\\frac{3^2}{3^2-1}\\times\\frac{5^2}{5^2-1}\\times\\frac{7^2}{7^2-1}\\times\\cdots"
}