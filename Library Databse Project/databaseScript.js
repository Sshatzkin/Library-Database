var db = firebase.database();

db.ref("/").on("value",function(s) {
	var dataFromDB = s.val();
	
	console.log(dataFromDB.vegetables);
	var fruits = dataFromDB.vegetables;
	var listElement = document.getElementById("list-of-fruits");
	
	while(listElement.hasChildNodes()){
		listElement.removeChild(listElement.lastChild);
	}
	
	for(var i = 0; i < fruits.length; i++){
		var newLi = document.createElement("li");
		newLi.innerHTML = fruits[i];
		listElement.appendChild(newLi);
	}
});

function updateDB(value) {
	var someObject = {
		a: "abcd",
		year: "1934"
	};
		
	db.ref("/vegetables/" + value).set(someObject);
}

document.getElementById("sendInput").onclick = function (){
	var newVeggie = document.getElementById("inputText").value;
	updateDB(newVeggie);
	
}

document.getElementById("menu-button").onclick=function(){
	window.location="indexmain.html";
}