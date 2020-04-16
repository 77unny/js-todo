const tag = '[app]';
import { getEl } from './utils/common';
import { drawHeader } from './component/Header';
const root = getEl('#wrap');
root.insertAdjacentHTML('afterbegin', drawHeader);
