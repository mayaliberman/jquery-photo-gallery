lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  alwaysShowNavOnTouchDevices: true,
  disableScrolling: true,
  imageFadeDuration: 500,
  showImageNumberLabel: false
});

$(".input-box").on("keyup", function(event) {
  let value = $(event.target)
    .val()
    .toLowerCase();

  $("a[data-title]").each(function() {
    var testdata = $(this).data("title").toLowerCase();
    if (testdata.includes(value)) {
      $(this).css({"display":"inline-block", "padding": "15px"});
    } else {
      $(this).css("display","none");
      $(this).parent().css("padding", "0px")
    }
  });
});
