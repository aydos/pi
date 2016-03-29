// Fahri Aydos - aydos.com (2016-03-11)
// 1655 - John Wallis (1616-1703)
// https://en.wikipedia.org/wiki/Wallis_product
var n = new Decimal(1)
var u = 2
var d = 1
function pi_step() {
	n = n.times(u*u)
	n = n.div(d*(d+2))
	u += 2
	d += 2
}
function pi_calc() {
	pi_step()
	pi = n.times(2)
}
function pi_math() {
	return "\\frac{\\pi}{2}=\\frac{2\\times2}{1\\times3}\\times\\frac{4\\times4}{3\\times5}\\times\\frac{6\\times6}{5\\times7}\\times\\cdots"
}
