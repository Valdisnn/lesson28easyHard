const toggleMenu = () => {

    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu');
    //closeBtn = document.querySelector('.close-btn'),
    //menuItems = menu.querySelectorAll('ul>li');

    const handlerMenu = () => { // функция заупска меню

        menu.classList.toggle('active-menu'); //если класса active-menu нет, добавляет его, если есть – удаляет.
    };

    // btnMenu.addEventListener('click', handlerMenu);
    // closeBtn.addEventListener('click', handlerMenu);
    // menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));

    btnMenu.addEventListener('click', handlerMenu); // слушатель на запуск меню

    menu.addEventListener('click', (event) => { // слушатель на взаимодействие с меню
        if (!event.target.matches('a')) { // выборка по селектору
            return;
        }

        handlerMenu(); // вызов функции запуска меню
    });

    document.body.addEventListener('click', (event) => { // слушатель на взаимодействие с документом

        let target = event.target;
        target = target.closest('menu'); // возвращает ближайший родительский элемент

        if (!target) { // условие на событие ВНЕ зоны меню
            menu.classList.remove('active-menu'); // закртыие окна , исходя из условия выше
        }

    }, true); // возращаем true для слушателя document.body

};

export default toggleMenu;