import React from 'react'
import Navbar from './Navbar'
import QuoteButton from './QuoteButton'
import './Home.css'

export default function Home() {
    return (
        <div>
            <Navbar />
            <main className='home container-fluid'>
                <div className='row'>
                    <div className='col-sm' id='subLine'>
                        We create world-class digital products that communicate clearly.
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm' id='mainTagline'>
                        Designing & Developing <br /> <span style={{ fontSize: '50px' }} className='logoBrackets'>Beyond</span> the Ordinary
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm'>
                        <QuoteButton className={'home-quote-button'} />
                    </div>
                </div>
            </main>
        </div>
    )
}
