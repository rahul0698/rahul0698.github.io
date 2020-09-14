import React from 'react';
import './About.css';
import ProfilePic from '../../assets/images/profile_pic.jpg';

export default () => {
    return (
        <section className="about_section">
            <div className="about container">
                <div>
                    <h2 className="about_me_title">About Me</h2>
                </div>
                <div className="row">
                   <div className="col-lg-6 about_me_description">
                       <p>
                           I am an <strong>ambitious</strong> and driven Software Engineer with four years of experience in software development as well as project management. Over time,
                           I have been involved with developing progressive web applications. While having preferences and specialisms,
                           I am not attached to one particular technology and am open to learning new things and broadening my skills. I am tech-savvy, a <strong>quick learner </strong>
                           and highly motivated to thrive in the software development field.
                       </p>
                       <p>
                           My education and career have helped me to become flexible and to develop an array of skills including <strong>problem-solving</strong>,
                           <strong> self-management</strong> and <strong>excellent communication</strong> both verbally and in writing. I am punctual, a good team player and show initiative for improvement.
                       </p>
                       <p>
                           My colleagues have described me as hard-working, quick to deliver results, and dedicated.
                       </p>
                   </div>
                   <div className="col-lg-6 skills">
                       <div className="skill-item">
                           <div className="skill-title">HTML5</div>
                           <div className="progress">
                               <div role="progressbar"
                                    style={{width: '80%'}}
                                    className="progress_bar"
                                    aria-valuemin="80"
                                    aria-valuemax="100"
                                    aria-valuenow="0"></div>
                           </div>
                       </div>
                       <div className="skill-item">
                           <div className="skill-title">CSS3</div>
                           <div className="progress">
                               <div role="progressbar"
                                    style={{width: '75%'}}
                                    className="progress_bar"
                                    aria-valuemin="75"
                                    aria-valuemax="100"
                                    aria-valuenow="0"></div>
                           </div>
                       </div>
                       <div className="skill-item">
                           <div className="skill-title">React Js</div>
                           <div className="progress">
                               <div role="progressbar"
                                    style={{width: '80%'}}
                                    className="progress_bar"
                                    aria-valuemin="80"
                                    aria-valuemax="100"
                                    aria-valuenow="0"></div>
                           </div>
                       </div>
                       <div className="skill-item">
                           <div className="skill-title">Angular 2, 4 , 5 ...</div>
                           <div className="progress">
                               <div role="progressbar"
                                    style={{width: '80%'}}
                                    className="progress_bar"
                                    aria-valuemin="80"
                                    aria-valuemax="100"
                                    aria-valuenow="0"></div>
                           </div>
                       </div>
                       <div className="skill-item">
                           <div className="skill-title">Javascript</div>
                           <div className="progress">
                               <div role="progressbar"
                                    style={{width: '60%'}}
                                    className="progress_bar"
                                    aria-valuemin="60"
                                    aria-valuemax="100"
                                    aria-valuenow="0"></div>
                           </div>
                       </div>
                   </div>
                   <div className="col-lg-6 profile_pic">
                       <div className="image-fluid" style={{
                           background: `url(${ProfilePic}) no-repeat`,
                           backgroundPosition: '0 25%',
                           backgroundSize: 'cover'}}></div>
                   </div>
                </div>
            </div>
        </section>
    )
}