var stem2 = {
  classroom: "f103",
  students: 12
};
var x = prompt("Classroom or students");
var lowercase = x.toLowerCase();
if ((lowercase === "classroom") || (lowercase === "studens")) {
  window.alert(stem2[lowercase]);
}