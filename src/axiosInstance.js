import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://golden-shoe-f9378.firebaseio.com'
});

export default instance;