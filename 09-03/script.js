let openBtn = document.querySelector('#open-modal');
let modal = document.querySelector('#modal');

const showNotification = (options) => {
    modal.textContent = options.html;
    modal.classList.add(options.className);
    modal.classList.add('d-block');
    setTimeout(hideNotification, 1500);

}

const hideNotification = () =>{
    modal.classList.remove('block');
}


/************* Number # 1 *************/
/*const changeStyle = () => {
    modal.style.color = '#084298';
    modal.style.backgroundColor = '#cfe2ff';
    modal.style.borderColor = '#b6d4fe';
    modal.style.height = '30px';
    modal.style.width = '1500px'
    modal.style.fontSize = '20px'
}
openBtn.addEventListener('click', ()=>{
    changeStyle();
    showNotification({html:'A simple primary alert—check it out!', className: 'welcome'})
});*/


/************* Number # 2 *************/
/*
const changeStyle = () => {
    modal.style.color = '#41464b;';
    modal.style.backgroundColor = '#e2e3e5';
    modal.style.borderColor = '#d3d6d8';
    modal.style.height = '30px';
    modal.style.width = '1500px'
    modal.style.fontSize = '20px'
}
openBtn.addEventListener('click', ()=>{
    changeStyle();
    showNotification({html:'A simple primary alert—check it out!', className: 'welcome'})
});
*/

/************* Number # 3 *************/
/*const changeStyle = () => {
    modal.style.color = '#0f5132';
    modal.style.backgroundColor = '#d1e7dd';
    modal.style.borderColor = '#badbcc';
    modal.style.height = '30px';
    modal.style.width = '1500px'
    modal.style.fontSize = '20px'
}
openBtn.addEventListener('click', ()=>{
    changeStyle();
    showNotification({html:'A simple primary alert—check it out!', className: 'welcome'})
});*/

/************* Number # 4 *************/

/*const changeStyle = () => {
    modal.style.color = '#842029';
    modal.style.backgroundColor = '#f8d7da';
    modal.style.borderColor = '#f5c2c7';
    modal.style.height = '30px';
    modal.style.width = '1500px'
    modal.style.fontSize = '20px'
}
openBtn.addEventListener('click', ()=>{
    changeStyle();
    showNotification({html:'A simple primary alert—check it out!', className: 'welcome'})
});*/

/************* Number # 5 *************/
/*
const changeStyle = () => {
    modal.style.color = '#664d03';
    modal.style.backgroundColor = '#fff3cd';
    modal.style.borderColor = '#ffecb5';
    modal.style.height = '30px';
    modal.style.width = '1500px'
    modal.style.fontSize = '20px'
}
openBtn.addEventListener('click', ()=>{
    changeStyle();
    showNotification({html:'A simple primary alert—check it out!', className: 'welcome'})
});
*/

/************* Number # 6 *************/
/*const changeStyle = () => {
    modal.style.color = '#055160';
    modal.style.backgroundColor = '#cff4fc';
    modal.style.borderColor = '#b6effb';
    modal.style.height = '30px';
    modal.style.width = '1500px'
    modal.style.fontSize = '20px'
}
openBtn.addEventListener('click', ()=>{
    changeStyle();
    showNotification({html:'A simple primary alert—check it out!', className: 'welcome'})
});*/

/************* Number # 7 *************/
/*const changeStyle = () => {
    modal.style.color = '#636464';
    modal.style.backgroundColor = '#fefefe';
    modal.style.borderColor = '#fdfdfe';
    modal.style.height = '30px';
    modal.style.width = '1500px'
    modal.style.fontSize = '20px'
}
openBtn.addEventListener('click', ()=>{
    changeStyle();
    showNotification({html:'A simple primary alert—check it out!', className: 'welcome'})
});*/
/************* Number # 8 *************/

const changeStyle = () => {
    modal.style.color = '#141619';
    modal.style.backgroundColor = '#d3d3d4';
    modal.style.borderColor = '#bcbebf';
    modal.style.height = '30px';
    modal.style.width = '1500px'
    modal.style.fontSize = '20px'
}
openBtn.addEventListener('click', ()=>{
    changeStyle();
    showNotification({html:'A simple primary alert—check it out!', className: 'welcome'})
});

