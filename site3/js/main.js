$(document).ready(function() {
	$('#cube-slider1').on('click', function(){
		$('#cube-slider1').attr('src', 'img/navigation/painted-over-slider-cube.svg')
		$('#cube-slider2').attr('src', 'img/navigation/cube-slider-head.svg')
		$('#cube-slider3').attr('src', 'img/navigation/cube-slider-head.svg')
		$('.img-header-1').fadeIn(500)
		$('.img-header-2').fadeOut(500)
		$('.img-header-3').fadeOut(500);
	});
});	
$(document).ready(function() {
	$('#cube-slider2').on('click', function(){
		$('#cube-slider2').attr('src', 'img/navigation/painted-over-slider-cube.svg')
		$('#cube-slider1').attr('src', 'img/navigation/cube-slider-head.svg')
		$('#cube-slider3').attr('src', 'img/navigation/cube-slider-head.svg')
		$('.img-header-1').fadeOut(500)
		$('.img-header-2').fadeIn(500)
		$('.img-header-3').fadeOut(500);
	});
});	
$(document).ready(function() {
	$('#cube-slider3').on('click', function(){
		$('#cube-slider3').attr('src', 'img/navigation/painted-over-slider-cube.svg')
		$('#cube-slider2').attr('src', 'img/navigation/cube-slider-head.svg')
		$('#cube-slider1').attr('src', 'img/navigation/cube-slider-head.svg')
		$('.img-header-1').fadeOut(500)
		$('.img-header-2').fadeOut(500)
		$('.img-header-3').fadeIn(500);
	});
});	
$(document).ready(function() {
    var $toggleButton = $('.toggle-button'),
        $menuWrap = $('.menu-wrap');
    $toggleButton.on('click', function() {
        $(this).toggleClass('button-open');
        $menuWrap.toggleClass('menu-show');
    });
});