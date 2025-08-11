var mouseX = 0;
var mouseY = 0;
var popupCounter = 0;

document.addEventListener("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
  //document.getElementById("coordinates").innerHTML = "<br />X: " + e.clientX + "px<br />Y: " + e.clientY + "px";
});

$(document).mouseleave(function () {
  if (mouseY < 100) {
    if (popupCounter < 1) {
      $(".exitpop").trigger("click", function () {
        $(".popup-two").addClass("active");
        $("body").addClass("o-hidden");
      });
    }
    popupCounter++;
  }
});

$(document).ready(function () {
  switchDiv();

  $("li:first-child").addClass("first");
  $("li:last-child").addClass("last");

  $('[href="#"]').attr("href", "javascript:;");

  // $('.menu-Bar,.expand').click(function() {
  //     $(this).toggleClass('open');
  //     $('.menuWrap').toggleClass('open');
  //     $('body').toggleClass('ovr-hiddn');
  //     $('.expandable').toggleClass('open');

  // });

  $("[data-targetit]").on("click", function (e) {
    $(this).addClass("current");
    $(this).siblings().removeClass("current");
    var target = $(this).data("targetit");
    $("." + target)
      .siblings('[class^="box-"]')
      .hide();
    $("." + target).fadeIn();
  });

  $(".colasebar li span").click(function () {
    $(this).parent("li").find("span").addClass("open");
    $(this).parent("li").addClass("active");
    $(this).parent("li").siblings().find("span").removeClass("open");
    $(this).parent("li").siblings().removeClass("active");
    $(this).parent("li").find(".expandable").slideDown();
    $(this).parent("li").siblings().find(".expandable").slideUp();
  });

  $(".loginUp").click(function () {
    $("#popuprequest").fadeIn();
    $(".overlay").fadeIn();
    var orgtexts = "$35";
    $(".centercont h3").text("Get Custom Logo Design ");
    $(".centercont h4").html("in Just <span>" + orgtexts + "</span>");
  });

  $(".loginUp24").click(function () {
    $("#popuprequest").fadeIn();
    $(".overlay").fadeIn();
    var orgtexts = "24";
    $(".centercont h3").text("Get Custom Logo Design ");
    $(".centercont h4").html("in Just <span>" + orgtexts + "</span>");
  });

  $(".popbtn").click(function () {
    $("#popuppack").fadeIn();
    $(".overlay").fadeIn();
    var packtitle = $(this)
      .closest(".col-md-6")
      .find(".pkgprice p span")
      .html();
    var packprice = $(this).closest(".col-md-6").find(".pkgprice h4").html();
    var thisrel = $(this).attr("rel");
    $("#popupform1 input#popuppackage").val(thisrel);
    $("#popupform1 input#pack1").val(thisrel);
    $(".centercont h3").html(packtitle);
    $(".centercont h4").html("In Just <span>" + packprice + "</span>");
  });

  $(".specialbtnpack").click(function () {
    $("#popuppack").fadeIn();
    $(".overlay").fadeIn();
    var packtitle1 = $(this).closest(".spacial").find("h2").html();
    var packprice1 = $(this).closest(".spacial").find("h6").html();
    var thisrell = $(this).attr("rel");
    $("#popupform1 input#pack1").val(thisrel);
    $("#popupform1 input#popuppackage").val(thisrell);
    $(".centercont h3").html(packtitle1);
    $(".centercont h4").html("In Just <span>" + packprice1 + "</span>");
  });

  $(".closeico,.overlay").click(function () {
    $("#popuprequest").fadeOut();
    $(".overlay").fadeOut();
  });

  $(".closeico1,.overlay").click(function () {
    $("#popuppack").fadeOut();
    $(".overlay").fadeOut();
  });

  $(".popup-one .popup-btn1").click(function () {
    $(".fancybox-container").hide();
    $("body").removeClass("fancybox-active compensate-for-scrollbar");
  });

  $(".discountyes").click(function () {
    $(".fancybox-container").hide();
    $("body").removeClass("fancybox-active compensate-for-scrollbar");
  });

  $(".discountno").click(function () {
    $(".fancybox-container").hide();
    $("body").removeClass("fancybox-active compensate-for-scrollbar");
  });

  (function ($) {
    $(window).on("load", function () {
      $("ul.mScroll").mCustomScrollbar();
    });
  })(jQuery);

  (function ($) {
    $(window).on("load", function () {
      $("ul.pkgDtl").mCustomScrollbar();
    });
  })(jQuery);

  $(".counter").countUp();

  if ($(window).width() > 768) {
    $(".tabsdetails .row > .col-md-3").hover(
      function () {
        $(this).addClass("pkg-active").siblings().removeClass("pkg-active");
      },
      function () {
        //$(".pack-list > li:nth-child(2)").addClass("pkg-active").siblings().removeClass("pkg-active");
        $(".always-active")
          .addClass("pkg-active")
          .siblings()
          .removeClass("pkg-active");
      }
    );
  }

  $(".mainBanner1").slick({
    slidesToShow: 1,
    infinite: true,
    slidesToScrol1: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    arrows: false,
    easing: "linear",
    pauseOnHover: true,
    swipeToSlide: true,
    fade: true,
  });

  $(".brandsslides").slick({
    slidesToShow: 6,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,

    responsive: [
      {
        breakpoint: 824,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  });

  $("[data-targetit]").on("click", function (e) {
    $(this).addClass("current");
    $(this).siblings().removeClass("current");
    var target = $(this).data("targetit");
    $("." + target)
      .siblings('[class^="box-"]')
      .hide();
    $("." + target).fadeIn();
  });

  // $('.expand').click(function(){
  //     target_num = $(this).attr('id').split('-')[1];
  //     content_id = '#expandable-'.concat(target_num);
  //     $(content_id).slideToggle('fast');
  // });
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 200) {
    $(".fixed").addClass("sticky");
  } else {
    $(".fixed").removeClass("sticky");
  }
});

$(window).on("load", function () {
  var currentUrl = window.location.href.substr(
    window.location.href.lastIndexOf("/") + 1
  );
  $("ul.menu li a").each(function () {
    var hrefVal = $(this).attr("href");
    if (hrefVal == currentUrl) {
      $(this).removeClass("active");
      $(this).closest("li").addClass("active");
      $("ul.menu li.first").removeClass("active");
    }
  });
});

(function ($) {
  $(window).on("load", function () {
    $("ul.pkgserv").mCustomScrollbar();
  });
})(jQuery);

var width = $(window).width();

document.addEventListener("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
  //document.getElementById("coordinates").innerHTML = "<br />X: " + e.clientX + "px<br />Y: " + e.clientY + "px";
});

