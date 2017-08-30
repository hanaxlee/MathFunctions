var objectOne = {
	name: "hana",
  age: 16,
  grade: 11,
  friends: ["friendOne", "friendTwo", "friendThree"]
};
var objectTwo = {
	name: "Reimon",
  age: 16,
  grade: 11,
  friends: ["Alex", "mrKam", "bike"]
};
var objectThree = {
	name: "Will",
  age: 16,
  grade: 11,
  friends: ["imaginaryFriend1", "imaginaryFriend2", "imaginaryFriend3"]
};
var x = [objectOne, objectTwo, objectThree];
window.alert(x[1].friends[0]);