// Fahri Aydos - aydos.com (2016-03-12)
// Madhava of Sangamagrama (~1340-~1425)
// https://en.wikipedia.org/wiki/Madhava_of_Sangamagrama
var n = new Decimal(0)
var one = new Decimal(1)
var thr = new Decimal(3)
var twq = new Decimal(12).sqrt()
function pi_step() {
	if (i & 1) {
		n = n.plus(one.div(thr.pow(i-1).times((2*i)-1)))
	} else {
		n = n.minus(one.div(thr.pow(i-1).times((2*i)-1)))
	}
}
function pi_calc() {
	pi_step()
	pi = n.times(twq)
}
function pi_math() {
	return "\\frac{\\pi}{\\sqrt{12}}=1-\\frac{1}{3\\times3^1}+\\frac{1}{5\\times3^2}-\\frac{1}{7\\times3^3}+\\frac{1}{9\\times3^4}-\\frac{1}{11\\times3^5}+\\cdots"
}