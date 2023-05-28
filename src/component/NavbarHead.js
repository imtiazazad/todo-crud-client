import React from 'react';
import { Link } from 'react-router-dom';


const NavbarHead = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand fw-bold" to="/">CRUD WORD</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavbarHead;