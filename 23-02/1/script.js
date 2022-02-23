// 1)
let userSalaries = {
    Ella:  15000,
    Sophia: 20000,
    Ellie: 25000
}
alert(userSalaries.Ella);
alert(userSalaries.Sophia);



// 2)
let one = {
    'a': 5,
    'b': 6,
    'c': 10
}
console.log(one.a + one.b + one.c)


// 3)
let data = true;
let number = (data === true) ? 3 : 5;
console.log(number);





/*
Используя конструкцию if..else, напишите код, который будет спрашивать: «Кто такой В.В.ПУТИН?».

Если посетитель вводит «Президент», то выводить «Верно!», если что-то другое – выводить «Не знаете?».
*/

putin = prompt ('Кто такой В. В. Путин?', 'Президент')

if(putin === 'Президент'){
    alert('Верно!');
}else{
    alert('Не знаете?');





