//var myPara = document.getElementById("content").getElementsByTagName("p")[5];

//using jQuery doing the same thing
var myPara2 = $("#content p:last-child");

//myPara2.animate({left: "50px"});
myPara2.css({color: "red"});
