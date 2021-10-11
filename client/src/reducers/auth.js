const reducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case 'FACULTY_SIGN_IN':
            localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
            console.log("REDUCER In", action?.payload);
            return { ...state, authData: action?.payload };

        case 'FACULTY_SIGN_UP':
            localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
            console.log("REDUCER Up", action?.payload);
            return { ...state, authData: action?.payload };

        case 'LOGOUT':
            localStorage.clear();
            return { authData: null };

        default:
            return state;
    }
}
export default reducer;