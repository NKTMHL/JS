// 1)+ - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
// let usernmbr1 = +prompt('choose your first number');
// let usernmbr2 = +prompt('choose your second number');
// console.log(usernmbr1);
// console.log(usernmbr2);
// if (usernmbr1 > usernmbr2) {
//     console.log(`your ${usernmbr1} is greater than the ${usernmbr2}`)
// } else if (usernmbr2 > usernmbr1) {
//     console.log(`your ${usernmbr2} is greater than the ${usernmbr1}`);
// } else {
//     console.log(`both numbers are the same`);
// }

// 2)+ - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
// let apartment = +prompt('В какую квартиру желаете попасть?');
// console.log(apartment);
// if (apartment >= 1 && apartment <= 20) {
//     console.log('Вам в 1 подъезд');
// } else if (apartment > 20 && apartment <= 48) {
//     console.log('Вам в 2 подъезд');
// } else if (apartment > 48 && apartment <= 90) {
//     console.log('Вам в 3 подъезд');
// } else {
//     console.log('Такой квартиры нет в этом доме.')
// }

// 3)+ - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
// let number = +prompt('Ввидите число:');
// let asd = number === 10 ? 'ВІРНО' : 'НЕВІРНО';
// console.log(number);
// console.log(asd);

// 4)+ - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
//     якщо в змінну записали щось інше, спрацьовує else
// // let x = 1;
// // let x = 'asdasd';
// // let x = true;
// let x = [1];
// if (typeof x === 'number') {
//     console.log('1');
// } else if (typeof x === 'string') {
//     console.log('2');
// } else if (typeof x === 'boolean') {
//     console.log('3');
// } else if (typeof x === 'object') {
//     console.log('4');
// } else {
//     console.log('шо ты написал?');
// }

// 5)+ - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
// let temp = +prompt('Какая сегодня температура?');
// if (temp >= 10 && temp <= 22) {
//     console.log('ми йдемо ВЧИТИСЯ');
// } else {
//     console.log('Сидимо вдома. Та вчимося ОНЛАЙН.');
// }

// 6)+ - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
// let numb = +prompt('Введiть число от 1 до 5:');
// switch (numb) {
//     case 1:
//         console.log('Ви виграли Авто!');
//         break;
//     case 2:
//         console.log('Ви виграли Мото!');
//         break;
//     case 3:
//         console.log('Ви виграли Телефон!');
//         break;
//     case 4:
//         console.log('Ви виграли Квартиру!');
//         break;
//     case 5:
//         console.log('Ви виграли Приз!');
//         break;
//     default:
//         console.log('число не вірне ...')
// }