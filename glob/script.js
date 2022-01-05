$(document).ready ( function(){

var urbithttp = require("@urbit/http-api");

var urb = new urbithttp.Urbit('', '', 'clickme');
urb.ship = window.ship;
urb.verbose = true;

urb.subscribe({
    app: "clickme",
    path: "/point-updates",
    event: updatePoints,
    err: console.log,
    quit: console.log,
  });

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
  return "godlike";
}


function click() {
  // do poke 
  urb.poke({ app:'clickme', mark:'clickme-action',
    json: null
  });
}
button = document.getElementById('click-button'); 
button.addEventListener('click', click);

});

