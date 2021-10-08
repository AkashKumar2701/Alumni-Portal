import React from 'react'
import { useSelector } from 'react-redux';

const Homepage = () => {
    const faculties = useSelector((state) => state.faculty);
    const alumnis = useSelector((state) => state.alumni);
    // console.log("Faculty HOME", faculties);
    // console.log("Alumni HOME", alumnis);
    return (
        <div>
            Homepage
        </div>
    )
}

export default Homepage
