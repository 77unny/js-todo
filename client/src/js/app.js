const tag = '[app]';
import { httpRequest } from './utils/httpRequest';
const userData = {
    name: 'nigayo',
    password: '1234',
};
httpRequest.post('http://ec2-15-164-63-83.ap-northeast-2.compute.amazonaws.com:8080/board/login', userData)
    .then(data => data);
