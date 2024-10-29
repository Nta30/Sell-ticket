//Header
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');

    //Kiểm tra vị trí của header
    if(window.scrollY > 100){
        header.classList.add('scrolled'); //Thêm class scrolled khi cuộn
    }else{
        header.classList.remove('scrolled'); // Xóa màu header khi ở đầu trang
    }
});
// trailer
const watchTrailer = document.querySelectorAll('.movie-btn-trailer') //lay tat ca cac phan tu co class
const model = document.querySelector('.model')
const modelclose = document.querySelector('.close-model')
const trailerVideo = document.querySelector('.trailerVideo');
// ham hien thi model trailer (them class open model )
function showTrailer(){
    model.classList.add('open')   
    trailerVideo.src = "https://www.youtube.com/embed/MLpWrANjFbI?autoplay=1"; // Thay đổi src với autoplay 
}
// ham an model trailer (go class open model )
function closeTrailer(){
    model.classList.remove('open')  
    trailerVideo.src = "";  
}
// lap qua tung the va nghe hanh vi click
for (const Trailer of watchTrailer){
    Trailer.addEventListener('click',showTrailer)// biet duoc minh dang click
}
// nghe hanh vi click vao btn close
modelclose.addEventListener('click',closeTrailer)



