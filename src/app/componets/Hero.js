import Link from 'next/link';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1 className='herotxt'>Every Pakistani Can <br /> Now Have A Laptop</h1>
                {/* < h1 className='hidden herotxt'>Every Pakistani Can <br />Now Have A Laptop</h1> */}
                <Link href="#"
                    className="btn">Know More
                </Link>
            </div>
        </section>
    );
};

export default Hero;