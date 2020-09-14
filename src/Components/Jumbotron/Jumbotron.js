import React from 'react';
import './Jumbotron.css';

import Home from '../../assets/images/home.jpg';


export default () => {
    return  (
        <section style={{
            background: `url(${Home}) no-repeat`,
            minHeight: '100vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
           <div className="container">
               <h1 className="greetingText">Hello, Holla, नमस्ते !</h1>
               <p className="small-intro">I grind HTML and CSS and then weld them with ReactJs and Angular into beautiful and efficient websites</p>
           </div>
        </section>
    );
}