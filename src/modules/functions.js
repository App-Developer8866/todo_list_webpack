/* eslint-disable import/no-cycle */
/* eslint-disable no-plusplus */
import { tasks } from '../index.js';

// eslint-disable-next-line import/prefer-default-export
export const setCheck = (index) => {
  if (!tasks[index - 1].completed) {
    tasks[index - 1].completed = true;
  } else {
    tasks[index - 1].completed = false;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
};