//Audio-player
document.addEventListener(
  "DOMContentLoaded",
  function () {
    startplayer();
  },
  false
);
var player = document.getElementById("music_player");
var player2 = document.getElementById("music_player2");
var player3 = document.getElementById("music_player3");
var player4 = document.getElementById("music_player4");
var player5 = document.getElementById("music_player5");
var player6 = document.getElementById("music_player6");

var playhead = document.getElementById("playhead");
var playhead2 = document.getElementById("playhead2");
var playhead3 = document.getElementById("playhead3");
var playhead4 = document.getElementById("playhead4");
var playhead5 = document.getElementById("playhead5");
var playhead6 = document.getElementById("playhead6");
function startplayer() {
  player.controls = false;
  player2.controls = false;
  player3.controls = false;
  player4.controls = false;
  player5.controls = false;
  player6.controls = false;
}
function play_aud() {
  player.play();
}
function pause_aud() {
  player.pause();
}
function change_vol() {
  player.volume = document.getElementById("change_vol").value;
}
player.addEventListener("timeupdate", function () {
  var duration = this.duration;
  var currentTime = this.currentTime;
  var percentage = (currentTime / duration) * 70;
  playhead.style.left = percentage * 4 + "px";
});

function play_aud2() {
  player2.play();
}
function pause_aud2() {
  player2.pause();
}
function change_vol2() {
  player2.volume = document.getElementById("change_vol2").value;
}
player2.addEventListener("timeupdate", function () {
  var duration2 = this.duration;
  var currentTime2 = this.currentTime;
  var percentage2 = (currentTime2 / duration2) * 100;
  playhead2.style.left = percentage2 * 3 + "px";
});

function play_aud3() {
  player3.play();
}
function pause_aud3() {
  player3.pause();
}
function change_vol3() {
  player3.volume = document.getElementById("change_vol3").value;
}
player3.addEventListener("timeupdate", function () {
  var duration3 = this.duration;
  var currentTime3 = this.currentTime;
  var percentage3 = (currentTime3 / duration3) * 100;
  playhead3.style.left = percentage3 * 2 + "px";
});

function play_aud4() {
  player4.play();
}
function pause_aud4() {
  player4.pause();
}
function change_vol4() {
  player4.volume = document.getElementById("change_vol4").value;
}
player4.addEventListener("timeupdate", function () {
  var duration4 = this.duration;
  var currentTime4 = this.currentTime;
  var percentage4 = (currentTime4 / duration4) * 100;
  playhead4.style.left = percentage4 * 2 + "px";
});

function play_aud5() {
  player5.play();
}
function pause_aud5() {
  player5.pause();
}
function change_vol5() {
  player5.volume = document.getElementById("change_vol5").value;
}
player5.addEventListener("timeupdate", function () {
  var duration5 = this.duration;
  var currentTime5 = this.currentTime;
  var percentage5 = (currentTime5 / duration5) * 100;
  playhead5.style.left = percentage5 * 2 + "px";
});

function play_aud6() {
  player6.play();
}
function pause_aud6() {
  player6.pause();
}
function change_vol6() {
  player6.volume = document.getElementById("change_vol6").value;
}
player6.addEventListener("timeupdate", function () {
  var duration6 = this.duration;
  var currentTime6 = this.currentTime;
  var percentage6 = (currentTime6 / duration6) * 100;
  playhead6.style.left = percentage6 * 2 + "px";
});

//Audio-player-end
//scroll-menu
$(document).ready(function () {
  $("#scroll-effect-js").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1000);
  });
  //scroll-menu-end
  //AOS Animate
  AOS.init();
  AOS.init({
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    offset: 120,
    delay: 0,
    duration: 600,
    easing: "ease",
    once: false,
    mirror: false,
    anchorPlacement: "top-bottom",
  });
});
//Hamburger-menu-animate
$(document).ready(function () {
  $(".hamburger-menu").on("click", function () {
    $("li").toggleClass("hide");
    $("li").toggleClass("opct-animate");
  });
  if ($(window).width() <= 768) {
    $("li").addClass("hide");
    $(".hamburger-menu").addClass("show");
  }
});
//Hamburger-menu-animate-end
//View-all-tours
$(document).ready(function () {
  $("#view-all-tours-btn").on("click", function () {
    $("#view-all-tours").addClass("hide");
    $(".shows-tours").removeClass("hide");
    $(".shows-tours").removeClass("opct-rv-animate");
    $(".shows-tours").addClass("opct-animate");
    $("#hide-all-tours").removeClass("hide");
  });
});
//View-all-tours-end
//hide-all-tours
$(document).ready(function () {
  $("#hide-all-tours-btn").on("click", function () {
    $(".shows-tours").removeClass("opct-animate");
    $(".shows-tours").addClass("opct-rv-animate");
    setTimeout(
      '$(".shows-tours").addClass("hide");$("#hide-all-tours").addClass("hide");',
      1000
    );
    $("#view-all-tours").removeClass("hide");
  });
});
//hide-all-tours-end
$(document).ready(function () {
  $(".slider-desc").slick({
    nextArrow: "#next-arrow",
    prevArrow: "#prev-arrow",
    dotsClass: "slider-active-number",
  });
});
$(".slider-desc").on("afterChange", function (event, slick, currentSlide) {
  $("#current-slide").text(currentSlide + 1);
});
