/// Окно логина
var loginWindow            = document.querySelector(".modal-login");
var loginWindowOpenButton  = document.querySelector("#authorization");
var loginWindowCloseButton = document.querySelector(".modal-login .close-login-button");
var loginWindowOpen        = false;

loginWindowOpenButton.addEventListener("click", function() {
  if(loginWindowOpen) {
    loginWindow.style.display = "none";
    loginWindowOpen = false;
  }
  else {
    loginWindow.style.display = "block";
    loginWindowOpen = true;
  }
});

loginWindowCloseButton.addEventListener("click", function() {
  loginWindow.style.display = "none";
  loginWindowOpen = false;
});



/// Окно карты
var mapWindow            = document.querySelector(".map");
var mapWindowOpenButton  = document.querySelector("#open-map");
var mapWindowCloseButton = document.querySelector(".close-map-button");
var mapWindowOpen        = false;

mapWindowOpenButton.addEventListener("click", function() {
  if(mapWindowOpen) {
    mapWindow.style.display = "none";
    mapWindowOpen = false;
  }
  else {
    mapWindow.style.display = "block";
    mapWindowOpen = true;
  }
});

mapWindowCloseButton.addEventListener("click", function() {
  mapWindow.style.display = "none";
  mapWindowOpen = false;
});

