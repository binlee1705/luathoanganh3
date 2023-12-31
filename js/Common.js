﻿"use strict";

function owlslide(
  num,
  margin,
  autoplay,
  dot,
  nav,
  items,
  animateIn,
  animateOut,
  mouseDrag = true,
  autoplayTimeout = 5000
) {
  var option = {
    items: items[0],
    autoplay: num > items[0] ? autoplay : false,
    autoplayTimeout: autoplayTimeout,
    smartSpeed: 1500,
    loop: num > items[0],
    nav: num > items[0] ? nav : false,
    dots: num > items[0] ? dot : false,
    autoplayHoverPause: true,
    margin: margin[0],
    lazyLoad: true,
    navText: [""],
    animateIn: animateIn,
    animateOut: animateOut,
    mouseDrag: mouseDrag,
    responsive: {
      0: {
        items: items[4],
        margin: margin[4],
        loop: num > items[4],
        autoplay: num > items[4] ? autoplay : false,
        nav: num > items[4] ? nav : false,
        dots: num > items[4] ? dot : false,
      },
      479: {
        items: items[3],
        margin: margin[3],
        loop: num > items[3],
        autoplay: num > items[3] ? autoplay : false,
        nav: num > items[3] ? nav : false,
        dots: num > items[3] ? dot : false,
      },
      767: {
        items: items[2],
        margin: margin[2],
        loop: num > items[2],
        autoplay: num > items[2] ? autoplay : false,
        nav: num > items[2] ? nav : false,
        dots: num > items[2] ? dot : false,
      },
      991: {
        items: items[1],
        margin: margin[1],
        autoplay: num > items[1] ? autoplay : false,
        nav: num > items[1] ? nav : false,
        dots: num > items[1] ? dot : false,
        loop: num > items[1],
      },
      1199: {
        items: items[0],
        margin: margin[0],
        autoplay: num > items[0] ? autoplay : false,
        nav: num > items[0] ? nav : false,
        dots: num > items[0] ? dot : false,
        loop: num > items[0],
      },
    },
  };
  return option;
}
function scrollHead(event) {
  event.preventDefault();
  $("body,html").animate({ scrollTop: 0 }, 1000);
}
$(document).ready(() => {
  $("#bttop").click(function (e) {
    scrollHead(e);
  });
  $(".openList").click(() => {
    $("#menu").toggleClass("ac");
    $(".openList").toggleClass("ac");
    $("#overlay").fadeToggle();
  });
  $("#overlay").click(function () {
    $("#menu").toggleClass("ac");
    $(".openList").toggleClass("ac");
    $("#overlay").fadeToggle();
  });
  $(".openSub").click(function () {
    $(this).next("ul").fadeToggle();
    $(this).next(".menuSub").fadeToggle();
    $(this).toggleClass("ac");
    $(this).parents("li").toggleClass("ac");
  });
  $("html").on("click", ".tabs .tab-links a", function (e) {
    var currentAttrValue = $(this).attr("href");
    $(".tabs " + currentAttrValue)
      .addClass("active")
      .siblings()
      .removeClass("active");
    $(this).parents("li").addClass("active").siblings().removeClass("active");
    e.preventDefault();
  });
  $("html").on("change", ".tabs .tab-links", function (e) {
    var currentAttrValue = $(this).val();
    $(".tabs " + currentAttrValue)
      .addClass("active")
      .siblings()
      .removeClass("active");
    e.preventDefault();
  });
  $(".modal").on("shown.bs.modal", function () {
    $(this).trigger("focus");
  });
  $(".toggleSearch").click(function () {
    var $filter = $(this).next(".formFilter");
    $filter.toggleClass("ac");
  });
  $("#profile .right .group").marquee({
    duration: 15000,
    gap: 0,
    delayBeforeStart: 0,
    direction: "up",
    duplicated: true,
    startVisible: true,
    pauseOnHover: true,
  });
  $(".commonSlideBanner").each(function () {
    $(this).owlCarousel(
      owlslide(
        $(this).find(">*").length,
        [10, 10, 10, 10, 10, 10],
        true,
        true,
        false,
        [1, 1, 1, 1, 1],
        "fadeIn",
        "fadeOut"
      )
    );
  });
  $("#customerReview .group").each(function () {
    $(this).owlCarousel(
      owlslide(
        $(this).find(">*").length,
        [20, 20, 20, 20, 20, 20],
        true,
        true,
        false,
        [1, 1, 1, 1, 1],
        "",
        ""
      )
    );
  });
  $("#project .group").each(function () {
    $(this).owlCarousel(
      owlslide(
        $(this).find(">*").length,
        [20, 20, 20, 20, 20, 20],
        true,
        true,
        true,
        [6, 5, 4, 4, 2],
        "",
        ""
      )
    );
  });
  $("#customer .group").each(function () {
    $(this).owlCarousel(
      owlslide(
        $(this).find(">*").length,
        [20, 20, 20, 20, 20, 20],
        true,
        true,
        true,
        [6, 5, 4, 4, 2],
        "",
        ""
      )
    );
  });
  $("#legalService .parent").each(function () {
    $(this).owlCarousel(
      owlslide(
        $(this).find(">*").length,
        [30, 30, 30, 30, 30, 30],
        true,
        true,
        true,
        [2, 2, 2, 2, 1],
        "",
        "",
        false,
        15000
      )
    );
  });
  $("#otherNews .group").each(function () {
    $(this).owlCarousel(
      owlslide(
        $(this).find(">*").length,
        [20, 20, 20, 20, 20, 20],
        true,
        false,
        true,
        [3, 3, 3, 3, 2],
        "",
        "",
        false,
        15000
      )
    );
  });
  $("#footer .right .group .nameCate i").click(function () {
    $(this).parent().next(".list").slideToggle();
    $(this).toggleClass("active");
  });
  $("#menuCate ul li >span,#menu .menuMain ul li >span").click(function () {
    $(this).parent("li").toggleClass("active");
  });


  if ($(window).width() <= 1199) {
    $("#tableOfContents .title").click(function () {
      $(this).next(".list_tableOfContents").slideToggle();
    })
  }
});
$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop > 600) {
    $("#bttop").fadeIn();
  } else {
    if (scrollTop == 0) $("#bttop").fadeOut();
  }
});

