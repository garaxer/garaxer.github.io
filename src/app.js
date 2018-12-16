$(window).load(() => {
  $.getJSON('http://garaxer.github.io/json', (gary) => {
    $(".picture").attr("src", gary.picture);
    $(".picture").click(() => window.open('./json'));
    $(".name").text(gary.name);
    $(".position").text(gary.position);
    $(".email").text(gary.email);
    $(".email").attr("href", "mailto:" + gary.email);
  
    $.each(gary.usernames, (k,v) => {
      $(".sites").append("<img class='button " + k + "' src='src/images/icon-" + k + ".png'>");
      $("." + k).click(() => window.open(v.base + v.user));
    });
  });
})
