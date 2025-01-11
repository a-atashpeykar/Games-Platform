import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:"fac074433dfb4479911cc695d5d3d6c4"
    }
})