// Показать/Скрыть форму
var buttonFindHotel = document.querySelector(".find-hotel__button");
var hotelForm       = document.querySelector(".find-hotel__form");

buttonFindHotel.addEventListener("click", function() {
  if(hotelForm.style.display == "none") {
    hotelForm.style.display = "block";
  }
  else {
    hotelForm.style.display = "none";
  }
});


/// Управление содержимым формы
// Поле с количеством взрослых
var inputNumberAdult    = document.querySelector("#inputNumberAdult");
var buttonMinusForAdult = document.querySelector("#buttonMinusForAdult");
var buttonPlusForAdult  = document.querySelector("#buttonPlusForAdult");
buttonMinusForAdult.addEventListener("click", function() {
  inputNumberAdult.value = Math.max(0, inputNumberAdult.value - 1);
});
buttonPlusForAdult.addEventListener("click", function() {
  inputNumberAdult.value++;
});

// Поле с количеством детей
var inputNumberChildren    = document.querySelector("#inputNumberChildren");
var buttonMinusForChildren = document.querySelector("#buttonMinusForChildren");
var buttonPlusForChildren  = document.querySelector("#buttonPlusForChildren");
buttonMinusForChildren.addEventListener("click", function() {
  inputNumberChildren.value = Math.max(0, inputNumberChildren.value - 1);
});
buttonPlusForChildren.addEventListener("click", function() {
  inputNumberChildren.value++;
});