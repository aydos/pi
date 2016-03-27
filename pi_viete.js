// Fahri Aydos - aydos.com (2016-03-10)
// 1593 - François Viète (1540-1603)
// https://en.wikipedia.org/wiki/Vi%C3%A8te's_formula
var n = new Decimal(1)
var t = new Decimal(0)
var two = new Decimal(2)
function pi_step() {
	t = t.plus(2).sqrt()
	n = n.times(t.div(2))
}
function pi_calc() {
	pi_step()
	pi = two.div(n)
}
function pi_math() {
	return "\\frac{2}{\\pi}=\\frac{\\sqrt{2}}{2}\\times\\frac{\\sqrt{2+\\sqrt{2}}}{2}\\times\\frac{\\sqrt{2+\\sqrt{2+\\sqrt{2}}}}{2}\\cdots"
}
