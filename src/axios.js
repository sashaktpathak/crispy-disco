import axios from 'axios';

const instance = axios.create({
    baseURL: "http://d76f17d665cc.ngrok.io/"
});

export default instance;