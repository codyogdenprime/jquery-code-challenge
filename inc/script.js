var colors = ["red","yellow","green","blue"];

var updateTotals = function () {
	for( var i in colors ) {
		var color = colors[i];
		$("#" + color + "-total").html( $("#boxes > ." + color).length );
	}
};

var addbox = function() {
	console.log( "New Color:", $( this ).data("color") );
	var box = $("<div />", { class: "box" });
		box.addClass( $( this ).data("color") );
	$("#boxes").append( box );
	updateTotals();
};

var removebox = function() {
	$( this ).detach();
	updateTotals();
};

$(document).ready(function(){
	$(".controls button").on("click", addbox );
	$("body").on("click", ".box", removebox );
	updateTotals();
});