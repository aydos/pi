// Fahri Aydos - aydos.com (2016-03-11)
// ~1665 - Isaac Newton (1642-1726)
var n = new Decimal(0)
var t = new Decimal(0)
var z = new Decimal(1)
var u = new Decimal(1)
var d = new Decimal(2)
var one = new Decimal(1)
var two = new Decimal(2)
var m = 0
function pi_step() {
	m = (2*i)-1
	t = one.div(two.pow(m).times(m))
	n = n.plus(t.times(z))
	z = z.times(u.div(d))
	u = u.plus(2)
	d = d.plus(2)
}
function pi_calc() {
	pi_step()
	pi = n.times(6)
}
function pi_math() {
	return "\\frac{\\pi}{6}=\\frac{1}{2}+\\Bigl(\\frac{1}{2}\\times\\frac{1}{3\\times2^3}\\Bigr)+\\Bigl(\\frac{1\\times3}{2\\times4}\\times\\frac{1}{5\\times2^5}\\Bigr)+\\Bigl(\\frac{1\\times3\\times5}{2\\times4\\times6}\\times\\frac{1}{7\\times2^7}\\Bigr)+\\cdots"
}