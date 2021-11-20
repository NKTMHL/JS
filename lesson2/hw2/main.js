// 1)+ - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = Math.round(Math.random()* 59);
// console.log(time);
// if (time <= 15) {
//     console.log('first quarter of an hour');
// } else if (time > 15 && time <= 30) {
//     console.log('second quarter of an hour')
// } else if (time > 30 && time <= 45) {
//     console.log('third quarter of an hour')
// } else {
//     console.log('four quarter of an hour')
// }

// 2)+ - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = Math.round(Math.random() * 31);
// console.log(day);
// if (day <= 10) {
//     console.log('first decade');
// } else if (day > 10 && day <= 20) {
//     console.log('second decade');
// } else {
//     console.log('third decade');
// }

// 3)+ - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
// let test = confirm('true or false?');
// let asd = test === true ? 'Вірно' : 'Неправильно';
// console.log(asd);
//
// // console.log(test);
// // if (test === true) {
// //     console.log('Вірно');
// // } else {
// //     console.log('Неправильно');
// // }

// 4)+ - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let a = +prompt('choose your number: for example 1, 0, -3');
// let asd = a === 0 ? 'Невірно' : 'Вірно';
// console.log(asd);
// // let a = +prompt('choose your number: for example 1, 0, -3');
// // switch (a) {
// //     case 0:
// //         console.log('Невірно');
// //         break;
// //     default:
// //         console.log('Вірно');
// // }

// 5)+ - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
// let i = +prompt('Введiть порядковий номер дня тижня');
// switch (i) {
//     case 1:
//         console.log('Друже тобі сьогодні на 1,2,3 пари');
//         break;
//     case 2:
//         console.log('Друже тобі сьогодні на 2,3,4 пари');
//         break;
//     case 3:
//         console.log('Друже тобі сьогодні на 3,4 пару');
//         break;
//     case 4:
//         console.log('Друже тобі сьогодні на 4,5 пару');
//         break;
//     case 5:
//         console.log('Друже тобі сьогодні на 1,3,5 пари');
//         break;
//     case 6:
//         console.log('Вихідний!!! Вітаю, відкрий собі пивка.');
//         break;
//     case 7:
//         console.log('Друже ти сьогодні теж вітдихаєшь!!!');
//         break;
//     default:
//         console.log('Прогулять надумав? Дзвонимо батькам')
// }

// 6)+ - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
// let year = +prompt('Який зараз рiк?');
// console.log(year);
// if (year % 4 === 0) {
//     console.log('Високосний рік');
// } else {
//     console.log('Не високосний рік');
// }

// 7)+ - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
// let name = prompt('Яка «офіційна» назва JavaScript?');
// console.log(name);
// if (name === 'ECMAScript') {
//     console.log('Правильно!');
// } else {
//     console.log('Не знаєте? ECMAScript!');
// }