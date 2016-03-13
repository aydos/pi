// Fahri Aydos - aydos.com (2016-03-11)
// 16?? - Gottfried Wilhelm Leibniz (1646-1716)
var n = new Decimal(0)
var d = 1
var one = new Decimal(1)
function pi_step() {
	if (i & 1) {
		n = n.plus(one.div(d))
	} else {
		n = n.minus(one.div(d))
	}
	d += 2
}
function pi_calc() {
	pi_step()
	pi = n.times(4)
}