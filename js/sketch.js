var squares = 16;

function paintGrid(numTiles) {
	$('.container').empty();
	var container = $('.container');
	for (var i = 0; i < numTiles; i++) {
		container.append($('<div class="row"></div>'));
	}
	var row = $('.row');
	for (var i = 0; i < numTiles; i++) {
		row.append($('<div class="grid"></div>'));
	}
	var grid = $('.grid')
	var contWidth = $('.container').width();
	grid.css({'width': contWidth/numTiles + 'px'});
	var gridWidth = $('.grid').width();
	grid.css({'height': gridWidth+'px'});

	grid.mouseenter(function() {
		if (!$(this).hasClass('highlight')) {
			$(this).addClass('highlight');
			var hue = Math.floor(Math.random() * 360);
			var sat = Math.floor(Math.random() * 100);
			var lig = 90;
			$(this).data('hue', hue);
			$(this).data('sat', sat);
			$(this).data('lig', lig);
			$(this).css('background-color', 'hsl(' + hue + ', ' + sat + '%, ' + lig + '%)');
		} else if ($(this).data('lig') > 0) {
			var hue = $(this).data('hue');
			var sat = $(this).data('sat');
			var lig = $(this).data('lig') - 10;
			$(this).data('lig', lig);
			$(this).css('background-color', 'hsl(' + hue + ', ' + sat + '%, ' + lig + '%)');
		}
	});
}

$(document).ready(function(){
	paintGrid(squares);
});

function resetGrid() {
	var newSquares = prompt("Please how many squares per side you want the grid to be (between 1 and 64):", squares);
	if (newSquares === null) {
		return;
	}
	while (newSquares < 1 || newGrid > 64) {
		newSquares = prompt("Wrong square number! Please enter number between 1 and 64:", grid);
		if (newSquares === null) {
			return;
		}
	}
	paintGrid(newSquares)
	squares = newSquares;
}