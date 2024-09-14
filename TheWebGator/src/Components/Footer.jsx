import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <img src="/logo.png" alt="Logo" style={{ width: '50px' }} />
                        <p className="text-muted">A short description of what you do here</p>
                        <p className="text-muted">
                            © 2021 Company&nbsp;&nbsp;
                            <a href="#" className="text-muted">Terms</a>&nbsp;&nbsp;
                            <a href="#" className="text-muted">Privacy</a>
                        </p>
                    </div>

                    <div className="col-md-2">
                        <h5>Product</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-muted">Pricing</a></li>
                            <li><a href="#" className="text-muted">FAQ</a></li>
                        </ul>
                    </div>

                    <div className="col-md-2">
                        <h5>Company</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-muted">About</a></li>
                            <li><a href="#" className="text-muted">Contact</a></li>
                            <li><a href="#" className="text-muted">Blog</a></li>
                        </ul>
                    </div>

                    <div className="col-md-2">
                        <h5>Social</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-muted">Twitter</a></li>
                            <li><a href="#" className="text-muted">Facebook</a></li>
                            <li><a href="#" className="text-muted">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
