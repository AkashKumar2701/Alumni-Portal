import * as api from '../api';

export const fetchAll = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAll();
        dispatch({ type: 'FETCH_FACULTY', payload: data.faculty })
        dispatch({ type: 'FETCH_ALUMNI', payload: data.alumni })
    } catch (error) {
        console.log(error);
    }
}
export const facultySignup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.facultySignup(formData);
        dispatch({ type: 'FACULTY_SIGN_UP', payload: data });
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

export const facultySignin = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.facultySignin(formData);
        dispatch({ type: 'FACULTY_SIGN_IN', payload: data })
        history.push('/');
    } catch (error) {
        console.log(error);

    }
}
