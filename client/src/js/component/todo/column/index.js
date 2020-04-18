import { TodoCard } from '../card/';
const columnTemplate = `
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
    <div class="card-wrap"></div>
</div>
`;
class TodoColumn {
    constructor() {
        this.render();
    }
    render() {
        console.log('TodoColumn');
        new TodoCard();
    }
}
export { TodoColumn };
