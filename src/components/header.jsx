import React from 'react';
import { Link } from 'gatsby';

import { headerLink } from './header.module.css';

const Header = () => {
    return (
        <div>
            <Link className={headerLink} to="/">Strona główna</Link>
            <Link className={headerLink} to="/blog">Blog</Link>
            <Link className={headerLink} to="/about">About</Link>
        </div>
    );
};

export default Header;