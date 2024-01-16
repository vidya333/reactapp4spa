import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className='nav'>
            <ul>
                <li className='home'>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/blog">
                        Blogs
                    </Link>
                </li>
                <li>
                    <Link to="/gallery">
                        Gallery
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
