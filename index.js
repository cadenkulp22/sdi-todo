let currTaskNum = 1;

const addDeleteListener = (id) => {
  let test = `#${id}`;
  let deleteBtn = document.querySelector(test);
  deleteBtn.addEventListener('click', deleteTask);
}

const createTaskElement = (name, time) => {
  let currTask = 'task-' + currTaskNum;
  let currDeleteId = 'delete-task-' + currTaskNum;
  let taskElement = `<div class="card task-card ${currTask} border-0 my-4 ps-2">
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
                            <div class="d-flex justify-content-between">
                              <h4 class="card-title ps-1">${name}</h4>
                              <i class="fa-solid fa-trash fa-lg pe-2 deleteBtn ${currTask}" id="${currDeleteId}"></i>
                            </div>
                            <hr class="mt-0">
                            <h6 class="card-subtitle ps-1 text-muted"><i class="fa-solid fa-clock pe-2 text-muted"></i>${time} min</h6>
                          </div>
                        </div>
                      </div>`;
  let todoTasksContainer = document.querySelector('#todoTasksContainer');
  todoTasksContainer.insertAdjacentHTML('beforeend', taskElement);
  addDeleteListener(currDeleteId);
};

const createTask = () => {
  currTaskNum += 1;
  let taskName = document.querySelector('#newTaskName').value;
  let estTime = document.querySelector('#newTaskTime').value;
  createTaskElement(taskName, estTime);
};

const deleteTask = (event) => {
  let deleteBtnId = event.target.id;
  let taskClass = deleteBtnId.substring(7);
  let taskToDelete = document.querySelectorAll(`.${taskClass}`)[0];
  taskToDelete.remove();
};

let createTaskBtn = document.querySelector('#createTaskBtn');
createTaskBtn.addEventListener('click', createTask);

// let deleteBtn = document.querySelector('.deleteBtn');
// deleteBtn.addEventListener('click', deleteTask);