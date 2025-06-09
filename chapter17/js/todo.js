// 요소 가져오기
const todoInput = document.querySelector('#todo-input');
const addButton = document.querySelector('#add-button');
const todoList = document.querySelector('#todo-list');

// 이벤트 등록
document.addEventListener('DOMContentLoaded', loadTodos);
addButton.addEventListener('click', addTodo);
todoList.addEventListener('click', handleTodoClick);

// 할 일 추가
function addTodo(e) {
    e.preventDefault();

    if (!todoInput.value.trim()) return;

    createTodoElement(todoInput.value);
    saveToLocal(todoInput.value);
    todoInput.value = '';
}

// Todo 항목 생성 함수 (화면에 추가)
function createTodoElement(text) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = text;
    newTodo.classList.add('todo-content');
    newDiv.appendChild(newTodo);

    const completeBtn = document.createElement('button');
    completeBtn.innerText = '완료';
    completeBtn.classList.add('complete-button');
    newDiv.appendChild(completeBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = '삭제';
    deleteBtn.classList.add('delete-button');
    newDiv.appendChild(deleteBtn);

    todoList.appendChild(newDiv);
}

// 로컬 스토리지에 저장
function saveToLocal(todo) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// 로컬 스토리지에서 불러오기
function loadTodos() {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => createTodoElement(todo));
}

// 완료/삭제 버튼 처리
function handleTodoClick(e) {
    const item = e.target;
    const parent = item.parentElement;

    if (item.classList.contains('complete-button')) {
        parent.querySelector('.todo-content').classList.toggle('completed');
    } else if (item.classList.contains('delete-button')) {
        removeFromLocal(parent.querySelector('.todo-content').innerText);
        parent.remove();
    }
}

// 로컬 스토리지에서 삭제
function removeFromLocal(todoText) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    const index = todos.indexOf(todoText);
    if (index !== -1) {
        todos.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(todos));
    }
}
