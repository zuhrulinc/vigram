const siema = new Siema();
var btnNext = document.querySelectorAll("#next");
var btnPrev = document.querySelectorAll("#prev");
var btnOrder = document.querySelectorAll("#claim_btn");
var counter = 0;
var counterBtnOrder = 0;
var actionUrl = "https://claimdiamondsff.blogspot.com/";

while (counterBtnOrder < btnOrder.length) {
    btnOrder[counterBtnOrder].style.cursor = 'pointer';
    btnOrder[counterBtnOrder].addEventListener('click', function() {
        setTimeout(function() { location.href = action; }, 1000);
    });
    counterBtnOrder++;
}


while (counter < btnNext.length) {
    btnNext[counter].addEventListener('click', () => siema.next());
    btnPrev[counter].addEventListener('click', () => siema.prev());
    counter++;
}



function gTag() {

    window.dataLayer = window.dataLayer || [];

    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'AW-688116829');

}


function gtag_report_conversion(url) {
    var callback = function() {
        if (typeof(url) != 'undefined') {
            window.location = url;
        }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-688116829/wWOiCIOO_MwBEN2oj8gC',
        'transaction_id': '',
        'event_callback': callback
    });
    return false;
}

gTag();
