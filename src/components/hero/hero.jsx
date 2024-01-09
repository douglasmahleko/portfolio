import './hero.css'
import { HiLocationMarker } from "react-icons/hi";
import CountUp from 'react-countup'
function Hero(){
    return(
        <section className="herowrapper">
            <div className="paddings innerWidth flexCenter herocontainer">

                <div className="flexColStart heroleft">
                    <div className="hero-title">
                        <div className="orange-circle" ></div>
                        <h1>
                            Descover <br />
                            Most Suiteable <br /> Property
                        </h1>
                    </div>
                    <div className="flexColStart hero-des">
                        <span className='secondaryText'>Find a variety of properties that suit you very well</span>
                        <span className='secondaryText'>Forget all difficulties in finding residencies</span>

                    </div>
                    <div className="search-bar">
                        <HiLocationMarker size={25} color="var(--blue)" />
                        <input type="text" />
                        <button className="button">Search</button>
                    </div>
                    <div className="stats flexCenter">
                        <div className="stat flexColCenter">
                            <span>
                                <CountUp start={8800} end={9000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Premium Products</span>
                        </div>
                        <div className="stat flexColCenter">
                            <span >
                                <CountUp start={1950} end={2000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Happy Customers</span>
                        </div>
                        <div className="stat flexColCenter">
                            <span>
                                <CountUp end={28} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Award Winnings</span>
                        </div>
                    </div>
                </div>
                <div className="flexCenter heroright">
                    <div className="image-container">
                        <img src={require("./heroImage.png")} alt="" />
                    </div>
                </div>

            </div>
        </section>
        )
}
export default Hero