import React from 'react'
import { Carousel } from 'react-bootstrap'
import './slider.css'

export default function Slider() {
    return (
        <div>
            <Carousel className="slider">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/assets/img/slider(1).jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.apple.com/uk/iphone-13/images/overview/cameragallery/memories_hw_static__cusdx5rolvgy_large.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://9to5mac.com/wp-content/uploads/sites/6/2021/03/how-to-remove-iphone-photo-black-bars.jpg?quality=82&strip=all&w=1600"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
