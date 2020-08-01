import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';

import Logo from '../../assets/img/logo.png';
import './menu.css';

const Menu = () => {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="openflix logo"/>
            </Link>
            <Button as={Link} className="ButtonLink" to="/newvideo">Novo Video</Button>
        </nav>
    )
}

export default Menu;