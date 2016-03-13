// Fahri Aydos - aydos.com (2016-03-13)
// 2010 - Taner Yöner (19**-)
var n = new Decimal(0)
var s = new Decimal(0)
var one = new Decimal(1)
var tt = new Decimal(32)
function pi_step() {
	n = n.plus(one.div(tt.times(s).plus(3)))
	s = s.plus(i)
}
function pi_calc() {
	pi_step()
	pi = n.times(8)
}