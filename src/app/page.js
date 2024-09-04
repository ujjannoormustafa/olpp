
"use client"
import Hero from "./componets/Hero";
import dynamic from "next/dynamic";
// import LaptopModel from "./componets/LaptopModel";
import ContactUs from "./componets/ContactUs"
import Nav from "./componets/Nav";
import About from "./componets/About"
import Contact from "./componets/Contact"
const LaptopModel = dynamic(() => import('./componets/LaptopModel'), {
  ssr: false, // Ensures this component is only rendered on the client
})
export default function Home() {
  return (
    <main className="">
      <Nav />
      <Hero />
      <LaptopModel />
      <About />
      <Contact />
      {/* <ContactUs /> */}
    </main>
  );
}
