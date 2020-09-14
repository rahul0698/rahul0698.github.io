import React from 'react';
import './Services.css';
import {faHtml5, faAngular, faCss3, faReact} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default () => {
    return (
        <section className="bg-color services_section">
            <div className="container">
                <div className="services_title">Services</div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="icon">
                            <FontAwesomeIcon icon={faHtml5}/>
                        </div>
                        <h3 className="services_heading">HTML Coding</h3>
                        <p className="service_description">
                            Architecture website using HTML latest trend.
                        </p>
                    </div>
                    <div className="col-lg-3">
                        <div className="icon">
                            <FontAwesomeIcon icon={faAngular}/>
                        </div>
                        <h3 className="services_heading">Angular Development</h3>
                        <p className="service_description">
                            Design and develop Single Page Application on Angular framework which is compatible across
                            all platforms i.e. mobile, web and native desktop.
                        </p>
                    </div>
                    <div className="col-lg-3">
                        <div className="icon">
                            <FontAwesomeIcon icon={faCss3}/>
                        </div>
                        <h3 className="services_heading">CSS Styling</h3>
                        <p className="service_description">
                            Apply style to website using Cascading Style Sheet and make attractive website for seamless user interface.
                        </p>
                    </div>
                    <div className="col-lg-3">
                        <div className="icon">
                            <FontAwesomeIcon icon={faReact}/>
                        </div>
                        <h3 className="services_heading">ReactJs Development</h3>
                        <p className="service_description">
                            Design and develop Single Page Application on React framework which is compatible across
                            all platforms i.e. mobile, web and native desktop.
                        </p>
                    </div>
                </div>
                <hr style={{border: '1px solid #fff'}}/>
                <div>
                    <p className="lead">
                        Would you like to know more or just discuss something?
                    </p>
                    <p>
                        <a href="" className="contact_button button">Contact Me</a>
                    </p>
                </div>
            </div>
        </section>
    );
}