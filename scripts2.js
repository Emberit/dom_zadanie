/* 1. Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер группы студента и
выводящую введённые данные в следующем виде:

*****************************
* Домашняя работа: «Функции» *
* Выполнил: студент гр. W4017 *
* Иванов Иван Иванович *
*****************************

Размер рамки должен определятся автоматически по самой длинной строке. Рамку
вывести в консоль. */

console.log('Задание 1');

function karta() {
    let name = prompt('Ваше ФИО?', 'Иванов Иван Иванович'),
    namberG = prompt('Укажите ваш номер группы', 'W4017'),
    star = '*';

    let lineArr = ['Домашняя работа: Функции'];
    if (namberG) lineArr.push('Выполнил: студент гр. ' + namberG);
    if (name) lineArr.push(name);
    

    let maxLine = 0;
    lineArr.forEach(function(line,index) {
        if (line.length > maxLine) maxLine = line.length;
        console.log(line);
    });
    
    maxLine += 4;
    lineArr.unshift('*'.repeat(maxLine));
    lineArr.push('*'.repeat(maxLine));

    lineArr.forEach(function(line,index) {
        if (index != 0 && index != lineArr.length-1) {
            lineArr[index] = '* ' + lineArr[index] + (' '.repeat(maxLine-line.length-3)
            ) + '*'
        } 
    });

    /* console.log(lineArr); */

    lineArr.forEach(function(line,index) {
        console.log(line);}
        );    
}


karta();