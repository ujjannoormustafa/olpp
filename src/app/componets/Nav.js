import Link from 'next/link';

const Nav = () => {
    return (
        <nav>
            <Link href={"/"}>
                <div className="logo">Olpp</div>

            </Link>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="#vision">Vision</Link>
                </li>
                <li>
                    <Link href="#about">About</Link>
                </li>
                <li>
                    <Link href="#contact">Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;