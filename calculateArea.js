function calculateArea(width,height) {
//create a function that takes two parameters
var area = width * height;
//multiplyy width and height parameters
return area;
//value is returned
}
var x = prompt ("Give a width");
//ask user for a width value and save as x
var y = prompt ("Give a height");
//ask user for a height value and save as y
var wallOne = calculateArea(x, y);
//pass x and y to the calculateArea function
window.alert(wallOne);
//popup area to screen