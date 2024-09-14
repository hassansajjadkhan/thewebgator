import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import QuoteButton from './QuoteButton'
import './Home.css'
import Proj1 from '../assets/projImg1.png'
import Proj2 from '../assets/projImg2.png'

export default function Home() {
    return (
        <div>
            <Navbar />
            <main className='home container'>
                <section className='section mt-5' id='section1'>
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
                <section className='section' id='section4'>
                    <div className='row'>
                        <div className='col-sm col-12 text-white h1'>Trusted by Industry Leaders</div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-4 col-md-4 col-lg-4 text-white mt-5' id='industry-left'>
                            <div id='industry-text'>
                                “WebGator has stood out for their promptness and responsiveness.
                                The client is extremely satisfied with their performance and technical
                                skills. All in all, they're a reliable and committed partner.”
                            </div>
                            <div id='industry-ceo'>
                                Parham Akhavan, <br />President, KUDO
                            </div>
                        </div>
                        <div className='col-sm-7 col-md-7 col-lg-7 text-white mt-5 ms-3' id='industry-right'>
                            <div id='industry-text'>
                                “Responsive and committed, WebGator provides quality work in a timely manner.
                                They efficiently provide the client's in-house team with software development
                                outsourcing services. They also ensure that the developers they provide meet
                                the client's needs, leading to an ongoing partnership.”
                            </div>
                            <div id='industry-ceo'>
                                Eric Hurst,<br />Co-Founder, Intellirent
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-5 col-md-5 col-lg-5 text-white mt-3' id='industry-bottomleft'>
                            <div id='industry-text'>
                                “WebGator helped us hit the ground running on our MVP development, and helped
                                us build out a number of important integrations across payments, authentication
                                and blockchain integrations. I would highly recommend them.”
                            </div>
                            <div id='industry-ceo'>
                                Ramesh Doddi,<br />
                                CTO, HoneyBricks
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-6 col-lg-6 text-white mt-3 ms-3' id='industry-bottomright'>
                            <div id='industry-text'>
                                “It is an absolute honor to work with such hard working and dedicated folks.
                                The effort that you give every month is a lot but you really surpassed it to
                                achieve this new record.”
                            </div>
                            <div id='industry-ceo'>
                                Nimesh Shah,<br />CEO, Orbrick
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section' id='section5'>
                    <div className='row'>
                        <div className='col-4 text-white h1' id='desc'>
                            We love crafting unforgettable digital experiences, brands and websites with people like you.
                        </div>
                        <div className='col-6 text-white h1' id='start-quote'>
                            <div>Let’s get started</div>
                            <div style={{ color: '#B8B8B8' }}>We'd love to hear about your project</div>
                            <QuoteButton className={'home-quote-button'} />
                        </div>
                    </div>
                    <div style={{ marginTop: '195px' }}><Footer /></div>
                </section>
            </main>
        </div>
    )
}
