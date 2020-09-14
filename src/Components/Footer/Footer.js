import React from 'react';
import './Footer.css';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default () => {
    return (
        <section className="footer_section bg-color">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="social_media">
                            <FontAwesomeIcon icon={faLinkedin}
                                             className="icon"
                                             style={{fontSize: '2rem'}} />
                            <FontAwesomeIcon icon={faInstagram}
                                             style={{fontSize: '2rem'}}
                                             className="icon"/>
                            <FontAwesomeIcon icon={faEnvelope}
                                             style={{fontSize: '2rem'}}
                                             className="icon" />
                        </div>
                    </div>
                    <div className="col-lg-6 rights_reserved">
                        @2020 Rahul Raj Chakravorty. All rights reserved
                    </div>
                </div>
            </div>
        </section>
    );
}