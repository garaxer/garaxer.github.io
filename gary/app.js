$(window).load(() => {

  $(".gary.inactive").on("click", function() {
    $(this).removeClass("inactive")
    $(this).addClass("active")
    $(this).children("img").attr("src", "gary_2.png");
    $(this).children("div").remove();
    $(".sound")[0].volume = 0.4;
    $(".sound")[0].play();
    $("body").css({
      "background": " linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('gary.png')",
      "background-size": "200px",
      "animation": "bg 0.2s linear infinite"
    });
 
    $(".gary.active").on("click", function() {
      $(this).addClass("bye");
      $(".sound")[0].pause();
      $("body").removeAttr("style");
    });
  });
});

