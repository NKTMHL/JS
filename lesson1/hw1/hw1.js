// 1)+ Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// let prvt = 'hello';
// let school = 'owu';
// let wrldDmn = 'com';
// let dmn = 'ua';
// let nmbr1 = 1;
// let nmbr2 = 10;
// let nmbr3 = -999;
// let nmbr4 = 123;
// let nmbr5 = 3.14;
// let nmbr6 = 2.7;
// let nmbr7 = 16;
// let boolean1 = true;
// let boolean2 = false;
//
// console.log(prvt);
// console.log(school);
// console.log(wrldDmn);
// console.log(dmn);
// console.log(nmbr1);
// console.log(nmbr2);
// console.log(nmbr3);
// console.log(nmbr4);
// console.log(nmbr5);
// console.log(nmbr6);
// console.log(nmbr7);
// console.log(boolean1);
// console.log(boolean2);
//
// alert(prvt);
// alert(school);
// alert(wrldDmn);
// alert(dmn);
// alert(nmbr1);
// alert(nmbr2);
// alert(nmbr3);
// alert(nmbr4);
// alert(nmbr5);
// alert(nmbr6);
// alert(nmbr7);
// alert(boolean1);
// alert(boolean2);
//
// document.write(prvt + "<br/>");
// document.write(school + "<br/>");
// document.write(wrldDmn + "<br/>");
// document.write(dmn + "<br/>");
// document.write(nmbr1 + "<br/>");
// document.write(nmbr2 + "<br/>");
// document.write(nmbr3 + "<br/>");
// document.write(nmbr4 + "<br/>");
// document.write(nmbr5 + "<br/>");
// document.write(nmbr6 + "<br/>");
// document.write(nmbr7 + "<br/>");
// document.write(boolean1 + "<br/>");
// document.write(boolean2 + "<br/>");

// 2)+ Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// prvt = 'olleh';
// school = 'uwo';
// wrldDmn = 'moc';
// dmn = 'au';
// nmbr1 = 3;
// nmbr2 = 9;
// nmbr3 = 100500;
// nmbr4 = 321;
// nmbr5 = 14.3;
// nmbr6 = 7.2;
// nmbr7 = 1600;
// boolean1 = false;
// boolean2 = true;
//
// console.log(prvt);
// console.log(school);
// console.log(wrldDmn);
// console.log(dmn);
// console.log(nmbr1);
// console.log(nmbr2);
// console.log(nmbr3);
// console.log(nmbr4);
// console.log(nmbr5);
// console.log(nmbr6);
// console.log(nmbr7);
// console.log(boolean1);
// console.log(boolean2);
//
// alert(prvt);
// alert(school);
// alert(wrldDmn);
// alert(dmn);
// alert(nmbr1);
// alert(nmbr2);
// alert(nmbr3);
// alert(nmbr4);
// alert(nmbr5);
// alert(nmbr6);
// alert(nmbr7);
// alert(boolean1);
// alert(boolean2);
//
// document.write(prvt + "<br/>");
// document.write(school + "<br/>");
// document.write(wrldDmn + "<br/>");
// document.write(dmn + "<br/>");
// document.write(nmbr1 + "<br/>");
// document.write(nmbr2 + "<br/>");
// document.write(nmbr3 + "<br/>");
// document.write(nmbr4 + "<br/>");
// document.write(nmbr5 + "<br/>");
// document.write(nmbr6 + "<br/>");
// document.write(nmbr7 + "<br/>");
// document.write(boolean1 + "<br/>");
// document.write(boolean2 + "<br/>");

// 3)+ Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
// let firstName = 'Nikita';
// let middleName = 'Sergeevich';
// let lastName = 'Mikhailov';
// let person = (firstName + ' ' + middleName + ' ' + lastName);
// let person = (`${firstName} ${middleName} ${lastName}`)
// console.log(person);

// 4)+ За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// let firstName = prompt('Імя?');
// let middleName = prompt('По батькові?');
// let age = prompt('вік?');
// console.log(`Вітаю ${firstName} ${middleName}. Тобі ${age} років`);

// 5)+ За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100;
//     let b = '100';
//     let c = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// 6)+ Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//    В однакових виразах не використовувати однакові оператори!!!
// console.log(5 < 6);  //-> true
// console.log(5 > 6);  //-> false
// console.log(5 >= 6);  //-> false
// console.log(5 == 6);  //-> false
// console.log(10 === 10);  //-> true
// console.log(10 == 10);  //-> true
// console.log(10 > 10);  //-> false
// console.log(10 < 10);  //-> false
// console.log(10 != 10);  //-> false
// console.log(123 != '123');  //-> false
// console.log(123 == '123');  //-> true

// 7)+ Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
//     let a = 5;
// document.write(str + a + "<br/>"); //стринга в виде 20 и + 5 , присоеденило надпись к числу
// document.write(str - a + "<br/>"); //стринга за счет - переходит в числовой вид, поэтому вычитание работает как в математике
// document.write(str * "2" + "<br/>"); //умножило 20 и 2 так как одного типа, стринга и цифра стринга
// document.write(str / 2 + "<br/>"); //стринга за счет / переходит в числовой вид, поэтому происходит работа с цифрами
