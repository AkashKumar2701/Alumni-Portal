export default (faculty = [], action) => {
    switch (action.type) {
        case 'FETCH_FACULTY':
            console.log("faculty", action.payload);
            return action.payload
        default:
            return faculty;
    }
}