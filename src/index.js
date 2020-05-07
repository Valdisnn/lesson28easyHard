  // по классике , строгий режим
  'use strict';

  import "@babel/polyfill";
  import 'nodelist-foreach-polyfill';
  import 'formdata-polyfill';
  import 'es6-promise';
  import 'fetch-polyfill';
  import elementClosest from 'element-closest';
  elementClosest(window);

  import countTimer from './modules/countTimer';
  import toggleMenu from './modules/toggleMenu';
  import togglePopUp from './modules/togglePopUp';
  import tabs from './modules/tabs';
  import slider from './modules/slider';
  import livePhotos from './modules/livePhotos';
  import numValidation from './modules/numValidation';
  import calc from './modules/calc';
  import sendForm from './modules/sendForm';

  // таймер
  // до какой даты идет отсчет
  countTimer('12 may 2020');

  // меню
  toggleMenu();

  // popup
  togglePopUp();

  // табы
  tabs();

  // слайдер
  slider();

  // функция смены фото по заданию
  livePhotos(); // вызываем фунцию смены фото

  // функция в кальуляторе , для ввода допустимых значений
  numValidation(); // вызов функции в кальуляторе , для ввода допустимых значений

  // калькулятор
  calc(100);

  // send-ajax-form
  // вызов отправки формы
  sendForm();