// Fahri Aydos - aydos.com (2016-03-28)
// Beeler et al. (1972)
// http://mathworld.wolfram.com/PiFormulas.html
var n = new Decimal(0)
var u = new Decimal(1)
var d = new Decimal(3)
var m = new Decimal(1)
function pi_step() {
	m = m.times(u.div(d))
	n = n.plus(m)
	u = u.plus(1)
	d = d.plus(2)
}
function pi_calc() {
	pi_step()
	pi = n.plus(1).times(2)
}
function pi_math() {
	return "\\frac{\\pi}{2}=1+\\frac{1}{3}+\\frac{1\\times2}{3\\times5}+\\frac{1\\times2\\times3}{3\\times5\\times7}+\\frac{1\\times2\\times3\\times4}{3\\times5\\times7\\times9}+\\cdots"
}