const togglePopUp = () => {

    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        //popupClose = document.querySelector('.popup-close'),
        popupContent = document.querySelector('.popup-content'); // получаем элемент модального окна из DOM для взаимодействия с ним

    // создаем перменные для дальнейшего взаимодействия с анимацией
    let startPoint = -500;
    let setAnimation;

    const popupBegin = () => {

        let width = document.documentElement.clientWidth; // получение размеров видимой части окна
        setAnimation = requestAnimationFrame(popupBegin); // requestAnimationFrame указывает о желание запустить анимацию / перерисовку
        startPoint += 25; // скорость анимации
        popupContent.style.top = startPoint + 'px';
        // условие для своевременной отсановки анимации
        if (startPoint > (width / 10)) {
            cancelAnimationFrame(setAnimation); // cancelAnimationFrame() останавливает анимацию, запланированную requestAnimationFrame()
        }
    };

    popupBtn.forEach((elem) => {

        elem.addEventListener('click', () => {

            let width = document.documentElement.clientWidth; // получение размеров видимой части окна
            // услвоие , для того, чтобы модальное окно открывалось без анимации на смарфтонах
            if (width > 768) {
                popup.style.display = 'block';
                popupBegin(); // запуск функции проигрывания анимации
            } else {
                popup.style.display = 'block';
            }
        });
    });

    popup.addEventListener('click', (event) => {

        let target = event.target;

        if (target.classList.contains('popup-close')) {

            startPoint = -500; // возврщаем модальное окно на место начала анимации
            popup.style.display = 'none';
        } else {

            target = target.closest('.popup-content');

            if (!target) {
                startPoint = -500; // возврщаем модальное окно на место начала анимации
                popup.style.display = 'none';
            }
        }
    });

};

export default togglePopUp;