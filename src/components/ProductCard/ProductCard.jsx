import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

import CherryMacaronImg from "../../assets/images/cherry-macarons.png";
import ChocolateMacaronImg from "../../assets/images/chocolate-macarons.png";
import CaramelMacaronImg from "../../assets/images/salted-caramel-macarons.png";

const ProductCard = () => {
	return (
		<div>
			<section id='collection' className='py-3 py-md-5'>
				<Container>
					<h2 className='text-center mb-3 mb-md-5 fw-bold'>Our Macaron Collection</h2>
					<Row>
						<Col sm={12} md={4} className='mb-3'>
							<Card className='prod-card'>
								<Card.Img src={CherryMacaronImg} className='prod-img mx-auto p-4' />
								<Card.Body className='text-center'>
									<Card.Title className='text-center'>Cherry Macarons</Card.Title>
									<Card.Text className='text-center'>A delightful blend of cherry and almond flavors, perfect for any occasion.</Card.Text>
									<p>Best Seller</p>
								</Card.Body>
							</Card>
						</Col>
						<Col sm={12} md={4} className='mb-3'>
							<Card className='prod-card'>
								<Card.Img src={ChocolateMacaronImg} className='prod-img mx-auto p-4' />
								<Card.Body className='text-center'>
									<Card.Title className='text-center'>Chocolate Macarons</Card.Title>
									<Card.Text className='text-center'>Rich, velvety chocolate macarons that are a chocolate lover’s dream.</Card.Text>
									<p>Best Seller</p>
								</Card.Body>
							</Card>
						</Col>
						<Col sm={12} md={4} className='mb-3'>
							<Card className='prod-card'>
								<Card.Img src={CaramelMacaronImg} className='prod-img mx-auto p-4' />
								<Card.Body className='text-center'>
									<Card.Title className='text-center'>Salted Caramel Macarons</Card.Title>
									<Card.Text className='text-center'>Rich, velvety chocolate macarons that are a chocolate lover’s dream.</Card.Text>
									<p>Best Seller</p>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>
		</div>
	)
}

export default ProductCard
