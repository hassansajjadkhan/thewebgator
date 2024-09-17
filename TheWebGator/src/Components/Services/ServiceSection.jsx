import React from 'react'
import ServiceCard from './ServiceCard'
import services from '../../JavaScript/servicesData'

export default function ServiceSection() {
    return (
        <>
            <div className='row mt-5' id='service-cards'>
                {services.slice(0, 3).map(service => (
                    <ServiceCard
                        key={service.number}
                        number={service.number}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
            <div className='row mt-4' id='service-cards'>
                {services.slice(3, 6).map(service => (
                    <ServiceCard
                        key={service.number}
                        number={service.number}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </>
    )
}
