'use strict'

const nav = document.querySelectorAll('.header__todo');

const menu = document.querySelectorAll('.main__menu-block');

const todoBlocks = document.querySelectorAll('.todos-block');
const menuTodos = document.querySelectorAll('.menu-todo-block');

const enterInput = document.querySelector('.enter__input');
const arrow = document.querySelector('.enter__btn');
const save = document.querySelector('.save__btn');

nav.forEach(item => item.addEventListener('click', () => {
    for (let i = 0; i < nav.length; i++) {
        if (nav[i].textContent == item.textContent) {
            nav[i].classList.add('active')
            menu[i].classList.add('show')
        }   else {
            nav[i].classList.remove('active')
            menu[i].classList.remove('show')
        }
    }
}))

arrow.addEventListener('click', makeTodo)

const spanAll = document.querySelectorAll('.todo__number');

const deleteBtns = document.getElementsByClassName('todo__delete')

const btnsArr = [];
const divsArr = []

function randomId() {
    return Math.random()
}

function makeTodo() {

    if (enterInput.value !== '' && enterInput.value !== ' ') {
        let div = document.createElement('div');
        div.classList.add('menu-todo-block');
        todoBlocks[0].appendChild(div)
    
        divsArr.push(div)

        let p = document.createElement('p');
        p.classList.add('todo__text')
        div.appendChild(p)
    
        p.innerHTML += enterInput.value;
    
        let a = document.createElement('a');
        a.classList.add('todo__delete');
        a.href = '#'
        a.setAttribute('id', randomId())
        div.setAttribute('id', a.getAttribute('id'))

        div.appendChild(a)
    
        let img = document.createElement('img');
        img.classList.add('delete__icon');
        img.src = 'img/delete.png'
        a.appendChild(img)
        
        btnsArr.push(a)

        btnsArr.forEach(btn => btn.addEventListener('click', () => {

            for (let i = 0; i < btnsArr.length; i++) {

                if (btn.id == divsArr[i].id) {

                    let index = divsArr.indexOf(divsArr[i])

                    btnsArr[i].remove()
                    btnsArr.splice(index, 1)

                    divsArr[i].remove()
                    divsArr.splice(index, 1)
                }
            }
        }))

    }   else enterInput.placeholder = 'Enter todo...';
}

let todos = [];

save.addEventListener('click', () => {

    todos = divsArr.slice()
})
