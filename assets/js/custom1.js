$(function() {
  $(".expand").on( "click", function() {
    $(this).next().slideToggle(200);
    $expand = $(this).find(">:first-child");

    if($expand.html() == "<i class='fa fa-angle-down'></i>") {
      $expand.html("<i class='fa fa-angle-up'></i>");
    } else {
      $expand.html("<i class='fa fa-angle-down'></i>");
    }
  });
});