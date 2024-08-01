import React from 'react'
import { Container } from 'react-bootstrap'

const MainFooter = () => {
    return (
        <>
            <footer id="contact" class="footer bg-main-color py-2 border-light">
                <hr />
                <Container>
                    <div class="footer-content text-center">
                        <p className='m-0'>&copy; 2024 Savoureux Macarons. All rights reserved.</p>
                    </div>
                </Container>
            </footer>

        </>
    )
}

export default MainFooter
