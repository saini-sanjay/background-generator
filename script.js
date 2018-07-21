var CSS=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");


body.style.background="red";
color1.addEventListener("input",function () {
	// body...
	body.style.background=
	"linear-gradient(to right,"
	                 +color1.value
                     +","
	                 +color2.value
	                 +")";CSS.textContent=body.style.background+";";
})
color2.addEventListener("input",function () {
	// body...
	body.style.background=
	"linear-gradient(to right,"
	                 +color1.value
                     +","
	                 +color2.value
	                 +")";
	CSS.textContent=body.style.background+";";
})

