import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import { ReactSocialMediaIcons } from 'react-social-media-icons';

const Footer = () => {
    return (
        <footer className="bg-light text-dark py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <img src="/path/to/logo.png" alt="Logo" className="mb-2" />
                        <p>A short description of what you do here</p>
                        <p className="text-muted">&copy; 2021 Company &nbsp; <a href="#!">Terms</a> &nbsp; <a href="#!">Privacy</a></p>
                    </div>

                    <div className="col-md-2 mb-3">
                        <h5>Product</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!" className="text-dark">Pricing</a></li>
                            <li><a href="#!" className="text-dark">FAQ</a></li>
                        </ul>
                    </div>

                    <div className="col-md-2 mb-3">
                        <h5>Company</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!" className="text-dark">About</a></li>
                            <li><a href="#!" className="text-dark">Contact</a></li>
                            <li><a href="#!" className="text-dark">Blog</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 mb-3">
                        <h5>Social</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!"><i className="bi bi-twitter"></i> Twitter</a></li>
                            <li><a href="#!"><i className="bi bi-facebook"></i> Facebook</a></li>
                            <li><a href="#!"><ReactSocialMediaIcons borderColor="rgba(0,0,0,0.25)"
                                borderWidth='0'
                                icon="twitter"
                                iconColor="rgba(26,166,233,1)"
                                backgroundColor="white"
                                iconSize='5'
                                size='20'
                                url="https://some-website.com/my-social-media-url" /> Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
