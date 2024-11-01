// trailer
const watchTrailer = document.querySelector('.movie-btn-trailer'); //lay tat ca cac phan tu co class
const model = document.querySelector('.model');
const modelclose = document.querySelector('.close-model');
const trailerVideo = document.querySelector('.movie-trailer');
// ham hien thi model trailer (them class open model )
function showTrailer(){
    model.classList.add('open');   
    trailerVideo.play();
}
// ham an model trailer (go class open model )
function closeTrailer(){
    model.classList.remove('open');
    trailerVideo.currentTime = 0;
    trailerVideo.pause();
}
// lap qua tung the va nghe hanh vi click
watchTrailer.addEventListener('click',showTrailer);
// nghe hanh vi click vao btn close
modelclose.addEventListener('click',closeTrailer);

