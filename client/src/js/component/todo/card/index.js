const temp = `
<div class="card-item content-wrap" draggable="true" data-type="card" tabindex="0">
    <div class="card-contents">컨텐츠내용</div>
    <p class="card-writer">added by <span>닉네임</span></p>
    <button class="btn btn-close">
        <span class="material-icons">close</span>
    </button>
</div>
`;
class TodoCard {
    constructor() {
        this.render();
    }
    render() {
        console.log('TodoCard');
    }
}
export { TodoCard };
