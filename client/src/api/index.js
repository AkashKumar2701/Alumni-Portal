import axios from 'axios';

const URL = 'http://localhost:5000/alumni';

export const fetchAll = () => axios.get(URL);