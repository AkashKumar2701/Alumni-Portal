const reducer = (alumni = [], action) => {
    switch (action.type) {
        case 'FETCH_ALUMNI':
            console.log("Alumni", action.payload);
            return action.payload
        default:
            return alumni;
    }

}
export default reducer;