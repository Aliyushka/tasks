let whoComes = prompt('Кто пришел?')
let pass = prompt('Пароль?')

if(whoComes === 'Админ'){
    if(pass === 'Черный Властелин'){
        alert('Добро пожаловать!')
    }else if(pass === null){
        alert('Вход отменен')
    }else{
        alert('Пароль неверен')
    }
}else if(whoComes === null){
    alert('Вход отменен')
}else {
    alert('Я вас не знаю')
}

