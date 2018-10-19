$(document).ready(function() {



var count_clicker = [0,0,0];


$("form").click(function(){
	var parent = $(this).parent();
	var grid_elem = parent.parent();
	parent.toggleClass("selected default");
	if(parent.hasClass("selected") && grid_elem.hasClass("grid-elem-1")){
		grid_elem.find(".post-form-text").html("Печень утки разварная с артишоками.");
		count_clicker[0]++;
	}
	else if(parent.hasClass("selected") && grid_elem.hasClass("grid-elem-2")){
		grid_elem.find(".post-form-text").html("Головы щучьи с чесноком да свежайшая семгушка.");
		count_clicker[1]++;
	}
	else if(parent.hasClass("selected") && grid_elem.hasClass("grid-elem-3")){
		grid_elem.find(".post-form-text").html("Филе из циплят с трюфелями в бульоне.");//сам бы сейчас такого поел.
		count_clicker[2]++;
	}
	else{
		grid_elem.find(".post-form-text").html('Чего сидишь? Порадуй котэ, <strong>купи.</strong>');
	}
	console.log(count_clicker);
	if (count_clicker[0]==5){
		parent.toggleClass("selected dis");
		grid_elem.find(".weight").addClass("dis");
		grid_elem.find(".mask").addClass("disabled");
		grid_elem.find(".post-form-text").html("Печалька, с уткой кончился.").css("color","yellow");
		count_clicker[0]=0;
	}
	else if (count_clicker[1]==5){
		parent.toggleClass("selected dis");
		grid_elem.find(".weight").addClass("dis");
		grid_elem.find(".mask").addClass("disabled");
		grid_elem.find(".post-form-text").html("Печалька, с рыбой кончился.").css("color","yellow");
		count_clicker[1]=0;

	}
	else if (count_clicker[2]==5){
		parent.toggleClass("selected dis");
		grid_elem.find(".weight").addClass("dis");
		grid_elem.find(".mask").addClass("disabled");
		grid_elem.find(".post-form-text").html("Печалька, с курой кончился.").css("color","yellow");
		count_clicker[2]=0;

	}

});
$(".post-form-text").on("click", "strong", function(){
	var parent = $(this).parent();
	var grid_elem = parent.parent();
	var form_wrap = grid_elem.find(".form_wrap");
	grid_elem.find(".form-wrap").toggleClass("selected default");
		if(grid_elem.hasClass("grid-elem-1")){
		parent.html("Печень утки разварная с артишоками.");
		count_clicker[0]++;
	}
	else if(grid_elem.hasClass("grid-elem-2")){
		parent.html("Головы щучьи с чесноком да свежайшая семгушка.");
		count_clicker[1]++;
	}
	else{
		parent.html("Филе из циплят с трюфелями в бульоне.");//сам бы сейчас такого поел.
		count_clicker[2]++;
	}
	if (count_clicker[0]==5){
		grid_elem.find(".form-wrap").toggleClass("selected dis");
		grid_elem.find(".weight").addClass("dis");
		grid_elem.find(".mask").addClass("disabled");
		grid_elem.find(".post-form-text").html("Печалька, с уткой кончился.").css("color","yellow");
		count_clicker[0]=0;
	}
	else if (count_clicker[1]==5){
		grid_elem.find(".form-wrap").toggleClass("selected dis");
		grid_elem.find(".weight").addClass("dis");
		grid_elem.find(".mask").addClass("disabled");
		grid_elem.find(".post-form-text").html("Печалька, с рыбой кончился.").css("color","yellow");
		count_clicker[1]=0;

	}
	else if (count_clicker[2]==5){
		grid_elem.find(".form-wrap").toggleClass("selected dis");
		grid_elem.find(".weight").addClass("dis");
		grid_elem.find(".mask").addClass("disabled");
		grid_elem.find(".post-form-text").html("Печалька, с курой кончился.").css("color","yellow");
		count_clicker[2]=0;

	}
});


});