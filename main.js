var hidden = true;

$(".fa-bars").click(
  function () {
    if (hidden == true) {
      $(".hamburger-menu").show();
      hidden = false;
    }
  }
);

$(".close").click(
  function () {
    if (hidden == false) {
      $(".hamburger-menu").hide();
      hidden = true;
    }
  }
);
