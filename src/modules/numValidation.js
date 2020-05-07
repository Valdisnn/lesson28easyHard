const numValidation = () => {

    // получаем нужные нам поля из верстки
    const calcItem = document.querySelectorAll('.calc-item'), // поля с вводом
        calcBlock = document.querySelector('.calc-block'); // весь блок

    // вешаем слушателя :D по вводу текста для всего блока
    calcBlock.addEventListener('input', () => {
        // перебираем значения в полях с вводом
        calcItem.forEach((item) => {
            // валидация через регулярное выражение replace
            /*
            1) пишем регулярное выражение  /\
            2) ограничиваем ввод ( только цифры ) путем перечисления допустмых значений от нуля до 9
            3) , '' замена на пустую строчку
            */
            item.value = item.value.replace(/\[0-9]/g, ''); // (/\D[.]/g, '')
        });
    });
};

export default numValidation;