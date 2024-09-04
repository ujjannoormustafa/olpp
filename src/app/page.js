
import Hero from "./componets/Hero";
import LaptopModel from "./componets/LaptopModel";
import Nav from "./componets/Nav";
import About from "./componets/About"
import Contact from "./componets/Contact"

export default function Home() {
  return (
    <main className="">
      <Nav />
      <Hero />
      <LaptopModel />
      <About />
      <Contact />
    </main>
  );
}
