import React from 'react';
import './Client.css';
import Bridgify from '../../assets/images/client_logos/Bridgify_logo.png';
import Cubid from '../../assets/images/client_logos/cubid_logo.png';
import BassetAndGold from '../../assets/images/client_logos/basset-and-gold-logo-white-svg.svg';
import Wisdo from '../../assets/images/client_logos/wisdo.svg';

export default () => {
    const logos = [
        {
            id: 0,
            url: Bridgify,
            name: 'Bridgify'
        },
        {
            id: 1,
            url: Cubid,
            name: 'Cubid'
        },
        {
            id: 2,
            url: BassetAndGold,
            name: 'Basset_and_gold'
        },
        {
            id: 3,
            url: Wisdo,
            name: 'Bridgify'
        },
    ]
    return (
        <section className="client_section">
            <div className="container">
                <div className="row">
                    {
                        logos.map(logo => (
                            <div className="col-lg-2" key={logo.id}>
                                <div className="customer"
                                     style={{
                                         backgroundImage: `url(${logo.url})`,
                                         backgroundSize: 'contain',
                                         backgroundRepeat: 'no-repeat',
                                         backgroundPosition: '0% 50%'
                                     }}></div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}