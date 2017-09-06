var stem2 = {
  classroom: "f103",
  students: 12
};
  var x = prompt("Classroom or students");
  var lowercase = x.toLowerCase();
//forces everything to lowercase
  if ((lowercase === "classroom") || (lowercase === "studens")) {
  window.alert(stem2[lowercase]);
//forces everything to lowercase in variable stem2
}
else {
  tryAgain();
//try again until they follow directions
}

function tryAgain() {
  var x = prompt("Classroom or students");
  var lowercase = x.toLowerCase();
  if ((lowercase === "classroom") || (lowercase === "studens")) {
  window.alert(stem2[lowercase]);
  }
else {
  tryAgain();
//try again until they follow directions
  }
}