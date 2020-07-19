burger = document.querySelector('.burger')
head = document.querySelector('.head')
rightnav = document.querySelector('.rightnav')
table = document.querySelector('.table')

burger.addEventListener('click',()=>{
head.classList.toggle('h-nav-resp')
rightnav.classList.toggle('v-class-resp')
table.classList.toggle('v-class-resp')
})