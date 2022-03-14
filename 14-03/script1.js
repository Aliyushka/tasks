let formOne = document.querySelector('#formOne');

formOne.onclick = (one) => {

    one.preventDefault();
    let surname = document.querySelector('#surname').value;
    let firstName = document.querySelector('#firstname').value;
    let givenName = document.querySelector('#givename').value;
    let dateBirth = document.querySelector('#dateBirth').value;
    let AN = document.querySelector('#AN').value;
    let Inn = document.querySelector('#Inn').value;
    let isSue = document.querySelector('#isSue').value;
    let number = document.querySelector('#number').value;
    let email = document.querySelector('#email').value;
    let bank = document.querySelector('#bank').value;
    let fact = document.querySelector('#fact').value;


    let object = {
        surname: surname,
        firstName: firstName,
        givenName: givenName,
        dateBirth: dateBirth,
        AN: AN,
        Inn: Inn,
        isSue: isSue,
        number: number,
        email: email,
        bank: bank,
        fact: fact
    }

    let SMS = document.querySelector('#SMS')

    const showNotification = (options) => {
        setTimeout(hideNotification,2000);
        SMS.classList.add('d-block');
        SMS.textContent = 'Введите обязательные поля: Фамилия, Имя, Серийный номер, ИНН, Дата получения ';
    }

    const hideNotification = () => {
        SMS.classList.remove('d-block');
    }

    if (surname === '' || firstName === '' || AN === '' || Inn === '' || isSue === ''){
        showNotification();
    } else {
        console.log(object)
        window.location.href = 'form2.html';
    }
}

























