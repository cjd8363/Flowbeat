$(function(){
	
	// $ = select and # beacuse it's an ID and then classes with "." the dot
	// a beacuse it's a link tag but you can change it
	$("#dictionaryButton").on("vclick click", function() {
  		window.location.href = "step.html";
  	});
  	
  	$('#bboy').on("vclick click", function() {
  		window.location.href = "bBoy.html";
  	});
});