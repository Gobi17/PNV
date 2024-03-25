import React, { Component } from 'react';
import './Contact.css';

//importing images
import gobi from '../utils/gobi.jpeg';
import subro from '../utils/subro.jpeg'

export default class Contact extends Component {
    render() {
        return (
            <>
                <div className="image-container">
                    
                    <div className="image-wrapper">
                        <img src="https://images.pexels.com/photos/5474282/pexels-photo-5474282.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Profile-Img"/>
                        <h3>RBD the great <br/><span className="name-card">Mentor</span></h3>
                        <ul>
                            <li><i className="fa fa-facebook"></i></li>
                            <li><i className="fa fa-instagram"></i></li>
                            <li><i className="fa fa-linkedin"></i></li>
                            <li><i className="fa fa-github"></i></li>
                        </ul>
                    </div>
                    
                </div>



                <div className="contact-main-container">
                    
                        <div className="image-wrapper">
                            <img src={gobi} alt="Profile-Img"/>
                            <h3>Gobi G</h3>
                            <ul>
                                <a href="https://www.facebook.com/gobi1706" alt="facebook" target="blank"><li><i className="fa fa-facebook"></i></li></a>
                                <a href="https://www.instagram.com/gobi_govind/" alt="instagram" target="blank"><li><i className="fa fa-instagram"></i></li></a>
                                <a href="https://www.linkedin.com/in/gobi-g-a31387151/" alt="linkedin" target="blank"><li><i className="fa fa-linkedin"></i></li></a>
                                <a href="https://github.com/Gobi17" alt="github"><li><i className="fa fa-github" target="blank"></i></li></a>
                            </ul>
                        </div>
                    

                    
                        <div className="image-wrapper">
                            <img src={subro} alt="Profile-Img"/>
                            <h3>Subramaniam</h3>
                            <ul>
                                <li><i className="fa fa-facebook"></i></li>
                                <li><i className="fa fa-instagram"></i></li>
                                <li><i className="fa fa-linkedin"></i></li>
                                <li><i className="fa fa-github"></i></li>
                            </ul>
                        </div>
                    

                    
                        <div className="image-wrapper">
                            <img src="https://images.pexels.com/photos/5474282/pexels-photo-5474282.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Profile-Img"/>
                            <h3>Web Developer</h3>
                            <ul>
                                <li><i className="fa fa-facebook"></i></li>
                                <li><i className="fa fa-instagram"></i></li>
                                <li><i className="fa fa-linkedin"></i></li>
                                <li><i className="fa fa-github"></i></li>
                            </ul>
                        </div>
                    
                </div>
            </>    
        )
    }
}
