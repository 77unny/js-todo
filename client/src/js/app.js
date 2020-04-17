const tag = '[app]';
import { getEl, insertComponents } from './utils/common';
import { drawHeader } from './component/layout/header';
import { drawBody } from './component/layout/body';
import { drawFooter } from './component/layout/footer';
const root = getEl('#wrap');
insertComponents(root, drawHeader, drawBody, drawFooter);
