const seats = document.querySelectorAll('.row-elem');
let numberOfSeat = 0;
const quantity = document.querySelector('.number-ticket');
const total = document.querySelector('.price');
const buyBtn = document.querySelector('.buy-ticket-btn');
buyBtn.addEventListener('click', () => {
    if(numberOfSeat === 0){
        alert("Please choose your seat");
    }else{
        window.location.href = "../index.html";
    }
});
seats.forEach((element) => {
    element.addEventListener('click', () => {
        if (element.classList.contains("selected")) {
            element.classList.remove("selected");
            numberOfSeat--;
        } else {
            element.classList.add("selected");
            numberOfSeat++;
        }
        update(); // Gọi hàm update sau khi thay đổi trạng thái ghế
    });
});

function update() {
    const pricePerSeat = 100000; // Giá mỗi ghế
    const totalPrice = pricePerSeat * numberOfSeat; // Tính tổng giá
    quantity.innerText = numberOfSeat; // Cập nhật số lượng vé
    total.innerText = totalPrice.toLocaleString(); // Cập nhật tổng giá và định dạng số
}
