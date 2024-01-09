import './residencies.css'
import {Swiper, useSwiper, SwiperSlide} from 'swiper/react'
import "swiper/css"
import data from './slider.json'
import './residencies.css'
import { sliderSettings } from './common'

function Residencies(){
    return(
        <section className="r-wrapper">
            <div className="paddings r-container">
                <div className="r-head flexColStart">
                    <span className='orangeText'>Best Choices</span>
                    <span className='primaryText'>Popular residencies</span>
                </div>
                <Swiper {...sliderSettings}>
                    {
                        data.map((card, i) => (
                            <SwiperSlide>
                                <div className="r-card flexColStart">
                                    <img src={require(`${card.image}`)} alt="" />
                                    <span className="r-price secondaryText">
                                        <span style={{color:"orange"}}>$</span>
                                        <span> {card.price} </span>
                                    </span>
                                    <span className="primaryText">
                                        {card.name}
                                    </span>
                                    <span className="secondaryText">
                                        {card.detail}
                                    </span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}
export default  Residencies