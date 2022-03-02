/*1) Дан массив с элементами [2, 3, 4, 5, 6, 7].
    С помощью цикла for найдите произведение элементов этого массива.
    Общий результат сохранить в объекте с соответствующим свойством.
    Например: 2 * 3 = 6 -> 6 * 4 и.т.д.*/
let array = [2, 3, 4, 5, 6, 7];
let sum = 1;
for (let i = 0; i < array.length; i++){
    sum *= array[i];
}
console.log(sum);

let obj = {
    result: sum
};
console.log(obj);
console.log(sum);


/*2) Напишите функцию, которая заполняет новый массив предоставленным значением
и затем ее возвращает. Функция должна первым параметром принимать
элемент (значение для массива), вторым параметром размер массива.
    Например: myFunc('a', 3)   // ['a', 'a', 'a']*/

function myFunc(arraySize, value) {
    const result = [];
    for (let i = 0; i < arraySize; i++) {
        result.push(value);
    }
    return result;
}
console.log(myFunc(3, "a"));



/*
3) Напишите функцию, которая разворачивает массив в обратном порядке
и затем ее возвращает.  Функция наша  принимает массив любых элементов.
    Например:
const data = [1, 2, 3];
myFunc(data);  // [3, 2, 1];*/


let data = [1,2,3];
function myFunc1(data){
    let res = [];
    data.forEach(element => {
        res.unshift(element)
    });
    return res;
}
console.log(myFunc1(data));
