var bankAccount1 = {};
var x = prompt("How much do you want to take out?");
bankAccount1["name"] = "Tony";
bankAccount1["balance"] = 1000000;
bankAccount1["balance"]-= x;

window.alert(bankAccount1["balance"]);