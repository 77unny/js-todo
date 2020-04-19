import './card.scss';
const cardTemplate = ({ id, content }) => {
    return `
    <div class="card-item content-wrap" draggable="true" data-type="card" tabindex="0">
        <div class="card-contents">${content}</div>
        <p class="card-writer">added by <span>닉네임</span></p>
        <button class="btn btn-close">
            <span class="material-icons">close</span>
        </button>
    </div>
    `;
};
class TodoCard {
    constructor(target, data) {
        this.target = target;
        this.data = data;
        this.render();
    }
    render() {
        return this.target.cardWrap.insertAdjacentHTML('beforeend', cardTemplate(this.data));
    }
}
export { TodoCard };
