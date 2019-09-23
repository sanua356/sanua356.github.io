//Audio-player
document.addEventListener("DOMContentLoaded", function() { startplayer(); startplayer2(); startplayer3(); startplayer4(); startplayer5(); startplayer6(); }, false);
var player;
var player2;
var player3;
var player4;
var player5;
var player6;
function startplayer() 
{
 player = document.getElementById('music_player');
 player.controls = false;
}
function startplayer2() 
{
 player2 = document.getElementById('music_player2');
 player2.controls = false;
}
function startplayer3() 
{
 player3 = document.getElementById('music_player3');
 player3.controls = false;
}
function startplayer4() 
{
 player4 = document.getElementById('music_player4');
 player4.controls = false;
}
function startplayer5() 
{
 player5 = document.getElementById('music_player5');
 player5.controls = false;
}
function startplayer6() 
{
 player6 = document.getElementById('music_player6');
 player6.controls = false;
}
function play_aud() 
{
 player.play();
} 
function pause_aud() 
{
 player.pause();
}
function play_aud2() 
{
 player2.play();
} 
function pause_aud2() 
{
 player2.pause();
}
function play_aud3() 
{
 player3.play();
} 
function pause_aud3() 
{
 player3.pause();
}
function play_aud4() 
{
 player4.play();
} 
function pause_aud4() 
{
 player4.pause();
}
function play_aud5() 
{
 player5.play();
} 
function pause_aud5() 
{
 player5.pause();
}
function play_aud6() 
{
 player6.play();
} 
function pause_aud6() 
{
 player6.pause();
}
//Audio-player-end
//scroll-menu
$(document).ready(function(){
	$("#scroll-effect-js").on("click","a", function (event) {
	    event.preventDefault();
		var id  = $(this).attr('href'),
		    top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});
//scroll-menu-end
//AOS Animate	
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
//Hamburger-menu-animate
$(document).ready(function() {
	$(".hamburger-menu").on("click", function() {
		$("li").toggleClass("hide");
		$("li").toggleClass("animate-hamburger");
	});
	  if ( $(window).width() <= 480 ) {
      $("li").addClass("hide");
      $(".hamburger-menu").addClass("show");
    }
});
//Hamburger-menu-animate-end
