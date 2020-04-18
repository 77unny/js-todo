import './todo.scss';
import { drawColunm } from './column/';
const drawTodo = () => {
    return `${drawColunm()}`;
};
export { drawTodo };
