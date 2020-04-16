const tag = '[app]';
import { getEl } from './utils/common';
import { drawHeader } from './component/layout/header';
import { drawBody } from './component/layout/body';
import { drawFooter } from './component/layout/footer';
const root = getEl('#wrap');
root.insertAdjacentHTML('beforeend', drawHeader);
root.insertAdjacentHTML('beforeend', drawBody);
root.insertAdjacentHTML('beforeend', drawFooter);
