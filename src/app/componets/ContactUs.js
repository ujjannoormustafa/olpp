import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_gy1nke1',        // Replace with your Service ID
            'template_1p44txb',       // Replace with your Template ID
            e.target,
            '7LauYWTSCO_JkFVER'            // Replace with your User ID
        )
            .then((result) => {
                console.log('Email successfully sent!', result.text);
            }, (error) => {
                console.error('Failed to send email. Error:', error.text);
            });

        setFormData({ name: '', email: '', message: '' }); // Clear the form
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
            />
            <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
            />
            <button className='text-gray-800' type="submit">Send</button>
        </form>
    );
};

export default ContactForm;
