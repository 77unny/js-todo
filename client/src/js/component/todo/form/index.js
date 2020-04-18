const drawForm = () => {
    return `
    <div class="todo-form content-wrap" data-type="form">
        <form action="">
            <input type="text" class="todo-input" placeholder="enter a note">
            <textarea name="" id="" class="todo-textarea" cols="30" rows="10" maxlength="500" placeholder="enter a note"></textarea>
            <div class="btn-wrap">
                <button type="submit" class="btn btn-add" disabled="true">add</button>
                <button type="reset" class="btn btn-close">cancel</button>
            </div>
        </form>
    </div>`;
};
export { drawForm };
