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
                        <div className='col-12 d-flex flex-row justify-content-center text-white h1'>
                            Contact our team
                        </div>
                        <div className='col-12 d-flex flex-row justify-content-center text-gray h5'>
                            We are here to help you
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
