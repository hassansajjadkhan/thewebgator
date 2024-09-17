import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import { ReactSocialMediaIcons } from 'react-social-media-icons';
import './Footer.css';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer className="text-white py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-3" id='logo-section'>
                        <img src={logo} alt="Logo" className='mb-3' height={'80px'} />
                        <p>One Stop Shop for your Brand</p>
                        <p>&copy; 2021 Company &nbsp; <a className='text-white text-decoration-none' href="#!">Terms</a> &nbsp; <a className='text-white text-decoration-none' href="#!">Privacy</a></p>
                    </div>

                    <div className="col-md-2 mb-3">
                        <h3>Product</h3>
                        <ul className="list-unstyled">
                            <li className='mb-2'><a href="#!" className="text-white text-decoration-none">Pricing</a></li>
                            <li className='mb-2'><a href="#!" className="text-white text-decoration-none">FAQ</a></li>
                        </ul>
                    </div>

                    <div className="col-md-2 mb-3">
                        <h3>Company</h3>
                        <ul className="list-unstyled">
                            <li className='mb-2'><a href="#!" className="text-white text-decoration-none">About</a></li>
                            <li className='mb-2'><a href="#!" className="text-white text-decoration-none">Contact</a></li>
                            <li className='mb-2'><a href="#!" className="text-white text-decoration-none">Blog</a></li>
                        </ul>
                    </div>

                    <div className="col-md-2 mb-3">
                        <h3>Social</h3>
                        <ul className="list-unstyled">
                            <li className='mb-2 twitter'><a href="#!" className='text-white text-decoration-none'><i className="bi bi-twitter me-1"></i> Twitter</a></li>
                            <li className='mb-2 facebook'><a href="#!" className='text-white text-decoration-none'><i className="bi bi-facebook me-1"></i> Facebook</a></li>
                            <li className='mb-2 instagram'><a href="#!" className='text-white text-decoration-none'><i className="bi bi-instagram me-1"></i> Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
