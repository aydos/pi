// Fahri Aydos - aydos.com (2016-03-11)
// William Brouncker (1620-1684)
// https://en.wikipedia.org/wiki/William_Brouncker,_2nd_Viscount_Brouncker
var n = new Decimal(0)
var one = new Decimal(1)
function pi_step() {
	var m = new Decimal((2*i)-1)
	n = n.plus(one.div(m.times(m)))
}
function pi_calc() {
	pi_step()
	pi = n.times(8).sqrt()
}
function pi_math() {
	return "\\frac{\\pi^2}{8}=\\frac{1}{1^2}+\\frac{1}{3^2}+\\frac{1}{5^2}+\\frac{1}{7^2}+\\frac{1}{9^2}+\\cdots"
}