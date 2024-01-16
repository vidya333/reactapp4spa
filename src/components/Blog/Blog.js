import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './Blog.css';

export default function Blog() {
    return ( 
        <>
        <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
      autoplay={{delay:2500}}
      className='animate__animated animate__fadeInRight animate__delay-0.5s'
       >
       
       <SwiperSlide>
       <div className='blog'>
            <Card style={{ width: '27rem' }} className="cardbg">
                
                    <img src='card1.jpg' alt="1"></img>
                
                <Card.Body>
                    <Card.Title>Travel Anywhere</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
        </div>
       </SwiperSlide>
       <SwiperSlide>
       <div className='blog'>
            <Card style={{ width: '27rem' }} className="cardbg">
                
                    <img src='card2.jpg' alt="2"></img>
                
                <Card.Body>
                    <Card.Title>Travel Anywhere</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
        </div>
       </SwiperSlide>
       <SwiperSlide>
       <div className='blog'>
            <Card style={{ width: '27rem' }} className="cardbg">
                
                    <img src='card3.jpg' alt="3"></img>
                
                <Card.Body>
                    <Card.Title>Travel Anywhere</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
        </div>
       </SwiperSlide>
       <SwiperSlide>
       <div className='blog'>
            <Card style={{ width: '27rem' }} className="cardbg">
                
                    <img src='card4.jpg' alt="4"></img>
                
                <Card.Body>
                    <Card.Title>Travel Anywhere</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
        </div>
       </SwiperSlide>
        



        </Swiper>
        </>
    )
}
