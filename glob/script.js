$(document).ready ( function(){

var urbithttp = require("@urbit/http-api");

var urb = new urbithttp.Urbit('', '', 'clickme');
urb.ship = window.ship;
urb.verbose = true;

var path = window.location.pathname;
var page = path.split("/").pop();



function updatePoints(gift) {
  points = document.getElementById('points'); 
  points.textContent = gift['points'];
  description = document.getElementById('description'); 
  description.textContent = makeDescription(gift['points']);
}

function makeDescription(points) {
  if(points < 16) {
    return "noob";
  }
  if(points < 32) {
    return "novice";
  }
  if(points < 64) {
    return "mediocre";
  }
  if(points < 128) {
    return "choob";
  }
  if(points < 256) {
    return "wizard";
  }
  if(points < 512) {
    return "warlord";
  }
  return "godlike";
}

function click() {
  // do poke 
  urb.poke({ app:'clickme', mark:'clickme-action',
    json: null
  });
}

var subbed_patp;
function search() {
  subbed_patp = document.getElementById('patp');
  urb.subscribe({
      app: "clickme",
      ship: subbed_patp.value,
      path: "/point-updates",
      event: updatePoints,
      err: console.log,
      quit: console.log,
    });
}

if(page == "index.html" || !page) {
  urb.subscribe({
      app: "clickme",
      path: "/point-updates",
      event: updatePoints,
      err: console.log,
      quit: console.log,
    });

  button = document.getElementById('click-button'); 
  button.addEventListener('click', click);

} else if(page == "search.html") {
  button = document.getElementById('search-button'); 
  button.addEventListener('click', search);
}

});

