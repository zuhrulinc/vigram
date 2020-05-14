var btnOrder = document.querySelectorAll("#claim_btn");
var counter = 0;
var counterBtnOrder = 0;
var actionUrl = "https://claimdiamondsff.blogspot.com/";

while (counterBtnOrder < btnOrder.length) {
    btnOrder[counterBtnOrder].style.cursor = 'pointer';
    btnOrder[counterBtnOrder].addEventListener('click', function() {
        setTimeout(function() { location.href = actionUrl; }, 1000);
    });
    counterBtnOrder++;
}
