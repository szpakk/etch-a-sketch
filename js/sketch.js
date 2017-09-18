SKETCH = {
	squares: 16,
	
	paintTile: function() {
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
	},
  
  buildGrid: function() {
		var $container = $('.container');
		for (var i = 0; i < SKETCH.squares; i++) {
			$container.append($('<div class="row"></div>'));
		}
		var $row = $('.row');
		for (var i = 0; i < SKETCH.squares; i++) {
			$row.append($('<div class="grid"></div>'));
		}
	},

	paintGrid: function() {
		$('.container').empty();
		SKETCH.buildGrid();
		var $grid = $('.grid')
		var containerWidth = $('.container').width();
		$grid.css({'width': containerWidth/SKETCH.squares + 'px'});
		var gridWidth = $('.grid').width();
		$grid.css({'height': gridWidth+'px'});

		$grid.mouseenter(SKETCH.paintTile);
	},

	resetGrid: function() {
		var newSquares = prompt("Please how many squares per side you want the grid to be (between 1 and 64):", SKETCH.squares);
		if (newSquares === null) {
			return;
		}
		while (newSquares < 1 || newSquares > 64) {
			newSquares = prompt("Wrong square number! Please enter a number between 1 and 64:", SKETCH.squares);
			if (newSquares === null) {
				return;
			}
		}
		SKETCH.squares = newSquares;
		SKETCH.paintGrid();
	}
};

$(document).ready(function(){
	SKETCH.paintGrid();
	$('#reset').on("click", function() {
		SKETCH.resetGrid();
	});
});
