"use strict";

const toDoInput = document.querySelector('.todolist__text-field');
const toDoBtn = document.querySelector('.todolist__submit');
const toDoField = document.querySelector('.todolist__field');
const toDoList = JSON.parse(localStorage.getItem('todo'));

const addTask = () => {
    if (toDoInput.value != '') {
        const id = Date.now();
        toDoList[`${id}`] = toDoInput.value;
        shapingTask(id, toDoInput.value);
        toDoInput.value = '';
        localStorage.setItem('todo', JSON.stringify(toDoList));
    }
};

const removeTask = e => {
    if (e.target.closest('button')) {
        e.target.closest('li').remove();
        delete toDoList[e.target.closest('button').dataset.index];
        localStorage.setItem('todo', JSON.stringify(toDoList));
    }
};

const shapingTask = (id, value) => {
    toDoField.innerHTML += `
        <li class='todolist__item'>
            <p>${value}</p>
            <button class="todolist__submit todolist__submit--basket" data-index='${id}'>
                <svg class="todolist__submit-icon" width='16px' height='16px' enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m424 64h-88v-16c0-26.467-21.533-48-48-48h-64c-26.467 0-48 21.533-48 48v16h-88c-22.056 0-40 17.944-40 40v56c0 8.836 7.164 16 16 16h8.744l13.823 290.283c1.221 25.636 22.281 45.717 47.945 45.717h242.976c25.665 0 46.725-20.081 47.945-45.717l13.823-290.283h8.744c8.836 0 16-7.164 16-16v-56c0-22.056-17.944-40-40-40zm-216-16c0-8.822 7.178-16 16-16h64c8.822 0 16 7.178 16 16v16h-96zm-128 56c0-4.411 3.589-8 8-8h336c4.411 0 8 3.589 8 8v40c-4.931 0-331.567 0-352 0zm313.469 360.761c-.407 8.545-7.427 15.239-15.981 15.239h-242.976c-8.555 0-15.575-6.694-15.981-15.239l-13.751-288.761h302.44z"/><path d="m256 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/><path d="m336 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/><path d="m176 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/></g></svg>
            </button>
        </li>
    `;
};

const outputTask = ()=> {
    for (let key in toDoList) {
        shapingTask(key, toDoList[key]);
    }
};

outputTask();
toDoBtn.addEventListener('click', addTask);
toDoField.addEventListener('click', removeTask);