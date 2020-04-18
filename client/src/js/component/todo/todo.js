import './todo.scss';
import { TodoColumn } from './column/';
const todoTemplate = `
<div class="todo-columns" tabindex="0">
    <div class="todo-title">
        <h2><span class="todo-count">0</span>타이틀영역</h2>
        <div class="btn-wrap">
            <button class="btn btn-toggle toggle-form"><span class="material-icons">add</span></button>
            <button class="btn"><span class="material-icons">more_vert</span></button>
        </div>
    </div>
    <div class="todo-form content-wrap" data-type="form">
        <form action="">
            <input type="text" class="todo-input" placeholder="enter a note">
            <textarea name="" id="" class="todo-textarea" cols="30" rows="10" maxlength="500" placeholder="enter a note"></textarea>
            <div class="btn-wrap">
                <button type="submit" class="btn btn-add" disabled="true">add</button>
                <button type="reset" class="btn btn-close">cancel</button>
            </div>
        </form>
    </div>
    <div class="card-wrap">
        <div class="card-item content-wrap" draggable="true" data-type="card" tabindex="0">
            <div class="card-contents">컨텐츠내용</div>
            <p class="card-writer">added by <span>닉네임</span></p>
            <button class="btn btn-close">
                <span class="material-icons">close</span>
            </button>
        </div>
    </div>
</div>
<div class="todo-columns" tabindex="0">
    <div class="todo-title">
        <h2><span class="todo-count">0</span>타이틀영역</h2>
        <div class="btn-wrap">
            <button class="btn btn-toggle toggle-form"><span class="material-icons">add</span></button>
            <button class="btn"><span class="material-icons">more_vert</span></button>
        </div>
    </div>
    <div class="todo-form content-wrap" data-type="form">
        <form action="">
            <input type="text" class="todo-input" placeholder="enter a note">
            <textarea name="" id="" class="todo-textarea" cols="30" rows="10" maxlength="500" placeholder="enter a note"></textarea>
            <div class="btn-wrap">
                <button type="submit" class="btn btn-add" disabled="true">add</button>
                <button type="reset" class="btn btn-close">cancel</button>
            </div>
        </form>
    </div>
</div>
`;
class TodoApp {
    constructor(todo, data) {
        this.todo = todo;
        this.data = data;
        this.column = null;
        this.render();
        this.bindEventListener();
    }
    render() {
        this.column = this.data.content.map((value) => {
            return new TodoColumn({ target: this.todo, id: value.id, title: value.title, cards: value.cards });
        });
        console.log(this.column);
    }
    bindEventListener() {
        this.todo.addEventListener('click', (e) => {
            if (e.target.classList.contains('toggle-form'))
                return e.target.closest('.todo-columns').querySelector('.todo-form').classList.toggle('active');
        });
    }
}
export { TodoApp };
