import {createSiteMenuTemplate} from "./view/site-menu.js";
import {createFilterTemplate} from "./view/filter.js";
import {createTaskTemplate} from "./view/tasks.js";
import {createBoardTemplate} from "./view/board.js";
import {createTaskEditTemplate} from "./view/task-edit.js";
import {createLoadMoreButtonTemplate} from "./view/load-more-button.js";

const TASK_COUNT = 3;

const render = (conteiner, template, place) => {
  conteiner.insertAdjacentHTML(place, template);
};

const renderTasks = function (count) {
  for (let i = 0; i < count; i++) {
    render(taskListElement, createTaskTemplate(), `beforeend`);
  }
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createFilterTemplate(), `beforeend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

const boardElement = siteMainElement.querySelector(`.board`);
const taskListElement = boardElement.querySelector(`.board__tasks`);

render(taskListElement, createTaskEditTemplate(), `beforeend`);

renderTasks(TASK_COUNT);

render(boardElement, createLoadMoreButtonTemplate(), `beforeend`);
