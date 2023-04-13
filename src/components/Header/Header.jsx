import React from 'react';
import './Header.css'
import myphoto from '../../images/Shuvo.jpg'

const Header = () => {
    return (
            <nav className="header navbar p-2 m-2">
                <div className="container border-bottom">
                    <a className="navbar-brand fw-bold">Knowledge Cafe</a>
                    <form className="d-flex" role="search">
                        
                            <img className='rounded-circle' src={myphoto} alt="" />
                    </form>
                </div>
            </nav>
    );
};
import './Header.css'
    
export default Header;