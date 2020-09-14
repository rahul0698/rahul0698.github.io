import React from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Jumbotron from './Components/Jumbotron/Jumbotron';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Testimonial from './Components/Testimonials/Testimonial';
import MyWork from './Components/My_Work/My_work';
import Clients from './Components/Clients/Client';
import Footer from './Components/Footer/Footer';

function App() {
    return (
        <div>
            <Header/>
            <Jumbotron/>
            <About/>
            <Services/>
            <Testimonial/>
            <MyWork/>
            <Clients/>
            <Footer/>
        </div>
    );
}

export default App;
