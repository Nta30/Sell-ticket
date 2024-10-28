const venueElements = document.querySelectorAll('.js-select-elem');

venueElements.forEach((element) => {
    element.addEventListener('click', () => {
        venueElements.forEach((el) => el.classList.remove('selected'));

        element.classList.add('selected');
    })
});