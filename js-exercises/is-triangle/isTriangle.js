function isTriangle(a,b,c) {
  var sideAsq = a * a;
  var sideBsq = b * b;
  var sideCsq = c * c;

  var ab = a+b;
  var ac = a+c;
  var bc = b+c;

  var a2b2 = sideAsq + sideBsq;
  var a2c2 = sideAsq + sideCsq;
  var b2c2 = sideBsq + sideCsq;

  if ((ab > c) && (ac > b) && (bc > a)) {
		return true;
	}
	if ((sideAsq == b2c2) || (sideBsq == a2c2) || (sideCsq == a2b2)) {
		return true;
	}
	else {
		return false;
	}
}

export {
  isTriangle,
};
