import React from 'react'
import Navbar from './Navbar'
import QuoteButton from './QuoteButton'
import './Home.css'

export default function Home() {
    return (
        <div>
            <Navbar />
            <main className='home container-fluid'>
                <section className='section' id='section1'>
                    <div className='row' id='heading'>
                        <div className='row'>
                            <div className='col-sm' id='subLine'>
                                We create world-class digital products that communicate clearly.
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm mb-2' id='mainTagline'>
                                Designing & Developing <br /> <span className='highlightedWord'> Beyond </span> the Ordinary
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm'>
                                <QuoteButton className={'home-quote-button'} />
                            </div>
                        </div>
                    </div>
                    <div className='row' id='aboutUsSection'>
                        <div className='row'>
                            <div className='col-sm mb-5' id='aboutUs1'>
                                This is WebGator
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm col-3'>
                                <span className='h1 text-white'>200</span> <br /> <span style={{ color: '#B8B8B8' }}>Projects Delivered</span>
                            </div>
                            <div className='col-sm col-3'>
                                <span className='h1 text-white'>5</span> <br /> <span style={{ color: '#B8B8B8' }}>Years on the market</span>
                            </div>
                            <div className='col-sm col-sm-6 text-white d-flex text-wrap'>
                                WebGator is your strategic partner in achieving online success. We specialize in crafting tailored digital solutions that drive tangible results. From concept to execution, we handle every aspect of your online journey.
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section' id='section2'>
                    <div className='row'>
                        <div className='col-sm text-white h3'>
                            We're good at
                        </div>
                    </div>
                    <div className='row row-cols-2 ms-5'>
                        <div className='col'>Service name</div>
                        <div className='col'>Service</div>
                        <div className='col'>Service name</div>
                        <div className='col'>Service</div>
                    </div>
                </section>
            </main>
        </div>
    )
}
