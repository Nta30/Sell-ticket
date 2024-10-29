const buyBtns = document.querySelectorAll('.js-buy-ticket');
const closeBuyBtn = document.querySelector('.close-buy-ticket');
const BuyBtnContainer = document.querySelector('.buy-ticket-wrapper');
const BuyBtnContent = document.querySelector('.buy-ticket-content');

for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click', function (event) {
        event.preventDefault();
        BuyBtnContainer.classList.add("active");
    });
}

closeBuyBtn.addEventListener('click', function () {
    BuyBtnContainer.classList.remove("active");
});
BuyBtnContainer.addEventListener('click', function () {
    BuyBtnContainer.classList.remove("active");
});
BuyBtnContent.addEventListener('click', function (event) {
    event.stopPropagation();
});