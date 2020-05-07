const sendForm = () => {
    // сообщения для передачи
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо, мы с Вами свяжемся !';
    // очистка полей
    const clearForm = (idForm) => {
        // получаем элементы со страницы html
        const form = document.getElementById(idForm);
        // очиащем поля с инпутами
        [...form].forEach((item) => item.value = ''); // spread или ... (получение элементов)
    };
    // валидация форм
    const formValidation = (event) => {
        const target = event.target;
        // валидайия для телефона
        if (target.matches('.form-phone')) {
            target.value = target.value.replace(/[^+\d]/g, '');
        }
        // валидация для имени
        if (target.name === 'user_name') {
            target.value = target.value.replace(/[^а-яёА-ЯЁ]/g, '');
        }
        // валидация для текста сообщения
        if (target.matches('.mess')) {
            target.value = target.value.replace(/[^а-яёА-ЯЁ ,.]/g, '');
        }
    };
    // функция задействия с формами
    const processingForm = (idForm) => {
        // получаем элементы со страницы html
        const form = document.getElementById(idForm);
        // оповещение пользователя
        const statusMessage = document.createElement('div');
        // стили текста об операциях
        statusMessage.style.cssText = 'font-size: 2rem; color: white';
        // функция отображения информации о статусе отправки на сервер
        const userInformation = (elem) => {
            // создаем картинку в документе html
            const img = document.createElement('img');
            // объект со значениями о статусе на сервере
            const statusList = {
                // оповещение о загрузке
                load: {
                    message: loadMessage + '  ',
                    img: './emoji/loading.svg'
                },
                // оповещение об ошибке
                error: {
                    message: errorMessage + '  ',
                    img: './emoji/error.svg'
                },
                // оповещение о загрузке
                success: {
                    message: successMessage + '  ',
                    img: './emoji/success.svg'
                }
            };
            // получаем сообщения из объекта и выводим их , исходя от статуса загрузки
            statusMessage.textContent = statusList[elem].message;
            // получение картинки
            img.src = statusList[elem].img;
            // задаем размеры для картинки
            img.height = 25;
            img.height = 25;
            //добавляем картинку в конец сообщения-статуса
            statusMessage.appendChild(img);
        };

        // слушатель формы
        form.addEventListener('submit', (event) => {
            // отмена стандартной перезагрузки страницы браузером
            event.preventDefault(event);
            // добавление текста после действий с формой
            form.appendChild(statusMessage);
            // оповещение о загрузке
            userInformation('load');
            //получение данных
            postData(Object.fromEntries(new FormData(form)))
                .then((response) => {
                    // если все прошло успешно
                    if (response.status !== 200) {
                        throw new Error(`Status network ${request.status}`);
                    }
                    // выводим информацию в DOM и очищаем поля
                    userInformation('success');
                    clearForm(idForm);
                })
                .catch((error) => {
                    // выводим ошибку в DOM и в консоль
                    userInformation('error');
                    console.error(error);
                });
        });
        // слушатель для функции валидации при вводе
        form.addEventListener('input', formValidation);
    };
    // вызываем функцию с созданными формами
    processingForm('form1');
    processingForm('form2');
    processingForm('form3');

    // функция отправки на сервер
    const postData = (body) => fetch('./server.php', {
        // настройка соединения
        method: 'POST',
        // настройка заголовков 
        headers: {
            'Content-Type': 'application/json'
        },
        // отправка в формате JSON 
        body: JSON.stringify(body)
    });
};

export default sendForm;