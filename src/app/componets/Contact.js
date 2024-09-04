// components/ContactSection.js
const ContactSection = () => {
    return (
        <div className="">


            {/* <section id="contact" className="contact  ">
                <div className="contact-info">
                    <h2 className="text-5xl font-bold text-blue-700 mb-8">Contact Information</h2>
                    <p className="text-xl  text-gray-500 mb-8">Phone: +14567890090</p>
                    <p className="text-xl  text-gray-500 mb-8">Email: info@olpp.com</p>
                    <p className="text-xl  text-gray-500 mb-8">Address: Triq road , karachi, Pakistan</p>
                </div>
                <div className="contact-form">
                    <h2>Send us a message</h2>
                    <form >
                        <input type="text" placeholder="Name" required />
                        <input type="email" placeholder="Email" required />
                        <textarea placeholder="Message" rows={4} required />
                        <button type="submit" className="btn">
                            Submit
                        </button>
                    </form>
                </div>

            </section> */}

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
                        <div className="relative mb-4">
                            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
                                Name
                            </label>
                            <input
                                type="text"
                                id="full-name"
                                name="full-name"
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
                                name="email"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                                Message
                            </label>
                            <input
                                type="text"
                                id="message"
                                name="message"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <button className="btn">
                            Submit
                        </button>

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