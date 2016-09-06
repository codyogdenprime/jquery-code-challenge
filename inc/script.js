var colors = ["red","yellow","green","blue"];

var updateTotals = function () {
	console.log( "updatetotals" );
	for( var i in colors ) {
		var color = colors[i];
		$("#" + color).html( "Total " + color + ": " + $(".container > ." + color).length );
	}
};

var addbox = function() {
	console.log( "hello");
	console.log( "New Color:", $( this ).data("color") );
	var box = $("<div />", { class: "box" });
		box.addClass( $( this ).data("color") );
	$(".container").append( box );
	updateTotals();
};

var removebox = function() {
	$( this ).detach();
	updateTotals();
};

$(document).ready(function(){
	$("body").on("click", ".color-button", addbox );
	$("body").on("click", ".box", removebox );
	updateTotals();
});