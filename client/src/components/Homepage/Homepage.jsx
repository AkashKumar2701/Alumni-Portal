import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Container, Avatar, AppBar, Toolbar, Typography, Button, Divider } from '@mui/material';
import makeStyles from './styles';

const Homepage = () => {
    const faculties = useSelector((state) => state.faculty);
    const alumnis = useSelector((state) => state.alumni);
    const classes = makeStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [{ result: user }, setUser] = useState(localStorage.getItem('profile') ? JSON.parse(localStorage.getItem('profile')) : { result: null });

    const logout = () => {
        console.log("Logout");
        setUser(null);
        dispatch({ type: 'LOGOUT' });
        history.push('/auth')

    }

    return (
        <>
            {user && <div>
                <AppBar position="static" color="inherit" elevation={0} className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt='None'>{user?.userName.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant="h6">{user?.userName?.toUpperCase()}</Typography>
                        </div>
                        <Button className={classes.logout} onClick={logout} variant="contained" color="secondary" >Logout</Button>
                    </Toolbar>
                </AppBar>
                <Divider variant='middle' light={false} />
            </div>}

        </>
    )
}

export default Homepage
