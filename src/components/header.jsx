import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { headerLink, logo } from './header.module.css';

const Header = () => {
    return (
        <div>
            <StaticImage className={logo} src="../images/images.png"></StaticImage>
            <Link className={headerLink} to="/">Strona główna</Link>
            <Link className={headerLink} to="/blog">Blog</Link>
            <Link className={headerLink} to="/about">About</Link>
        </div>
    );
};

export default Header;