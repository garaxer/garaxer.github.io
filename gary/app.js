$(window).load(() => {

  $(".gary.inactive").on("click", function() {
    $(this).removeClass("inactive");
    $(this).addClass("active");
    $("body").addClass("active");
    $(this).children("img").attr("src", "gary_2.png");
    $(this).children("div").remove();
    $(".sound")[0].volume = 0.4;
    $(".sound")[0].play();
 
    $(".gary.active").on("click", function() {
      $(this).addClass("bye");
      $(".sound")[0].pause();
      $("body").removeClass("active");
    });
  });
});

