import React from 'react'
import Navbar from './Navbar'
import QuoteButton from './QuoteButton'
import './Home.css'
import Proj1 from '../assets/projImg1.png'
import Proj2 from '../assets/projImg2.png'

export default function Home() {
    return (
        <div>
            <Navbar />
            <main className='home'>
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
                        <div className='col-sm text-white h1'>
                            We're good at
                        </div>
                    </div>
                    <div className='row row-cols-1 row-cols-md-2' id='service-row'>
                        <div className='col-mb-4' id='service'>
                            <div id='service-titles'>Design</div>
                            <span id='service-desc'>We craft digital experiences that captivate and convert. Our expert designers transform your vision into stunning, user-friendly websites.</span>
                        </div>
                        <div className='col-mb-4' id='service'>
                            <div id='service-titles'>Development</div>
                            <span id='service-desc'>From websites and online stores to robust web portals and feature-rich mobile apps, we build digital solutions that drive results.</span>
                        </div>
                        <div className='col-mb-4' id='service'>
                            <div id='service-titles'>Software Development</div>
                            <span id='service-desc'>We craft robust software solutions tailored to your unique needs. From concept to deployment, our expert team delivers exceptional software products.</span>
                        </div>
                        <div className='col-mb-4' id='service'>
                            <div id='service-titles'>Cloud</div>
                            <span id='service-desc'>Harness the power of the cloud with our expert solutions. We deliver scalable and secure cloud services tailored to your business needs.</span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm col-sm-12 text-white h3'>
                            Our Work in Action
                        </div>
                        <div className='col-sm col-sm-12' id='service-desc'>
                            Projects
                        </div>
                    </div>
                </section>
                <section className='section' id='section3'>
                    <div className='row justify-content-center align-items-stretch text-center d-flex' id='projects-row'>
                        <div className='col-md-5 d-flex flex-column' id='project-col'>
                            <img src={Proj1} alt='placeholder' className='img-fluid' id='proj-img' style={{ padding: '10px', maxWidth: '100%', height: 'auto' }} />
                            <h3 className='text-white mt-3'>Megapetrol</h3>
                            <div style={{ color: '#B8B8B8' }}>Visual identity, UX/UI design and development for the oil trading company from Switzerland</div>
                        </div>
                        <div className='col-md-5 d-flex flex-column' id='project-col'>
                            <img src={Proj2} alt='placeholder' className='img-fluid' id='proj-img' style={{ padding: '10px', maxWidth: '100%', height: 'auto' }} />
                            <h3 className='text-white mt-3'>Armen Nayen</h3>
                            <div style={{ color: '#B8B8B8' }}>Branding, UX/UI design and development for a doctor</div>
                        </div>
                    </div>
                    <div className='text-white text-decoration-underline mt-5 h4'>View All Projects</div>
                </section>


            </main>
        </div>
    )
}
