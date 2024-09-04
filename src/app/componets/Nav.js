import Link from 'next/link';

const Nav = () => {
    return (
        <nav>
            <div className="logo">Olpp</div>
            <ul>
                <li>
                    <Link href="/home">Home</Link>
                </li>
                <li>
                    <Link href="/services">Services</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;