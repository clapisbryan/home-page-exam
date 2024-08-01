import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';

import CherryMacaronImg from "../../assets/images/cherry-macarons.png";
import ChocolateMacaronImg from "../../assets/images/chocolate-macarons.png";
import CaramelMacaronImg from "../../assets/images/salted-caramel-macarons.png";

const CarouselImg = () => {
    return (
        <>
            <section id='gallery' className='py-3 py-md-5'>
                <Container fade>
                    <h2 className='text-center fw-bold mb-3 mb-md-5'>Gallery</h2>
                    <Carousel data-bs-theme="dark">
                        <Carousel.Item>
                            <div className="w-100 d-flex align-items-center justify-content-center bg-light py-5">
                                <img
                                    className="mx-auto"
                                    src={CherryMacaronImg}
                                    alt="First slide"
                                />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="w-100 d-flex align-items-center justify-content-center bg-light py-5">
                                <img
                                    className="mx-auto"
                                    src={ChocolateMacaronImg}
                                    alt="Second slide"
                                />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="w-100 d-flex align-items-center justify-content-center bg-light py-5">
                                <img
                                    className="mx-auto"
                                    src={CaramelMacaronImg}
                                    alt="Third slide"
                                />
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </section>
        </>
    )
}

export default CarouselImg
