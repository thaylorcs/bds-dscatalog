import { getAccessTokenDecoded, logout } from 'core/utils/auth';
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom'
import './styles.scss';

import menu from 'core/assets/images/menu.svg';

const Navbar = () => {
    const [currentUser, setCurrentUser] = useState('');
    const location = useLocation();
    const [drawerActive, setDrawerActive] = useState(false);

    useEffect(() => {
        const currentUserData = getAccessTokenDecoded();
        setCurrentUser(currentUserData.user_name);
    }, [location])

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        logout();
    }

    return (
        <nav className="bg-primary main-nav">
            <Link to="/" className="nav-logo-text">
                <h4>DS Catalog</h4>
            </Link>
            <button className="menu-mobile-btn" type="button" onClick={() => setDrawerActive(!drawerActive)}>
                <img src={menu} alt="Mobile Menu" />
            </button>
            <div className={drawerActive ? "menu-mobile-container" : "menu-container"}>
                <ul className="main-menu">
                    <li>
                        <NavLink className="nav-link" onClick={() => setDrawerActive(false)} to="/" exact>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" onClick={() => setDrawerActive(false)} to="/products">Catálogo</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" onClick={() => setDrawerActive(false)} to="/admin">Admin</NavLink>
                    </li>
                    {drawerActive && (
                        <li>
                            {currentUser && (
                                <a
                                    href="#logout"
                                    className="nav-link active d-inline"
                                    onClick={(e) => {
                                        setDrawerActive(false);
                                        handleLogout(e);
                                    }}
                                >
                                    {`LOGOUT - ${currentUser}`}
                                </a>
                            )}
                        </li>
                    )}
                    {drawerActive &&
                        <> {!currentUser &&
                            <li>
                                <Link to="/auth/login" className="nav-link active" >
                                    LOGIN
                                </Link>
                            </li>}
                        </>
                    }

                </ul>
            </div>
            <div className="user-info-dnone text-right">
                {currentUser && (
                    <>
                        {currentUser}
                        <a href="#logout"
                            className="nav-link active d-inline"
                            onClick={handleLogout}
                        >
                            Logout
                        </a>
                    </>
                )

                }
                {!currentUser && (
                    <Link to="/auth" className="nav-link active">
                        LOGIN
                    </Link>)
                }
            </div>
        </nav>
    )
}

export default Navbar;