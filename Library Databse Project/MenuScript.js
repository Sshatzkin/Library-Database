if (document.getElementById("logout-button")!=null){
	document.getElementById("logout-button").onclick=function(){
		firebase.auth().signOut();
		window.location= "Loginmain.html";
	};	
}

if (document.getElementById("home-button")!=null){
	document.getElementById("home-button").onclick=function(){
		window.location= "C:\\Users\\sammy\\Documents\\Big Idea\\HTML\\Library Databse Project\\Indexmain.html";
	};
}

if (document.getElementById("calc-button")!=null){
	document.getElementById("calc-button").onclick=function(){
		window.location= "C:\\Users\\sammy\\Documents\\Big Idea\\HTML\\Calculator\\calcmain.html";
	};
}
if (document.getElementById("amica-button")!=null){
	document.getElementById("amica-button").onclick=function(){
		window.location= "C:\\Users\\sammy\\Documents\\Big Idea\\HTML\\Amica Website\\amicamain.html";
	};
}
if (document.getElementById("database-button")!=null){
	document.getElementById("database-button").onclick=function(){
		window.location= "C:\\Users\\sammy\\Documents\\Big Idea\\HTML\\Library Databse Project\\databasemain.html";
	};
}
