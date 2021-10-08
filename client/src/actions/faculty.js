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