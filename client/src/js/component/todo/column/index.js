import { TodoCard } from '../card/';
const columnTemplate = (id, title, cards) => {
    return `
    <div class="todo-columns" tabindex="${id}">
        <div class="todo-title">
            <h2><span class="todo-count">${cards.length}</span>${title}</h2>
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
};
class TodoColumn {
    constructor({ target, id, title, cards, index }) {
        this.column = null;
        this.cardWrap = null;
        this.target = target;
        this.id = id;
        this.title = title;
        this.cards = cards;
        this.index = index;
        this.render();
        this.setElements();
        this.renderCard();
    }
    render() {
        this.target.insertAdjacentHTML('beforeend', columnTemplate(this.id, this.title, this.cards));
    }
    renderCard() {
        this.cards.forEach(card => {
            return new TodoCard(this, card);
        });
    }
    setElements() {
        this.column = [...this.target.children][this.index];
        this.cardWrap = this.column.querySelector('.card-wrap');
    }
}
export { TodoColumn };
