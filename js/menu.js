// 토글버튼

$(".inner_wrap").hide();
$(".toggle_wrap").click(function () {
  $(".inner_wrap").slideToggle("slow");
  $(".inner_li, .inner_wrap hr").fadeToggle("slow");
});
