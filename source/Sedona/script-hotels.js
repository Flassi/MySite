const MIN_HOTEL_PRICE = 0;
const MAX_HOTEL_PRICE = 4000;

/// Создание слайдера
var filterDoubleSlider = document.querySelector("#filterDoubleSlider");
noUiSlider.create(filterDoubleSlider, {
    start: [0, 3000],
    connect: true,
    step: 50,
    range: {
        'min': MIN_HOTEL_PRICE,
        'max': MAX_HOTEL_PRICE
    }
});

/// Связь между числами стоимости и ползунком.
var toggleMinValue       = document.querySelector(".noUi-handle.noUi-handle-lower");
var toggleMaxValue       = document.querySelector(".noUi-handle.noUi-handle-upper");
var bar                  = document.querySelector(".noUi-connect");
var costDayMin           = document.querySelector("#min-price");
var costDayMax           = document.querySelector("#max-price");

/// Изменение цены через слайдер.
toggleMinValue.addEventListener("mousedown", function() {
  setInterval(function() {
    costDayMin.value = toggleMinValue.getAttribute("aria-valuenow");
  }, 25);
});
toggleMinValue.addEventListener("focus", function() {
  setInterval(function() {
    costDayMin.value = toggleMinValue.getAttribute("aria-valuenow");
  }, 25);
});
toggleMaxValue.addEventListener("mousedown", function() {
  setInterval(function() {
    costDayMax.value = toggleMaxValue.getAttribute("aria-valuenow");
  }, 25);
});
toggleMaxValue.addEventListener("focus", function() {
  setInterval(function() {
    costDayMax.value = toggleMaxValue.getAttribute("aria-valuenow");
  }, 25);
});