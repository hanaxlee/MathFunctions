var stem2 = {
  classroom: "f103",
  students: 12
};
	var x = prompt("Classroom or students");
  var lowercase = x.toLowerCase();
//forces everything to lowercase
  if ((lowercase === "classroom") || (lowercase === "students")) {
  window.alert(stem2[lowercase]);
//forces everything to lowercase in variable stem2
}
else {
	window.alert("You tried " + 1 + " times");
  for (i=2; i<4; i++) {
  	var x = prompt("Classroom or students");
    var lowercase = x.toLowerCase();
//forces everything to lowercase
    if ((lowercase === "classroom") || (lowercase === "students")) {
  window.alert(stem2[lowercase]);
//forces everything to lowercase in variable stem2
  i = 4;
//stops asking user after 3 tries
    }
  else {
    window.alert("You tried " + i + " times");
    }
  }
}
