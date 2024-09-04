// components/AboutSection.js
import Image from 'next/image';

const AboutSection = () => {
    return (
        <>
            {/* <section id="about" className="about">
                <div className="about-image">
                    <Image
                        src="/imgage/bg.jpg"
                        alt="About Us"
                        width={600}
                        height={400}
                    />
                </div>
                <div className="about-content">
                    <h2>About Us</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui
                        mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor
                        neque eu tellus rhoncus ut eleifend nibh porttitor.
                    </p>
                    <a href="#" className="btn">
                        Learn More
                    </a>
                </div>
            </section> */}
            <section className="video-section" id='about'>
                <h2 className="text-6xl font-bold text-blue-700 mb-8">Check out our YouTube video</h2>
                <div className="flex justify-center">
                    <iframe
                        src="https://www.youtube.com/embed/M57Vsm4toRg?si=aIE53APk3k4ODK9E"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    />
                </div>
            </section>
        </>
    );
};

export default AboutSection;