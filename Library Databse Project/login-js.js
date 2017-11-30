var usernameElement = document.getElementById("username-input");
var passwordElement = document.getElementById("password-input");
var statusBox = document.getElementById("status");
var usernameBox = document.getElementById("username-box");
var passwordBox = document.getElementById("password-box");
var regBox = document.getElementById("registration-body");
var btn1 = document.getElementById("login-button");
var btn2 = document.getElementById("registration-button");

var rbtn1 = document.getElementById("registration-gone");



usernameElement.onfocus = function(){
	usernameElement.style.outline = "none";
	usernameBox.style.backgroundColor = "#EB8A74";
	usernameElement.style.backgroundColor = "#EB8A74";
};

passwordElement.onfocus = function(){
	passwordElement.style.outline = "none";
	passwordBox.style.backgroundColor = "#EB8A74";
	passwordElement.style.backgroundColor = "#EB8A74";
};

usernameElement.onblur = function(){
	usernameBox.style.backgroundColor = "";
	usernameElement.style.backgroundColor = "";
};

passwordElement.onblur = function(){
	passwordBox.style.backgroundColor = "";
	passwordElement.style.backgroundColor = "";
};

var regDrop = function(){
	regBox.style.animation = "";
	regBox.style.animation = "registrationAnimation 2s forwards";
};

var regUp = function(){
	regBox.style.animation = "";
	regBox.style.animation = "registrationAnimation 2s reverse";
};



$("#registration-button").click(function() {
  $('.registrationBody').toggleClass('registrationBody-active');
});

$("#registration-gone").click(function() {
  $('.registrationBody').toggleClass('registrationBody-active');
});


//all this is firebase shit


var loginClick = function(){
	console.log(usernameElement.value + "," + passwordElement.value);
	statusBox.innerHTML = "";
	var u = usernameElement.value; //username-input
	var p =passwordElement.value; // password-input
	
	var x1 = firebase.auth();
	var x2 = x1.signInWithEmailAndPassword(u,p);
	var x3 = function(e) {
		var errorMsg = e.message;
		statusBox.innerHTML = errorMsg;
		
		console.log(e);
	};
	x2.catch(x3);	
};

btn1.onclick = loginClick;
	  
	var a1 = firebase.auth();
	var a2 = function(u){
		if (u===null){
			console.log("You're not logged in");
		}else{
			var emailOfUser = u.email;
			//alert("Welcome: " + emailOfUser);
				
			 window.location = "indexmain.html";					
		}
	};
	a1.onAuthStateChanged(a2);