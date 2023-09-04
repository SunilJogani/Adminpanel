import React, { useEffect, useState } from 'react';
import { FaBars, FaExpandArrowsAlt, FaRegBell, FaRegComments, FaSearch, FaThLarge } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import { TbLogout } from "react-icons/tb";

import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <div>

            <div className='wrapper layout-fixed'>
                <div className='navigation'>
                    <header>
                        <nav>
                            <div className='top-header d-flex justify-content-between p-2 align-items-center'>
                                <ul className='navbar'>
                                    <li className='nav-item'>
                                        <button className='btn nav-link toggle-button'>
                                            <FaBars />
                                        </button>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='#'>
                                            Home
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='#'>
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                                <ul className='navbar-icon d-flex'>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='#'>
                                            <FaSearch />
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='#'> <FaRegComments /> </a>
                                        <span className='badge comment'>3</span>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='#'> <FaRegBell /> </a>
                                        <span className='badge bell'>15</span>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='#'> <FaExpandArrowsAlt /> </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='#'> <FaThLarge /> </a>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to={"http://localhost:3000/"}>
                                        <a className='nav-link' href='#'> < TbLogout /> logout </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </header>
                </div>
            </div>

            <Sidebar />

        </div>
    )
}

export default Header;





