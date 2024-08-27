import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Import custom CSS
import QuoteButton from './QuoteButton';

export default function Navbar() {
    return (
        <nav id='mainNav' className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="#">
                <span style={{ fontSize: '30px', color: '#3BAF4A' }}>{'<'}</span>
                <span style={{ fontSize: '30px', color: 'white' }}>{'/'}</span>
                <span style={{ fontSize: '30px', color: '#3BAF4A' }}>{'>'}</span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item mx-3">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link" href="#">Our Process</a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link" href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
            <QuoteButton />
        </nav>
    );
}