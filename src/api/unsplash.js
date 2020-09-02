import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID uImzhIl4IuJShcmhw-w1bpbqvXDoLyC25tzH93LZuxg'
    }
});