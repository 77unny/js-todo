const getEl = (el) => document.querySelector(el);
const getElAll = (el) => document.querySelectorAll(el);
const insertComponents = (target, ...component) => {
    const components = [...component];
    components.forEach((element) => {
        target.insertAdjacentHTML('beforeend', element);
    });
    return;
};
export { getEl, getElAll, insertComponents };
