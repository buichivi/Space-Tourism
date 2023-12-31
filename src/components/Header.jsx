import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/shared/logo.svg";

const Header = () => {
    const location = useLocation()
    const [url, setUrl] = useState('/')
    const inputRef = useRef();
    const menuBtn = useRef()

    useEffect(() => {
        setUrl(location.pathname)
        menuBtn.current.classList.remove('active')
        inputRef.current.checked = false;
    }, [location])

    return (
        <header className="header">
            <div className="logo">
                <img src={logo} />
            </div>
            <label 
                htmlFor="mobile-menu" 
                className="menu-icon" 
                onClick={(e) => e.currentTarget.classList.toggle('active')}
                ref={menuBtn}
            >
                <span></span>
                <span></span>
                <span></span>
            </label>
            <input type='checkbox' id="mobile-menu" style={{ display: "none" }} ref={inputRef}/>
            <nav className="navbar-mobile">
                <ul className="navbar__list--mobile">
                    <li className={`navbar__item--mobile ${url === '/' ? 'active' : ''}`}>
                        <span>00</span>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={`navbar__item--mobile ${url === '/destination' ? 'active' : ''}`}>
                        <span>01</span>
                        <Link to="/destination">Destination</Link>
                    </li>
                    <li className={`navbar__item--mobile ${url === '/crew' ? 'active' : ''}`}>
                        <span>02</span>
                        <Link to="/crew">Crew</Link>
                    </li>
                    <li className={`navbar__item--mobile ${url === '/technology' ? 'active' : ''}`}>
                        <span>03</span>
                        <Link to="/technology">Technology</Link>
                    </li>
                </ul>
            </nav>
            <nav className="navbar">
                <ul className="navbar__list">
                    <li className={`navbar__item ${url === '/' ? 'active' : ''}`}>
                        <span>00</span>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={`navbar__item ${url === '/destination' ? 'active' : ''}`}>
                        <span>01</span>
                        <Link to="/destination">Destination</Link>
                    </li>
                    <li className={`navbar__item ${url === '/crew' ? 'active' : ''}`}>
                        <span>02</span>
                        <Link to="/crew">Crew</Link>
                    </li>
                    <li className={`navbar__item ${url === '/technology' ? 'active' : ''}`}>
                        <span>03</span>
                        <Link to="/technology">Technology</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
