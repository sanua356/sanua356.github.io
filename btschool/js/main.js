$(document).ready(function() {
	var $container = $(".grid");
		$container.imagesLoaded(function () {
    	$container.masonry({
      	    itemSelector:'.grid-item',
			columnWidth: 10,
			gutter: 30,
			percentPosition: true,
    	});
	});
});
$(document).ready(function() {
	var $container = $(".footer-galery");
		$container.imagesLoaded(function () {
    	$container.masonry({
      	    itemSelector:'.footer-galery-item',
			columnWidth: 1,
			gutter: 5,
			percentPosition: true,
    	});
	});
});
$(document).ready(function(){
    $(".scroll-down-header").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
$(document).ready(function(){
    $(".scroll-down-footer").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
$(document).ready(function() {
	$(".hamburger-menu").on("click", function() {
		$("li").toggleClass("hide");
		$("li").toggleClass("opct-animate");
	});
	  if ( $(window).width() <= 768 ) {
      $("li").addClass("hide");
      $(".hamburger-menu").addClass("show");
    }
});
$(document).ready(function() {
	$(".submenu-btn1").on("click", function() {
		$(".submenu1").toggleClass("show");
		$(".submenu1").removeClass("hide");
		$(".submenu2").addClass("hide");
		$(".submenu3").addClass("hide");
		$(".submenu1").toggleClass("opct-animate");
	});
	$(".submenu-btn2").on("click", function() {
		$(".submenu2").toggleClass("show");
		$(".submenu2").removeClass("hide");
		$(".submenu1").addClass("hide");
		$(".submenu3").addClass("hide");
		$(".submenu2").toggleClass("opct-animate");
	});
	$(".submenu-btn3").on("click", function() {
		$(".submenu3").toggleClass("show");
		$(".submenu3").removeClass("hide");
		$(".submenu1").addClass("hide");
		$(".submenu2").addClass("hide");
		$(".submenu3").toggleClass("opct-animate");
	});
});
$(document).ready(function() {
  	AOS.init()
	AOS.init({
		disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
		initClassName: 'aos-init', // class applied after initialization
		animatedClassName: 'aos-animate', // class applied on animation
		useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
		disableMutationObserver: false, // disables automatic mutations' detections (advanced)
		debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
		throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
		  

		  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		offset: 120, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 600, // values from 0 to 3000, with step 50ms
		easing: 'ease', // default easing for AOS animations
		once: false, // whether animation should happen only once - while scrolling down
		mirror: false, // whether elements should animate out while scrolling past them
		anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation);
	});
});

