$(window).load(() => {
    $(".picture").attr("src", gary.picture);
    $(".picture").click(() => window.open('./json/index.json'));
    $(".name").text(gary.name);
    $(".position").text(gary.position);
    $(".email").text(gary.email);
    $(".email").attr("href", "mailto:" + gary.email);
  
    $.each(gary.usernames, (k,v) => {
      $(".sites").append("<img class='button " + k + "' src='src/images/icon-" + k + ".png'>");
      $("." + k).click(() => window.open(v.base + v.user));
    });
});


$.getJSON('https://garaxer.github.io/json', (gary) => {
  console.log(gary);
});
$.getJSON('http://garaxer.github.io/json', (gary) => {
  console.log(gary);
});
$.getJSON('garaxer.github.io/json', (gary) => {
  console.log(gary);
});
//jquery-1.12.4.js:10254 Mixed Content: The page at 'https://garaxer.github.io/' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://garaxer.github.io/json'. This request has been blocked; the content must be served over HTTPS.