window.addEventListener("scroll", function () {
  let menu = window.pageYOffset;
  if (menu > 830) {
    $(".nav_wrap").addClass("add");
    $(".logo_wrap img").addClass("add");
    $(".toggle_wrap").addClass("add");
    $("nav a:link, nav a:visited").addClass("add");
    $("nav a:hover, nav a:active").addClass("add");
    $(".main_menu li").addClass("underline");
    
  } else {
    $(".nav_wrap").removeClass("add");
    $(".logo_wrap img").removeClass("add");
    $(".toggle_wrap").removeClass("add");
    $("nav a:link, nav a:visited").removeClass("add");
    $("nav a:hover, nav a:active").removeClass("add");
    $(".main_menu li").removeClass("underline");
  }
});
