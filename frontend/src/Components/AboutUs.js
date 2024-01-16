import React from 'react';
import './AboutUs.css';
import Navbar from '../Components/Navbar';
import drop from './Assets/drop.png';
import innovation from './Assets/innovation.png'
import netwotk from './Assets/netwotk.png'
import noti from './Assets/noti.png'
import cost from './Assets/cost.png'
import save from './Assets/save.png'



function AboutUs(){
    return(
        <div>
            <Navbar/>
            <div className='bg'>
        <section id="about-us">
            <div className="about">
                <h1 className="heading">What is it all about ?</h1> <br></br>
                <p className="head-des" >We solve the problem of blood emergencies by connecting <span
                        className="one-line"><br></br></span> blood donors directly with people in blood need. </p>
                        <br></br>
                <div className="row">
                    <div className="about-col">
                        <div className="image">
                            <img src={drop} alt="" />
                        </div>
                        <h3>What do we do ?</h3>
                        <p>We connect blood donors with recipients, without any intermediary such as blood banks, for an
                            efficient and seamless process.</p>
                    </div>
                    <div className="about-col">
                        <div className="image">
                            <img src={innovation} alt=""/>
                        </div>
                        <br></br>
                        <h3>Innovative</h3>
                        <p>Blood Buddy is an innovative approach to address global health.We provide <span>immediate
                                access</span> to blood donors.</p>
                    </div>
                    <div className="about-col">
                        <div className="image">
                            <img src={netwotk} alt=""/>
                        </div>
                        <h3>Network</h3>
                        <p>Blood Buddy is one of several community organizations working together as a network that
                            responds to emergencies in an efficient manner.</p>
                    </div>
                    
                    <div className="about-col">
                        <div className="image">
                            <img src={noti} alt=""/>
                        </div>
                        <h3>Get notified</h3>
                        <p>Blood Buddy Connect works with network partners to connect blood donors and recipients
                            through an automated SMS service and a mobile app.</p>
                    </div>
                    <div className="about-col">
                        <div className="image">
                            <img src={cost} alt=""/>
                        </div>
                        <h3>Totally Free</h3>
                        <p>Blood Budyy's ultimate goal is to provide an easy -to-use, easy-to-access, fast, efficient,
                            and reliable way to get life-saving blood, totally <span>Free of cost.</span></p>
                    </div>
                    <div className="about-col">
                        <div className="image">
                            <img src={save} alt=""/>
                        </div>
                        <h3>Save Life</h3>
                        <p>We are a non profit foundation and our main objective is to make sure that everything is done
                            to protect vulnerable persons.<span>Help
                                us by making a gift!</span></p>
                    </div>
                </div><br></br><br></br>
            </div>
        </section>
    </div>
        </div>
    );
}

export default AboutUs;