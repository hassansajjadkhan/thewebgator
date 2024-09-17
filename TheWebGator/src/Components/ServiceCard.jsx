import React from 'react'

export default function ServiceCard({ number, title, description }) {
    return (
        <div className='col-4 me-4' id='service-card'>
            <div className='service-number mb-2'>
                <span>{number}</span>
            </div>
            <h4 className='text-white' id='service-title'>
                {title}
            </h4>
            <p style={{ color: '#b8b8b8' }}>
                {description}
            </p>
        </div>
    )
}


