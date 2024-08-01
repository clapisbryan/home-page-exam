import React from 'react'
import { Button, Container } from 'react-bootstrap'

const Hero = () => {
    return (
        <>
            <section id="hero" class="hero-section">
                <Container>
                    <div class="hero-content">
                        <h1 className='fw-bold'>Discover Our Savoureux Macarons</h1>
                        <p>Each bite is a burst of seasonal freshness and gourmet delight.</p>
                        <Button href="#collection" className='rounded-5'>Explore Our Collection</Button>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Hero
