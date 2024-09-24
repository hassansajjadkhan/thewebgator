import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import QuoteButton from '../QuoteButton';
import { Link } from 'react-router-dom';

const navItems = ['Home', 'Services', 'Our Process', 'About', 'Contact Us'];

export default function Navbar() {
    return (
        <nav id='mainNav' className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="#">
                <span className='logoBrackets'>{'<'}</span>
                <span className='logoSlash'>{'/'}</span>
                <span className='logoBrackets'>{'>'}</span>
            </a>
            <button className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    {navItems.map((item) => {
                        return (
                            <li key={item} className="nav-item mx-3">
                                {item === 'Services' && (
                                    <Link className='nav-link' to='/cdn/twg/TheWebGator/services'>{item}</Link>
                                )}
                                {item === 'Contact Us' && (
                                    <Link className='nav-link' to={'/cdn/twg/TheWebGator/contactus'}>{item}</Link>
                                )}
                                {item === 'Home' ? (
                                    <Link className='nav-link' to='/cdn/twg/TheWebGator/'>{item}</Link>
                                ) : (
                                    item !== 'Services' && item !== 'Contact Us' && <a className='nav-link' href='#'>{item}</a>
                                )}

                            </li>
                        );
                    })}
                </ul>
            </div>
            <QuoteButton className={'navbar-quote-button'} />
        </nav>
    );
}