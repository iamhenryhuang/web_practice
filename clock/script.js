const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
    var currentDate = new Date();
    var secondsRatio = currentDate.getSeconds() / 60;
    var minuteRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    var hoursRatio = (minuteRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minuteRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setInterval(setClock, 1000);

setClock();