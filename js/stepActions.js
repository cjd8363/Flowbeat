$(function(){
	
	// $ = select and # beacuse it's an ID and then classes with "." the dot
	// a beacuse it's a link tag but you can change it
	$("#progressWrapper div").on("vclick click", function() {
  		// making a new variable to hold the video file name beacuse it depends on which link we click
  		var videoFile = $(this).attr("rel");
  		$("#videoView").html("<video controls> <source src='"+videoFile+"' type='video/mp4'> </video>");
  		$("#slider").animate({marginLeft:"-100%"}, 500, "linear");
  	});
  	
  	$("#slider").swipe({
		//Generic swipe handler for all directions
		swipe:function(event, direction, distance, duration, fingerCount) {
			if(direction == 'right' && $(this).css("marginLeft") != "0px")
			{
				$(this).animate({marginLeft: "0%"}, 500, 'linear', function(){
					$('#videoView').empty();
				});
			}
		}
  	});
});