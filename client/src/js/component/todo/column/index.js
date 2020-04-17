const drawColunm = () => {
    return `
    <div class="todo-columns" tabindex="0">
        <div class="todo-title">
            <h2><span class="todo-count">0}</span>타이틀영역</h2>
            <div class="btn-wrap">
                <button class="btn btn-toggle toggle-form"><span class="material-icons">add</span></button>
                <button class="btn"><span class="material-icons">more_vert</span></button>
            </div>
        </div>
    </div>
    `;
};
export { drawColunm };
