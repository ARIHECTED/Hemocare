import React from 'react';
import './AboutUs.css';
import Navbar from '../Components/Navbar';
import drop from './Assets/drop.png';
import innovation from './Assets/innovation.png'
import netwotk from './Assets/netwotk.png'
// import noti from './Assets/noti.png'
import cost from './Assets/cost.png'
import save from './Assets/save.png'



function AboutUs(){
    return(
        <div>
            <Navbar/>
            <div className='bg'>
        <section id="about-us">
            <div className="about">
                <h1 className="heading">What are we all about ?</h1> <br></br>
                {/* <p className="head-des" >We solve the problem of blood emergencies by connecting <span
                        className="one-line"><br></br></span> blood donors directly with people in blood need. </p> */}
                        <br></br>


                <div className="row">

                    <div className="about-col" id="our-story">
                        <div className="image">
                            <img src={drop} alt="" />
                        </div>
                        <div className='text'>
                            <h3>Our Story</h3>
                            <p>At Hemocare, our journey began with a shared commitment to make a positive impact on the community. Fueled by the passion for saving lives through blood donation, our story unfolds with every heartbeat that receives the gift of life. Learn more about the roots of Hemocare and how our mission has evolved over time.</p>
                        </div>
                    </div>


                    <div className="about-col" id="benefits">
                        <div className="image">
                            <img src={innovation} alt=""/>
                        </div>
                        <br></br>
                        <div className='text'>
                            <h3>Benefits</h3>
                            <p>Discover the myriad benefits of joining the Hemocare community. From fostering a culture of compassion to creating a network of blood donors and recipients, Hemocare brings together individuals with a shared purpose. Explore the advantages of being part of a movement that goes beyond personal contributions to make a collective difference.</p>
                        </div>
                    </div>


                    <div className="about-col" id="team">
                        <div className="image">
                            <img src={netwotk} alt=""/>
                        </div>
                        <div className='text'>
                            <h3>Team</h3>
                            <p> Get to know the heartbeat of Hemocare – our team members. Each individual brings a wealth of experience, expertise, and enthusiasm to our mission. From the founders to every member, our team is committed to creating a positive impact in the world of blood donation. Meet the faces shaping the future of Hemocare.</p>
                        </div>
                    </div>
                    

                    <div className="about-col" id="careers">
                        <div className="image">
                            <img src={save} alt=""/>
                        </div>
                        <div className='text'>
                            <h3>Careers</h3>
                            <p>Are you passionate about making a difference? Explore career opportunities at Hemocare and become part of a dynamic team dedicated to saving lives. As we continue to grow, we are on the lookout for individuals who share our vision and values. Discover the fulfilling career paths awaiting you at Hemocare.</p>
                        </div>
                    </div>


                    {/* <div className="about-col">
                        <div className="image">
                            <img src={noti} alt=""/>
                        </div>
                        <div className='text'>
                            <h3>Get notified</h3>
                            <p>Hemocare works with network partners to connect blood donors and recipients
                            through an automated SMS service.</p>
                        </div>
                    </div> */}


                    <div className="about-col">
                        <div className="image">
                            <img src={cost} alt=""/>
                        </div>
                        <div className='text'>
                            <h3>Free of Cost</h3>
                            <p>At Hemocare, we believe in the power of altruism without financial barriers. Our commitment to saving lives is reflected in our policy of providing blood donation services completely free of cost. We understand the importance of accessibility and aim to ensure that the gift of life remains a selfless act, available to everyone regardless of economic status. Learn more about how Hemocare operates on the principle that compassion knows no price tag.</p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    </div>
        </div>
    );
}

export default AboutUs;