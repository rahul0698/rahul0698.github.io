import React from "react";
import './My_Work.css';
import DemoImage from '../../assets/images/demo_image.jpg';

export default () => {
    const projectList = [
        {
            id: 0,
            project_name: 'Bridgify',
            short_description: ''
        },
        {
            id: 1,
            project_name: 'Cubid',
            short_description: ''
        },
        {
            id: 2,
            project_name: 'Basset & Gold',
            short_description: ''
        },
        {
            id: 3,
            project_name: 'Wisdo',
            short_description: ''
        },
        {
            id: 4,
            project_name: 'Wisdo Payment Gateway',
            short_description: ''
        },
        {
            id: 5,
            project_name: 'Moneta',
            short_description: ''
        },
        {
            id: 6,
            project_name: 'Playsive',
            short_description: ''
        },
        {
            id: 7,
            project_name: 'Caspero',
            short_description: ''
        }
    ];
    return (
       <section className="my_work_section bg-color">
            <div className="container">
                <p className="my_work_heading">My Work</p>
                <p className="my_work_subHeading">
                    I have worked on dozens of projects so I have picked only the latest for you.
                </p>
                <ul className="work_type">
                    <li>All</li>
                    <li>Web Development</li>
                    <li>Payment Integration</li>
                    <li>Design</li>
                </ul>
                <div className="project_reference_container">
                    <div className="row">
                        {
                            projectList.map(project => (
                                    <div className="col-lg-3" key={project.id}>
                                        <div className="project_reference">
                                            <img src={DemoImage} alt="" className="img-fluid"/>
                                            <div className="overlay">
                                                <div className="inner">
                                                    <p className="project_name">
                                                        {project.project_name}
                                                    </p>
                                                    <p className="short_description"></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
       </section>
    )
}