import axios from 'axios';

//json server api url link
export default axios.create({
    baseURL: 'http://c55fde90e518.ngrok.io' //resets every 8 hours
});

