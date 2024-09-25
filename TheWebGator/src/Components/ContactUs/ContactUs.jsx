import React from 'react'
import Navbar from '../Boilerplate/Navbar'
import './ContactUs.css'

export default function ContactUs() {
    return (
        <div>
            <Navbar />
            <main className='home container'>
                <section className='section' id='contact-section1'>
                    <div className='row'>
                        <div className='col-12 d-flex flex-column justify-content-center text-white'>
                            Contact our team
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
