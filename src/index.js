/* eslint-disable no-plusplus */
// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';

const Tasks = document.querySelector('.tasks');
const Input = document.querySelector('form input');
const AddBtn = document.querySelector('form button');
const Span = document.querySelector('span');

let tasks = JSON.parse(localStorage.getItem('tasks')) === null ? [] : JSON.parse(localStorage.getItem('tasks'));

AddBtn.addEventListener('click', () => {
  if (Input.value === '') {
    Span.innerHTML = 'Input field is required';
  } else {
    const obj = {
      description: Input.value,
      completed: false,
      index: tasks.length + 1,
    };
    tasks.push(obj);
    localStorage.setItem('tasks', tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
});

window.setCheck = (index) => {
  if (!tasks[index - 1].completed) {
    tasks[index - 1].completed = true;
  } else {
    tasks[index - 1].completed = false;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

function listTasks() {
  tasks.forEach((i) => {
    if (i.completed) {
      Tasks.innerHTML += `<li>
    <input type="checkbox" onclick="setCheck(${i.index})" checked/>
    <div class="task">
      <p>${i.description}</p>
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
  </li>`;
    } else {
      Tasks.innerHTML += `<li>
    <input type="checkbox" onclick="setCheck(${i.index})"/>
    <div class="task">
      <p>${i.description}</p>
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
  </li>`;
    }
  });
}

listTasks();

window.clearAll = () => {
  tasks = tasks.filter((elem) => elem.completed === false);
  for (let i = 1; i <= tasks.length; i++) {
    tasks[i - 1].index = i;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
  window.location.reload();
};