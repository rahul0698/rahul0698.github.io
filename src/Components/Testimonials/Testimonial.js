import React from "react";
import "./Testimonial.css";
import Udi from "../../assets/images/udi.jpeg";

export default () => {
    return (
        <section className="testimonial_section">
            <div className="container">
                <div className="testimonial_heading">
                    My customers said about me
                </div>
                <p className="lead">
                    I am always glad to hear that my customers leave satisfied.
                    Some of them shared with you their insights on our cooperation.
                </p>
                <div className="testimonial_cards">
                    <article className="card left">
                        <p>Very professional, cooperative and also fun to work with</p>
                        <div className="author">
                            <div className="author_pic"
                                 style={{
                                     background: `url(${Udi})`,
                                     backgroundPosition: '50% 24%',
                                     borderRadius: '50%',
                                     backgroundSize: 'contain',
                                     backgroundRepeat: 'no-repeat'}}>
                                <div className="semi-circle"></div>
                            </div>
                            <p className="author_details">
                                Udi Leutashi
                                <span>Co-Founder, CTO, Bridgify</span>
                            </p>
                        </div>
                    </article>
                    <article className="card">

                    </article>
                </div>
            </div>
        </section>
    )
}