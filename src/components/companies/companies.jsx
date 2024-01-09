import './companies.css'

function Companies(){
    return(
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                <img src={require("./logo1.png")} alt="" />
                <img src={require("./logo2.png")} alt="" />
                <img src={require("./logo3.png")} alt="" />
                <img src={require("./logo5.png")} alt="" />
            </div>
        </section>
    )
}
export default Companies