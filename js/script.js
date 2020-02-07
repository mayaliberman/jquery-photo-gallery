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
    let testdata = $(this)
      .data("title")
      .toLowerCase();
    if (value === "") {
      $(this)
        .parent()
        .removeClass("hide");
      return;
    }
    if (testdata.includes(value) && value !== "") {
      $(this)
        .parent()
        .removeClass("hide");
    } else {
      $(this)
        .parent()
        .addClass("hide");
    }
  });
});

$(".input-box").on("search", function() {
  $("a[data-title]").each(function() {
    $(this)
      .parent()
      .removeClass("hide");
    return;
  });
});

