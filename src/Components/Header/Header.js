import React, { useState } from 'react';
import  './Header.css';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

export default () => {
    const [classes, setClasses] = useState(['menu']);

    const addRemoveClass = () =>  {
        if(classes.includes('showList')) {
            setClasses(['menu']);
        } else {
            setClasses(state => [...state, 'showList']);
        }
    }

    return (
        <header>
            <div className="title">
                Web Engineer
                <FontAwesomeIcon icon={faBars}
                                 onClick={addRemoveClass}
                                 className="hamburger">
                </FontAwesomeIcon>
            </div>
            <ul className={classes.join(' ')}>
                <li>Intro</li>
                <li>About</li>
                <li>Services</li>
                <li>Testimonials</li>
                <li>My Work</li>
                <li>Clients</li>
                <li>contact</li>
            </ul>
        </header>
    )
}