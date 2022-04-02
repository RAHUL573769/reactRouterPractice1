import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <Link to={'/friend'}>Friends</Link>

                <Link to={'/about'}> About Us</Link>
            </nav>
        </div>
    );
};

export default Header;