$(window).resize(function () { });

function preventScroll(e) {
  e.preventDefault();
  e.stopPropagation();
  return false;
}
var size = parseInt($(".noidung").css("font-size")),
  lineheight = parseInt($(".noidung").css("line-height"));
size || (size = 16);
lineheight || (lineheight = 24);

function Increasenoidung() {
  size++;
  lineheight += 2;
  $(".noidung").css(
    "cssText",
    "font-size:" +
    size +
    "px !important; line-height:" +
    lineheight +
    "px !important"
  );
  $(".noidung")
    .find("*")
    .css(
      "cssText",
      "font-size:" +
      size +
      "px !important; line-height:" +
      lineheight +
      "px !important"
    );
}
function Decreasenoidung() {
  size--;
  lineheight -= 2;
  $(".noidung").css(
    "cssText",
    "font-size:" +
    size +
    "px !important; line-height:" +
    lineheight +
    "px !important"
  );
  $(".noidung")
    .find("*")
    .css(
      "cssText",
      "font-size:" +
      size +
      "px !important; line-height:" +
      lineheight +
      "px !important"
    );
}
function Resetnoidung() {
  size = 16;
  lineheight = 24;
  $(".noidung").css(
    "cssText",
    "font-size:" +
    size +
    "px !important; line-height:" +
    lineheight +
    "px !important"
  );
  $(".noidung")
    .find("*")
    .css(
      "cssText",
      "font-size:" +
      size +
      "px !important; line-height:" +
      lineheight +
      "px !important"
    );
}
function fullSrceenIframe() {
  if ($(".iframe") && $(".iframe").length > 0) {
    $(".iframe,body").toggleClass("fullScreen");
  }
}

function chooseWebsite(ele) {
  var link = ele.val();
  if (link) {
    window.open(link, "_blank");
    ele.val("").trigger("change");
  }
}
