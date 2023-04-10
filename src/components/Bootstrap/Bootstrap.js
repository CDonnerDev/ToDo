import React from 'react'
import './Bootstrap.css'
import  {Carousel, Container}  from 'react-bootstrap'

import image from '../../Images/Games3.jpg'
import image2 from '../../Images/Work3.jpg'
import image3 from '../../Images/Life3.jpg'

export default function Bootstrap() {
  return (
    <section className="aboutCreator">
        <main>
        <Carousel controls={false} fade>
          <Carousel.Item>
            <img src={image} alt="First Slide" className="d-block w-100" />
            <Carousel.Caption>
              <h3>First Slide</h3>
              <p>This is a knife I pulled playing Counter Strike</p>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <img src={image2} alt="Second Slide" className="d-block w-100" />
            <Carousel.Caption>
              <h3>Second Slide</h3>
              <p>This is a picture of me working the closing shift</p>
            </Carousel.Caption>
          </Carousel.Item>
         
          <Carousel.Item>
            <img src={image3} alt="Third Slide" className="d-block w-100" />
            <Carousel.Caption>
              <h3>Third Slide</h3>
              <p>This is me and my fiance</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
            
        </main>
    </section>
  )
}
