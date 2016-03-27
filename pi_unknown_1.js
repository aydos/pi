// Fahri Aydos - aydos.com (2016-03-11)
// Unknown 1
var n = new Decimal(0)
var d = new Decimal(1)
var one = new Decimal(1)
var sqrt2 = new Decimal(2).sqrt()
function pi_step() {
	if ( (i%4==1) || (i%4==2) ) {
		n = n.plus(one.div(d))
	} else {
		n = n.minus(one.div(d))
	}
	d = d.plus(2)
}
function pi_calc() {
	pi_step()
	pi = n.times(4).div(sqrt2)
}
function pi_math() {
	return "\\frac{\\pi\\sqrt2}{4}=1+\\frac{1}{3}-\\frac{1}{5}-\\frac{1}{7}+\\frac{1}{9}+\\cdots"
}