import React from 'react'
import Navbar from '../Boilerplate/Navbar'
import QuoteButton from '../QuoteButton'
import ServiceSection from './ServiceSection'
import webDesign from '../../assets/webDesign.png'
import servicePhone from '../../assets/servicePhone.png'
import './Services.css'
import Footer from '../Boilerplate/Footer'

export default function Services() {
    return (
        <div>
            <Navbar />
            <main className='home container'>
                <section className='section' id='services-section1'>
                    <div className='row'>
                        <div className='col-6 d-flex flex-column justify-content-center text-white'>
                            <div className='text-white mb-3' id='service-heading'>
                                Creative Web Design
                            </div>
                            <div id='service-quote-button'>
                                <QuoteButton className='home-quote-button me-auto' />
                            </div>
                        </div>
                        <div className='col-6'>
                            <img src={webDesign} height={'760px'} alt='web design' />
                        </div>
                    </div>
                </section>
                <section className='service-section justify-content-start' id='services-section2'>
                    <div className='row' id='approach'>
                        <div className='col-12 text-white h1' id='approach-heading'>
                            Our Approach to Web Design
                        </div>
                        <div className='col-12' style={{ color: '#B8B8B8' }}>
                            Fusing imagination with practicality
                        </div>
                    </div>
                    <ServiceSection />
                </section>
                <section className='section' id='services-section3'>
                    <div className='row' id='schedule'>
                        <div className='col-3'>
                            <img src={servicePhone} height={'760px'} alt='web design' />
                        </div>
                        <div className='col-4' id='contact-info'>
                            <h3 style={{ color: '#b8b8b8' }}>
                                Schedule a discovery call or reach out to discuss how we can bring your vision to life.
                            </h3>
                            <div className='mt-3'>
                                <button className='btn py-2 px-3' id='discovery-button'>
                                    Schedule a Discovery Call
                                </button>
                            </div>
                            <div className='mt-2'>
                                <button className='btn py-2 px-3' id='contact-button'>
                                    Contact@webgator.com
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </div>
    )
}
