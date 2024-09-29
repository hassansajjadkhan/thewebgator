import React from 'react'
import Navbar from '../Boilerplate/Navbar'
import './ContactUs.css'

export default function ContactUs() {
    return (
        <div>
            <Navbar />
            <main className='home container'>
                <section id='contact-section1'>
                    <div className='row' id='contact-slogan'>
                        <div className='col-12 d-flex flex-row justify-content-center'>
                            <div className='text-white h1'>Contact our friendly team</div>
                        </div>
                        <div className='col-12 d-flex flex-row justify-content-center text-gray h5 mt-3' style={{ color: '#b8b8b8' }}>
                            Let us know How we can help
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-6'>
                            <form id='contact-form' >
                                <input type='text' placeholder='Full Name' />
                                <input type='email' placeholder='Email' />
                                <label form='message'>Message</label>
                                <div className='mt-2'>
                                    <textarea name='message' rows={5} placeholder='Type your message...'></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
