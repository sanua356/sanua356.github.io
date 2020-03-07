//scroll links menu
var $page = $("html, body");
$(".menu-scroll-link").click(function() {
  $page.animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    800
  );
  return false;
});
//watch video
let watchVideoBtn = document.querySelector(".watch-video-btn");
let videoFrame = document.querySelector(".videoFrame");
watchVideoBtn.addEventListener("click", function() {
  videoFrame.classList.remove("hide");
  videoFrame.classList.add("opct-animate");
  watchVideoBtn.classList.add("hide");
});
//watch video-end
//scroll links menu end
//popup

var popupSignUpBtnOpen = document.getElementById("PopupSignUpOpen");
popupSignUpBtnClose = document.getElementById("PopupSignUpBtnClose");
popupSignUpWindow = document.getElementById("PopupSignUpWindow");
popupSignUpScreenBg = document.getElementsByClassName("PopupBg");

popupSignUpBtnOpen.addEventListener("click", openPopup);
popupSignUpBtnClose.addEventListener("click", closePopup);

function openPopup() {
  popupSignUpScreenBg[0].classList.remove("z-index");
  popupSignUpWindow.classList.remove("hide");
  popupSignUpWindow.classList.add("opct-animate");
}
function closePopup() {
  popupSignUpScreenBg[0].classList.add("z-index");
  popupSignUpWindow.classList.add("hide");
}
//popup-end
//popup

var popupCallMeBtnOpen = document.getElementsByClassName("PopupCallMeOpen");
popupCallMeBtnClose = document.getElementById("PopupCallMeBtnClose");
popupCallMeWindow = document.getElementById("PopupCallMeWindow");
popupCallMeScreenBg = document.getElementsByClassName("PopupBg");

popupCallMeBtnOpen[0].addEventListener("click", openPopupCallMe);
popupCallMeBtnOpen[1].addEventListener("click", openPopupCallMe);
popupCallMeBtnOpen[2].addEventListener("click", openPopupCallMe);
popupCallMeBtnOpen[3].addEventListener("click", openPopupCallMe);
popupCallMeBtnClose.addEventListener("click", closePopupCallMe);

function openPopupCallMe() {
  popupCallMeScreenBg[0].classList.remove("z-index");
  popupCallMeWindow.classList.remove("hide");
  popupCallMeWindow.classList.add("opct-animate");
}
function closePopupCallMe() {
  popupCallMeScreenBg[0].classList.add("z-index");
  popupCallMeWindow.classList.add("hide");
}
//popup-end
// human-review slider
$(document).ready(function() {
  $(".human-review-slider").slick({
    vertical: true,
    slidesToShow: 2,
    verticalSwiping: true,
    autoplay: true,
    prevArrow: $(".js-human-prev"),
    nextArrow: $(".js-human-next"),
    responsive: [
      {
        breakpoint: 480,
        settings: {
          verticalSwiping: false,
          swipe: false
        }
      }
    ]
  });
});
// human-review slider - end

// our team slider
$(document).ready(function() {
  $(".our-team-slider").slick({
    centerMode: true,
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      }
    ]
  });
  // our-team slider subtext
  function funcBefore() {
    if ($(".ourTeamHuman4").hasClass("slick-center")) {
      $(".tesla").removeClass("hide");
      $(".tesla").addClass("opct-animate");
    } else {
      $(".tesla").addClass("hide");
    }
    if ($(".ourTeamHuman1").hasClass("slick-center")) {
      $(".sapkovski").removeClass("hide");
      $(".sapkovski").addClass("opct-animate");
    } else {
      $(".sapkovski").addClass("hide");
    }
    if ($(".ourTeamHuman2").hasClass("slick-center")) {
      $(".turner").removeClass("hide");
      $(".turner").addClass("opct-animate");
    } else {
      $(".turner").addClass("hide");
    }
    if ($(".ourTeamHuman3").hasClass("slick-center")) {
      $(".alderson").removeClass("hide");
      $(".alderson").addClass("opct-animate");
    } else {
      $(".alderson").addClass("hide");
    }
  }
  count = 0;
  intervalId = setInterval(function() {
    count++;
    if (count == 10) {
      clearInterval(intervalId);
    }
    count = 1;
    funcBefore();
  }, 500);
});
// our-team slider - end

