import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 1be1020d21899d897ebb01131c2a6e401f3fc14ce5abcb77e0b658c9502405bf'
    }
}
);

