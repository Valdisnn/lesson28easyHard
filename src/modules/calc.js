const calc = (price = 100) => {

    const calcBlock = document.querySelector('.calc-block'), // родитель
        calcType = document.querySelector('.calc-type'), // тип помещения
        calcSquare = document.querySelector('.calc-square'), // площадь помещения
        calcDay = document.querySelector('.calc-day'), // срок исполнения
        calcCount = document.querySelector('.calc-count'), // количество помещений
        totalValue = document.getElementById('total'); // итоговое значение

    // функция счета итоговой суммы
    const countSum = () => {
        // задаем внутренние переменные , только для этого блока (функции)
        let total = 0,
            countValue = 1,
            dayValue = 1;
        // вспоомгаетльные переменные для работы
        const typeValue = calcType.options[calcType.selectedIndex].value, // тип объекта , его значение из верстки ( 1 , 1,4 , 2)
            squareValue = +calcSquare.value; // площадь

        // количесвто помещений
        if (calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10; // плучаем долю и прибавляем
        }

        // срок исполнения
        if (calcDay.value && calcDay.value < 5) { // если срок меньше 5 дней , умножаем значение на 2
            dayValue *= 2
        } else if (calcDay.value && calcDay.value < 10) { // если срок меньше 10 дней , умножаем значение на 1.5
            dayValue *= 1.5;
        } // в других случаях по стандартному значению (1)

        // пока не будет данных в полях описанных выше , выдаем 0
        if (typeValue && squareValue) {
            // если в полях что-то есть , считаем итог
            total = price * typeValue * squareValue * countValue * dayValue;
        }

        // вывод на страницу
        totalValue.textContent = total;
    };

    // ловим событие , если что-то меняется
    calcBlock.addEventListener('change', () => {

        const target = event.target;
        // если изменения проиошли хоть где-то , вызываем функцию
        if (target.matches('select') || target.matches('input')) {
            // вызов функции счета итоговой суммы
            countSum();
        }
    });
};

export default calc;