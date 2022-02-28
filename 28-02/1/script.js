/*1) Напишите функцию hello(), которая при вызове будет возвращать строку
   «Привет, JavaScript!»*/
function hello() {
    return 'Привет, JavaScript!';
}
console.log(hello())


/*2) Нужно создать функцию, которая будет выводить куб числа на страничку.
    Число должно передаваться параметром.*/
function cube(x = 3) {
    return x ** 3;
}
console.log(cube(8));


/*3) Напишите функцию getName(), которая при вызове будет принимать переменную
name (например, «Василий») и выводить строку (в нашем случае «Привет, Василий»).
В случае отсутствующего параметра выводить «Привет, гость»*/

function getName () {
    let name = prompt ('Имя')
    if( name === '' ){
        alert ('Привет, гость');
    }else {
        alert ('Привет, ' + name );
    }
}
getName();

/*
4) На старте вы получаете массив. Необходимо написать функцию, которая будет
возвращать массив удвоенных значений исходного массива.
    Пример кода:
    example([1, 2, 3]) => [2, 4, 6]
example([4, 1, 1, 1, 4]) => [8, 2, 2, 2, 8]
example([2, 2, 2, 2, 2, 2]) => [4, 4, 4, 4, 4, 4]*/

let nums = [];
function example(numbers) {
    for (let i = 0; i < numbers.length; i++){
        let sum = numbers[i] + numbers[i];
        nums.push(sum);
    }
}

example([1, 2, 3]);
example([4,1,1,1,4]);
example([2,2,2,2,2,2]);


console.log(nums);

