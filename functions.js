

var r = document.querySelector('#red'),
    g = document.querySelector('#green'),
    b = document.querySelector('#blue'),

    red_out = document.querySelector('#red_out'),
    green_out = document.querySelector('#green_out'),
    blue_out = document.querySelector('#blue_out');

function displayColor() {
        var display = document.getElementById("display");
        display.style.backgroundColor = "rgb(" + red_out.value + "," + green_out.value + "," + blue_out.value + ")";
}

function changeBackground() {
    document.body.style.backgroundColor = "rgb(" + red_out.value + "," + green_out.value + "," + blue_out.value + ")";
}

function resetApp() {
    red.value = 255, red_out.value = 255,
    green.value = 255, green_out.value = 255,
    blue.value = 255, blue_out.value = 255;
    display.style.backgroundColor = "rgb(" + red_out.value + "," + green_out.value + "," + blue_out.value + ")";
    document.body.style.backgroundColor = "rgb(" + red_out.value + "," + green_out.value + "," + blue_out.value + ")";
}

function updateSlider() {
    red.addEventListener('input', function () {
        displayColor()
        red_out.value = red.value
    })
    red.addEventListener('change', function () {
        displayColor()
        red_out.value = red.value
    })
    green.addEventListener('input', function() {
        displayColor()
        green_out.value = green.value        
    })
    green.addEventListener('change', function () {
        displayColor()
        green_out.value = green.value
    })
    blue.addEventListener('input', function() {
        displayColor()
        blue_out.value = blue.value        
    })
        blue.addEventListener('input', function() {
        displayColor()
        blue_out.value = blue.value        
    })
}