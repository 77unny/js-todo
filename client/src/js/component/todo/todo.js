import './todo.scss';
import { TodoColumn } from './column/';
class TodoApp {
    constructor(todo, data) {
        this.todo = todo;
        this.data = data;
        this.column = null;
        this.card = null;
        this.render();
        this.bindEventListener();
    }
    render() {
        this.column = this.data.content.map((value, index) => {
            return new TodoColumn({ target: this.todo, id: value.id, title: value.title, cards: value.cards, index });
        });
    }
    bindEventListener() {
        this.todo.addEventListener('click', (e) => {
            if (e.target.classList.contains('toggle-form'))
                return e.target.closest('.todo-columns').querySelector('.todo-form').classList.toggle('active');
        });
    }
}
export { TodoApp };
