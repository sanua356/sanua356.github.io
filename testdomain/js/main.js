$(document).ready(function(){
		$('.slider').slick({
		  infinite: true,
		  slidesToShow: 4,
		  slidesToScroll: 3,
		  autoplay: true,
		  autoplaySpeed: 5000,
		  arrows: true,
		  variableWidth: true,
		  accessibility: true,
		  centerMode: true,
		  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
    ]
		});
	});
	