//services-table
var dropdownButtonsArray = document.getElementsByClassName(
  "services-table-item"
);
var servicesTableArray = document.getElementsByClassName(
  "services-dropdown-items"
);
var servicesTableItemIndexNumber = 0;
dropdownButtonsArray[1].addEventListener("click", function() {
  servicesTableItemIndexNumber = 1;
  servicesTableItems();
});
dropdownButtonsArray[0].addEventListener("click", function() {
  servicesTableItemIndexNumber = 0;
  servicesTableItems();
});
dropdownButtonsArray[2].addEventListener("click", function() {
  servicesTableItemIndexNumber = 2;
  servicesTableItems();
});
dropdownButtonsArray[3].addEventListener("click", function() {
  servicesTableItemIndexNumber = 3;
  servicesTableItems();
});
dropdownButtonsArray[4].addEventListener("click", function() {
  servicesTableItemIndexNumber = 4;
  servicesTableItems();
});
function servicesTableItems() {
  if (
    servicesTableArray[servicesTableItemIndexNumber].classList.contains(
      "services-close-item"
    )
  ) {
    servicesTableArray[servicesTableItemIndexNumber].classList.remove(
      "services-close-item"
    );
  } else {
    servicesTableArray[servicesTableItemIndexNumber].classList.add(
      "services-close-item"
    );
  }
  servicesTableArray[servicesTableItemIndexNumber].classList.add(
    "opct-animate"
  );
}
//services-table-end
// contact-us-form
let redirectArrayContactUs = ["false", "false", "false", "false", "false"];
function Formdata(data) {
  if (data.firstname != null && data.firstname.value.length < 3) {
    $("#firstname-contact-us-form").addClass("error-validation");
    return false;
  } else {
    $("#firstname-contact-us-form").removeClass("error-validation");
    redirectArrayContactUs[0] = "true";
  }
  if (data.lastname != null && data.lastname.value.length < 3) {
    $("#lastname-contact-us-form").addClass("error-validation");
    return false;
  } else {
    $("#lastname-contact-us-form").removeClass("error-validation");
    redirectArrayContactUs[1] = "true";
  }
  if (data.email != null && data.email.value.length < 3) {
    $("#email-contact-us-form").addClass("error-validation");
    return false;
  } else {
    $("#email-contact-us-form").removeClass("error-validation");
    redirectArrayContactUs[2] = "true";
  }
  if (data.phone != null && data.phone.value.length < 3) {
    $("#phone-contact-us-form").addClass("error-validation");
    return false;
  } else {
    $("#phone-contact-us-form").removeClass("error-validation");
    redirectArrayContactUs[3] = "true";
  }
  if (data.message != null && data.message.value.length < 3) {
    $("#message-contact-us-form").addClass("error-validation");
    return false;
  } else {
    $("#message-contact-us-form").removeClass("error-validation");
    redirectArrayContactUs[4] = "true";
  }
  if (
    redirectArrayContactUs[0] == "true" &&
    redirectArrayContactUs[1] == "true" &&
    redirectArrayContactUs[2] == "true" &&
    redirectArrayContactUs[3] == "true" &&
    redirectArrayContactUs[4] == "true"
  ) {
    let thankYouPopup = document.getElementById("thankYouPopup");
    thankYouPopup.classList.remove("hide");
    thankYouPopup.classList.add("opct-animate");
    setTimeout(() => thankYouPopup.classList.add("hide"), 3000);
    //window.location.href = "thank-you.html";
  } else {
    console.log("form is not all valid");
  }
}
//contact-us-form-end
