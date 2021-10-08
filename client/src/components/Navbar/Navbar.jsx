import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MenuOutlined } from '@ant-design/icons';
import GroupIcon from '@mui/icons-material/Group';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LoginIcon from '@mui/icons-material/Login';

import Logo from '../../images/Logo.jpg';
import './styles.css';

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(undefined);


    const handleMenuClick = () => {
        if (screenSize <= 800) {
            setActiveMenu((prevActiveMenu) => !prevActiveMenu);
        }
    }

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize <= 800) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    return (
        <div className="nav-container">
            <div className="logo-container">
                <img src={Logo} className='logo-img' alt="Logo" />
                <Typography.Title level={2} className="logo"><Link to="/">Alumni Portal</Link></Typography.Title>
                {screenSize <= 800 && <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>}
            </div>
            {activeMenu && (
                <Menu theme="dark" >
                    <Menu.Item key={1} icon={<HomeOutlined />} onClick={handleMenuClick} >
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key={2} icon={<GroupIcon />} onClick={handleMenuClick}>
                        <Link to="/alumni">Alumni</Link>
                    </Menu.Item>
                    <Menu.Item key={3} icon={<LocalLibraryIcon />} onClick={handleMenuClick}>
                        <Link to="/faculty">Faculty</Link>
                    </Menu.Item>
                    <Menu.Item key={4} icon={<LoginIcon />} onClick={handleMenuClick}>
                        <Link to="/auth">Signin / Signup</Link>
                    </Menu.Item>
                </Menu>
            )}
        </div>
    );
};

export default Navbar;
