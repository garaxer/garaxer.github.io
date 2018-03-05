function Site(url, icon) {
  this.url = url;
  this.icon = icon;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

var card = {
  picture:  "images/gary_pc.png",
  name:     "Gary Bagnall",
  position: "Programmer",
  company:  new Site("http://github.com/garaxer", "images/g.png"),
  email:    "gbagnall8@gmail.com"
}

var links = {
  github:   new Site("http://github.com/garaxer",	                     "images/github_icon.png"),
  linkedin: new Site("https://www.linkedin.com/in/gary-bagnall-504859a5/", "images/Linkedin_icon.png"),
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

var fillCard = (c) => {

  var displayPicture = document.getElementById("icon");
  displayPicture.setAttribute("src", c.picture);

  var name = document.getElementById("name");
  name.innerHTML = c.name;

  var position = document.getElementById("position");
  position.innerHTML = c.position;

  var companyLink = document.getElementById("companyLink");
  companyLink.setAttribute("href", c.company.url);

  var companyLogo = document.getElementById("companyLogo");
  companyLogo.setAttribute("src", c.company.icon);

  var email = document.getElementById("email");
  email.innerHTML = c.email;
}

var fillSites = (s) => {
  for (i in s) {
    var a = document.createElement("a");
    sites.appendChild(a);

    a.setAttribute("href", links[i].url);
    var img = document.createElement("img");
    img.setAttribute("src", links[i].icon);
    a.innerHTML = img.outerHTML;
  }
}

window.onload = () => {
  fillCard(card);
  fillSites(links);
}
