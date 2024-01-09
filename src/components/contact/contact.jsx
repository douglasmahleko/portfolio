import { HiChat, HiChatAlt, HiOutlineVideoCamera, HiPhoneMissedCall } from 'react-icons/hi'
import './contact.css'

function Contact(){
    return(
        <div>
            <section className="c-wrapper">
                <div className="paddings innerWidth flexCenter c-container">
                    <div className="flexColStart c-left">
                        <span className="orangeText">Our Contacts</span><br/>
                        <span className="primaryText">Easy to contact Us</span><br/>
                        <span className="secondaryText">The href attribute is required for an anchor to be keyboard accessible The href attribute is required for an anchor to be keyboard accessible</span>

                        <div className="contactModes flexColStart">
                            <div className="row flexStart">
                                <div className="mode flexColCenter">
                                    <div className="flexStart">
                                        <div className="icon flexCenter">
                                            <HiPhoneMissedCall size={25} />
                                        </div>
                                        <div className="detail flexColStart">
                                            <span className='primaryText'>Call</span>
                                            <span className='secondaryText'>01234567890</span>
                                        </div>
                                    </div>
                                    <div className="button flexCenter">
                                        Call Now
                                    </div>
                                </div>
                                <div className="mode flexColCenter">
                                    <div className="flexStart">
                                        <div className="icon flexCenter">
                                            <HiChatAlt size={25} />
                                        </div>
                                        <div className="detail flexColStart">
                                            <span className='primaryText'>Message</span>
                                            <span className='secondaryText'>01234567890</span>
                                        </div>
                                    </div>
                                    <div className="button flexCenter">
                                        Message Now
                                    </div>
                                </div>
                            </div>
                            <div className="row flexStart">
                                <div className="mode flexColCenter">
                                    <div className="flexStart">
                                        <div className="icon flexCenter">
                                            <HiOutlineVideoCamera size={25} />
                                        </div>
                                        <div className="detail flexColStart">
                                            <span className='primaryText'>Video</span>
                                            <span className='secondaryText'>01234567890</span>
                                        </div>
                                    </div>
                                    <div className="button flexCenter">
                                        Video Call Now
                                    </div>
                                </div>
                                <div className="mode flexColCenter">
                                    <div className="flexStart">
                                        <div className="icon flexCenter">
                                            <HiChat size={25} />
                                        </div>
                                        <div className="detail flexColStart">
                                            <span className='primaryText'>Chart</span>
                                            <span className='secondaryText'>01234567890</span>
                                        </div>
                                    </div>
                                    <div className="button flexCenter">
                                        Chart Now
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="c-right">
                        <div className="image-container">
                            <img src={require('./heroImage.png')} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Contact