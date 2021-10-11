import axios from 'axios';

const URL = 'http://localhost:5000/alumni-portal';

export const fetchAll = () => axios.get(URL);
export const facultySignup = (formData) => axios.post(`${URL}/faculty/signup`, formData);
export const facultySignin = (formData) => axios.post(`${URL}/faculty/login`, formData);