import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const Homepage = () => {
    const faculties = useSelector((state) => state.faculty);
    const alumnis = useSelector((state) => state.alumni);
    const [{ result: user }, setUser] = useState(localStorage.getItem('profile') ? JSON.parse(localStorage.getItem('profile')) : { result: null });
    return (
        <div>
            {user ? <h1>Welcome User {user.userName}</h1> : <h1>Please Login To Continue</h1>}
        </div>
    )
}

export default Homepage
