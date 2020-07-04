//In the the below event it is happenning inside the ul but all the li is clicked in that ul
$("ul").on("click","li", function(){
	// if ($(this).css("color") === "rgb(128, 128, 128)") {
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none"
	// 	})
	// }
	// else{
	// 	$(this).css({
	// 		color: "gray",
	// 		textDecoration: "line-through"
	// 	});

	// }
	//two ways of doing this
	$(this).toggleClass("completed");
	
});
//Click on X to delete
$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();

})
$("input[type = 'text'").keypress(function(event){
	if (event.which === 13) {
		//grabbing new text to add
		var text = $(this).val();
		$(this).val("")
		$("ul").append("<li><span><i class='fa fa-trash'></i></span</li>"+ text +"</li>");
	}
});
$(".fa-edit").click(function(){
	$("input[type ='text'").fadeToggle();
})