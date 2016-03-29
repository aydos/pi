// Fahri Aydos - aydos.com (2016-03-13)
// 2010 - Taner Yöner (19**-)
var n = new Decimal(0)
var one = new Decimal(1)
var two = new Decimal(2)
function pi_step() {
	var k = (2*i)-1
	n = n.plus(one.div(two.times(k).pow(2).minus(1)))
}
function pi_calc() {
	pi_step()
	pi = n.times(8)
}
function pi_math() {
	return "\\frac{\\pi}{8}=\\frac{1}{(2\\times1)^2-1}+\\frac{1}{(2\\times3)^2-1}+\\frac{1}{(2\\times5)^2-1}+\\cdots"
}