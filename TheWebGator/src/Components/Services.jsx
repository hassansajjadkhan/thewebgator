import React from 'react'
import Navbar from './Navbar'
import QuoteButton from './QuoteButton'
import webDesign from '../assets/webDesign.png'
import './Services.css'

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
                <section className='section justify-content-start' id='services-section2'>
                    <div className='row' id='approach'>
                        <div className='col-12 text-white h1' id='approach-heading'>
                            Our Approach to Web Design
                        </div>
                        <div className='col-12' style={{ color: '#B8B8B8' }}>
                            Fusing imagination with practicality
                        </div>
                    </div>
                    <div className='row mt-5' id='service-cards'>
                        <div className='col-5  me-4' id='service-card'>
                            <div className="service-number mb-2">
                                <span>1</span>
                            </div>
                            <h4 className='text-white' id='service-title'>
                                Discovery and Planning
                            </h4>
                            <p style={{ color: '#b8b8b8' }} id='service-description'>
                                We begin by immersing ourselves in your business.
                                This involves understanding your goals, target audience,
                                brand identity, and competitors. Through in-depth
                                discussions and research, we develop a clear project
                                scope and outline the project's objectives.
                            </p>
                        </div>
                        <div className='col-4  me-4' id='service-card'>
                            <div className="service-number mb-2">
                                <span>2</span>
                            </div>
                            <h4 className='text-white' id='service-title'>
                                Information Architecture
                            </h4>
                            <p style={{ color: '#b8b8b8' }} id='service-description'>
                                With a solid understanding of your business,
                                we structure the website's content and navigation.
                                This stage involves creating sitemaps and wireframes
                                to define the information hierarchy, user flow, and
                                overall website structure.
                            </p>
                        </div>
                        <div className='col-4  me-4' id='service-card'>
                            <div className="service-number mb-2">
                                <span>3</span>
                            </div>
                            <h4 className='text-white' id='service-title'>
                                Visual Design
                            </h4>
                            <p style={{ color: '#b8b8b8' }} id='service-description'>
                                Our talented designers bring your brand to life
                                through captivating visuals. We create mood boards,
                                color palettes, and typography styles that align
                                with your brand identity. We then develop design
                                concepts and present them for your feedback.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
