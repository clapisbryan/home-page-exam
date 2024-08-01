import React from 'react'
import { Container } from 'react-bootstrap'

const Contacts = () => {
    return (
        <>
            <section id="contact" class="contact py-3 bg-main-color">
                <Container>
                    <h2 className='text-center fw-bold pt-3 mb-3 mb-md-4'>Contact Us</h2>
                    <div class="contact-info">
                        <div class="contact-details">
                            <h3>Get in Touch</h3>
                            <p>If you have any questions or need further assistance, feel free to reach out to us through the contact form or the details below.</p>
                            <ul>
                                <li><i class="fas fa-map-marker-alt"></i> 123 Macaron Land, Bitter Sweet City, SC 45678</li>
                                <li><i class="fas fa-phone"></i> (123) 456-7890</li>
                                <li><i class="fas fa-envelope"></i> savoureuxmacaron@mail.com</li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Contacts
