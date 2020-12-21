import axios from 'axios';

export default axios.create({
    baseURL: 'http://c55fde90e518.ngrok.io' //resets every 8 hours
});

