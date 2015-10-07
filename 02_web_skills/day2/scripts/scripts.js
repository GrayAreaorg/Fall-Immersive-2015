$(document).ready(function(){

	$("#one").click(function(){
		console.log("one is clicked");
		$("#firstsketch").removeClass("hidden");
		$("#secondsketch").addClass("hidden");
		$("#thirdsketch").addClass("hidden");

		$("#one").addClass("selected");
		$("#two").removeClass("selected");
		$("#three").removeClass("selected");
	});
	$("#two").click(function(){
		console.log("two is clicked");
		$("#firstsketch").addClass("hidden");
		$("#secondsketch").removeClass("hidden");
		$("#thirdsketch").addClass("hidden");

		$("#one").removeClass("selected");
		$("#two").addClass("selected");
		$("#three").removeClass("selected");
	});
	$("#three").click(function(){
		console.log("three is clicked");
		$("#firstsketch").addClass("hidden");
		$("#secondsketch").addClass("hidden");
		$("#thirdsketch").removeClass("hidden");

		$("#one").removeClass("selected");
		$("#two").removeClass("selected");
		$("#three").addClass("selected");
	});

});
