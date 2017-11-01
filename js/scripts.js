function getTriangleArea(a, h){
	var triangleArea;
	if ((a < 0) || (h < 0)) {
		return triangleArea = ('Nieprawidłowe wartości!');
	}
	else {
		triangleArea = a * h / 2;
		return triangleArea;
	}
}
console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(15,8);
var triangle2Area = getTriangleArea(8,12);
var triangle3Area = getTriangleArea(-2, 5);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);