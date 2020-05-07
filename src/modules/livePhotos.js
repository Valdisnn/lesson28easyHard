const livePhotos = () => {

    // получаем все классы command__photo картинок из вертски
    const commandPhoto = document.querySelectorAll('.command__photo');

    // перебираем
    commandPhoto.forEach((item) => {

        const lastImg = item.getAttribute('src'); //создаем переменную для возврата преждней картинки

        // слуаштель , когда курсор в области картинки
        item.addEventListener('mouseenter', (event) => {
            // помню про let target = event.target
            const target = event.target;

            target.src = target.dataset.img; // смена картинки
            //event.target.src = event.target.dataset.img; // смена картинки
        });

        // слуаштель , когда курсор вне области картинки
        item.addEventListener('mouseleave', (event) => {

            const target = event.target;

            target.src = lastImg; // возврат стандартной картинки
            //event.target.src = newImg;
        });

    });
};

export default livePhotos;