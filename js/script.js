let menu = document.querySelector('#menu-bar');
let ul = document.querySelector('.header .header-list');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    ul.classList.toggle('header-list-toggle');
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    ul.classList.remove('header-list-toggle');
};



const deleteList = document.querySelectorAll('#delete');
const jobList = document.querySelectorAll('.jobList .jobList-item .jobList-box');

for(let i = 0; i < deleteList.length; i++) {
    deleteList[i].addEventListener('click',function() {
        jobList[i].style.display = 'none';
    });
}


