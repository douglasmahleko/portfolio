
import './footer.css'

function Footer(){
    return(
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                <div className="f-left flexColStart">
                    <img src={require("./logo.png")} alt="" width={120} />
                    <span className="secondaryText">
                        Our Vision is to make all people <br />
                        the best place to live for them
                    </span>
                </div>
                <div className="f-right flexColStart">
                    <span className="primaryText">Information</span>
                    <span className="secondaryText"> 123 Unit M Chitungwiza Harare</span>
                    <div className="f-menu flexCenter">
                        <span>Property</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>About Us</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer