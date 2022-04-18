import * as axios from 'axios';

const apiFirebase = axios.create({
    baseURL: 'https://allovideo-be021-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default apiFirebase;
