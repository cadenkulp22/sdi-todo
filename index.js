const createTaskElement = (name, time) => {
  let taskElement = `<div class="card task-card border-0 my-4 ps-2">
                        <div class="card-body d-flex">
                          <div class="checkbox-container my-auto mx-4">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                          </div>
                          <div class="w-100 m-2 px-2">
                            <h4 class="card-title ps-1">${name}</h4>
                            <hr class="mt-0">
                            <h6 class="card-subtitle ps-1">Time: ${time} min</h6>
                          </div>
                        </div>
                      </div>`;
  let todoTasksContainer = document.querySelector('#todoTasksContainer');
  todoTasksContainer.insertAdjacentHTML('beforeend', taskElement);
};

const createTask = () => {
  let taskName = document.querySelector('#newTaskName').value;
  let estTime = document.querySelector('#newTaskTime').value;
  createTaskElement(taskName, estTime);
};

let createTaskBtn = document.querySelector('#createTaskBtn');
createTaskBtn.addEventListener('click', createTask);
