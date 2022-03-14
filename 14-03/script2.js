let formTwO = document.querySelector('#button2');
formTwO.onclick = (two) => {

    two.preventDefault();
    let org = document.querySelector('#org').value;
    let position = document.querySelector('#position').value;
    let salary = document.querySelector('#salary').value;
    let lastSalary = document.querySelector('#lastSalary').value;
    let phone = document.querySelector('#phone').value;
    let costItem = document.querySelector('#costItem').value;
    let item = document.querySelector('#product-number').value;
    let loan = document.querySelector('#loan').value;
    let loan1 = document.querySelector('#loan1').value;
    let loan2 = document.querySelector('#cloan2').value;
    let forItem = document.querySelector('#adressItem').value;

    let object = {
        org: org,
        position: position,
        salary: salary,
        lastSalary: lastSalary,
        phone: phone,
        costItem: costItem,
        item: item,
        loan: loan,
        loan1: loan1,
        loan2: loan2,
        forItem: forItem
    }

    console.log(object)
    let SMS2 = document.querySelector('#SMS2');

    const showNotification = () => {
        setTimeout(hideNotification,2000);
        SMS2.classList.add('d-block');
        SMS2.textContent = 'Пожалуйста, обязательно введите данные:';
    }

    const hideNotification = () => {
        SMS2.classList.remove('d-block');
    }

    if (org === '' || position  === '' || salary  === '' || lastSalary === ''){
        showNotification()
    } else {
        console.log(object)
    }
}