//Popup on leave
function leaveFromTop(e) {
  // if(width >= 768){
  if (mouseY > 0) {
    // less than 60px is close enough to the top

    if ($.cookie("orform") == null) {
      //$(".popUpBtn").trigger('click');

      $(".cookietbtn").trigger("click", function () {
        $(".popup-one").addClass("active");
        $("body").addClass("o-hidden");
      });

      cokie();
    }
  }
  // }
}
//create cookie on form submission
function cokie() {
  $.cookie("orform", 1, {
    expires: 1,
  });
  var cookieValue = $.cookie("orform");
}
setTimeout(function () {
  leaveFromTop();
}, 3000);
//Popup on leave end

/* RESPONSIVE JS */
if ($(window).width() < 824) {
}

function switchDiv() {
  var $window = $(window).outerWidth();
  if ($window <= 768) {
    $(".topAppendTxt").each(function () {
      var getdtd = $(this).find(".cloneDiv").clone(true);
      $(this).find(".cloneDiv").remove();
      $(this).append(getdtd);
    });
  }
}
if ($(window).width() < 768) {
}

if ($(window).width() > 768) {
  $(".pkg-list > li").hover(
    function () {
      $(this).addClass("pkg-active").siblings().removeClass("pkg-active");
    },
    function () {
      //$(".pack-list > li:nth-child(2)").addClass("pkg-active").siblings().removeClass("pkg-active");
      $(".always-active")
        .addClass("pkg-active")
        .siblings()
        .removeClass("pkg-active");
    }
  );
}
$(document).ready(function () {
  setTimeout(function () {
    $(".overlay").fadeIn();
    $("#popuprequest").show();
  }, 4000);
});
