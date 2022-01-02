import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import ContactInfo from './ContactInfo/ContactInfo';
import EmailContactFrom from './EmailContactFrom/EmailContactFrom';

const Contact = () => {
    return (
        <div>
            <div className=' container'>
                <NavBar />
                <div>
                    <ContactInfo />
                </div>
                <br /><br /><br />
                <div>
                    <EmailContactFrom />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;