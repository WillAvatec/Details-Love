import { Carousel } from "react-responsive-carousel"
import {Component} from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slides from "./slides.js"

export default class Slider extends Component{

    render(){
        return (
            <>
            {slides &&  (
                <div className="slider-container">
                    <Carousel 
                    infiniteLoop
                    autoplay
                    autoFocus
                    emulateTouch
                    swipeable
                    interval={1200}
                    showArrows={false}
                    showThumbs={false}
                    showStatus={false}
                    >
                        <div>
                            <img alt="Slider 1" src={slides.slide_1}/>
                        </div>
                        <div>
                            <img alt="Slider 2" src={slides.slide_2}/>
                        </div>
                        <div>
                            <img alt="Slider 3" src={slides.slide_3}/>
                        </div>
                    </Carousel>
                </div>
                )
            }
            </>
        )
    }
}