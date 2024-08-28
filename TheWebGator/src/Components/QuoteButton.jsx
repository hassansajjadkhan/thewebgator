import React from 'react'

export default function QuoteButton({ className }) {
    return (
        <button className={`btn ${className}`} style={{ backgroundColor: '#3BAF4A' }}>
            Get a Quote
        </button>
    )
}
