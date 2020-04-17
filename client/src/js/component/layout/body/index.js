import { drawTodo } from '../../todo/';
const drawBody = `
<div id="container">
    <div id="todo-app">${drawTodo()}</div>
</div>
<div id="dimmed"></div>`;
export { drawBody };
