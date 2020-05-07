const countTimer = (deadline) => {

    //получение элементов из DOM
    let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

    const getTimeRemaining = () => {

        let dateStop = new Date(deadline).getTime(), // получаем конечную дату
            dateNow = new Date().getTime(), // текущая дата
            timeRemaining = (dateStop - dateNow) / 1000, // полученная разница
            seconds = Math.floor(timeRemaining % 60), // подсчет секунд
            minutes = Math.floor((timeRemaining / 60) % 60), // подсчет минут
            hours = Math.floor(timeRemaining / 60 / 60); // подсчет часов

        // возврат значений в виде объекта
        return {
            timeRemaining,
            hours,
            minutes,
            seconds
        };
    }

    // функция обновления значения на странице
    const updateClock = () => {

        let timer = getTimeRemaining();

        // условие для отображения часов
        if (timer.hours < 10) {
            timerHours.textContent = "0" + timer.hours;
        } else {
            timerHours.textContent = timer.hours;
        }
        // условие для отображения минут
        if (timer.minutes < 10) {
            timerMinutes.textContent = "0" + timer.minutes;
        } else {
            timerMinutes.textContent = timer.minutes;
        }
        // условие для отображения секунд
        if (timer.seconds < 10) {
            timerSeconds.textContent = "0" + timer.seconds;
        } else {
            timerSeconds.textContent = timer.seconds;
        }

        let newInterval = setInterval(updateClock, 1000); // используем метод setInterval()

        // условие , если время больше нуля , продолжать отсчет ( менять значение каждую секунду)
        if (timer.timeRemaining > 0) {
            setTimeout(updateClock, 1000);
        } // если значение обнулилось , то ...
        else {
            clearInterval(newInterval); // ... останавливать отсчет
            timerHours.textContent = '00'; // задавать значение равное нулю
            timerMinutes.textContent = '00'; // задавать значение равное нулю
            timerSeconds.textContent = '00'; // задавать значение равное нулю
        }

        //console.log(timer);
    }

    // вызов функции обновления времени на странице
    updateClock();

};

export default countTimer;