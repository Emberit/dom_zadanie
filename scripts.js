/* задание 1. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа передаются параметром. */


console.log('Задание 1');

function task1(a, b, c) {
    return (a - b) / c;
}

var d = task1(8, 4, 2);
console.log(d);


/* задание 2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается параметром. */

console.log('Задание 2');

function task2(a) {
    return ('квадрат числа - ' + a * a + '   ' + 'куб числа - ' + a * a * a);
}

var itog = task2(7);
console.log(itog);


/* Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b. */

console.log('Задание 3');

function task3Min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

var itog = task3Min(15, 24);
console.log(itog);

function task3Max(a, b) {
    if (a < b) {
        return b;
    } else {
        return a;
    }
}

var itog = task3Max(15, 24);
console.log(itog);

/* Напишите две функции: первая ф-ция должна возвращать массив с числовыми значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая
– выводить полученный массив. */


console.log('Задание 4');
var mas = [];
function task4array(length) {
    length = length || 5;

    for(let i = 0; i < length; i++) {
        mas.push(i);
    }

    return mas;
}

task4array(prompt('Введите число для создания массива задания 4'));

function task4ArrayСonclusion() {
    mas2 = mas;
    return mas2;
    
}

task4ArrayСonclusion();

console.log(mas2);


/* Сделайте функцию isEven() (even - это четный), которая параметром принимает целое
число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true,
если нечетное - false. */

console.log('Задание 5');
function isEven(a) {
    if (a % 2 == 0) {
        console.log('true');
        return true;
    } else {
        console.log('false');
        return false;
    }

}

isEven(16);

/* Напишите ф-цию, в которую передается массив с целыми числами. Верните новый
массив, где останутся лежать только четные из этих чисел. Для этого используйте
вспомогательную функцию isEven из предыдущей задачи. */

console.log('Задание 6');

function task6array(arr6) {

    let narr2 = [];

    for(let i = 0; i < mas.length; i++) {
        if (isEven(mas[i]) == true) {
            narr2.push(i);
        } else {
            continue;
        }
        
    }

    return narr2;
}

console.log(task6array());


/* 7 Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные циклы):
1
22
333
4444
55555
666666
7777777
88888888
999999999
Кол-во рядов должно вводиться параметром. Если пользователь ввел доп. параметр,
непредусмотренный ф-цией по умолчанию - один любой символ, кроме пробела, то
пирамида должна быть нарисована этим символом, например:
*
**
***
****
*****
******
*******
********
********* */

console.log('Задание 7');
function piram(height, ne) {
    
    ne = 1;
    height = +prompt('Введите высоту пирамидки');

    for (let i = 1; i <= height; i++) {
        for (let j = 1; j <= i; j++) {
            document.write(ne += '');
        }
        ne++;
        document.write('<br>');
        
    }
    
}

piram(4);


/* 8. Напишите ф-цию, которая возвращает массив заполненный числами Фибоначи от 0 до
1000. */

console.log('Задание 8');
var mas8 = [];
function task8array(length) {
    length = length || 5;

    for(let i = 0; i < length; i++) {
        mas8.push(i);
    }

    return mas8;
}

console.log(task8array(10))


/* 9. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его
цифры. И так, пока сумма не станет однозначным числом (9 и менее). Исп. рекурсию. */

console.log('Задание 9');
function task9(num9) {
    num9 = num9 || 1316;
    let nString = String(num9);
    
    summNumbers += +nString[i];
     
    i++;
    if (i < nString.length) task9();
    return summNumbers;   
}
let summNumbers = 0;
var i = 0,
    num9;

console.log(task9());


function task92() {
    itogo = summNumbers;
    
    if (itogo <= 9) {
       return itogo; 
    } else {
        num9 = itogo;
        return 'Сумма цифр больше 9-ти'; //получилось только вывести сообщение
        // как отправить из этой функции в другую, чтобы заново посчиталось?
        // и чтобы так шло по кругу?
    
    }
      
}

var itogo = 0;

console.log(task92());

/* 10. Дан массив с числами (передается параметром). Выведите последовательно его
элементы, используя рекурсию и не используя цикл. */

console.log('Задание 10');
function task10(array) {
    console.log(array[i]);
    i++;

    if (i < array.length) task10(array);
}

var i = 0;
task10([11, 24, -10.5, 14, -89, 96, 16.8]);