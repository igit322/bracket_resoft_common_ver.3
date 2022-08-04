// 토글버튼

$(".inner_wrap").hide();
$(".toggle_wrap").click(function () {
  $(".inner_wrap").fadeToggle("300");
  $(".inner_li, .inner_wrap hr").fadeToggle("300");
});
