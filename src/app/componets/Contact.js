// components/ContactSection.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactSection = () => {
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
                alert("Message sent sucessfully!")
            }, (error) => {
                console.error('Failed to send email. Error:', error.text);
            });

        setFormData({ name: '', email: '', message: '' }); // Clear the form
    };

    return (
        <div className="">
            <section className="text-gray-600 body-font" id="contact">
                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 className="title-font font-bold text-5xl text-blue-700">
                            Contact Information
                        </h1>
                        <p className="leading-relaxed mt-4">
                            <p className="text-xl  text-gray-500 mb-8">Phone: +14567890090</p>
                            <p className="text-xl  text-gray-500 mb-8">Email: info@olpp.com</p>
                            <p className="text-xl  text-gray-500 mb-8">Address: Triq road , karachi, Pakistan</p>
                        </p>
                    </div>
                    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                            Send Message
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="relative mb-4">
                                <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="full-name"
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    name='message'
                                    onChange={handleChange}
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <button className="btn" type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-900 py-8 text-center">
                <p>&copy; 2024 Olpp. All rights reserved.</p>
            </footer>


        </div>
    );
};

export default ContactSection;