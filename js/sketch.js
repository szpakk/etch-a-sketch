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

	grid.hover(function() {
		$(this).addClass('highlight');
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