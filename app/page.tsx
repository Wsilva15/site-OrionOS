import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Cases from "./components/Cases";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialFloat from "./components/SocialFloat";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Cases />
        <Contact />
      </main>
      <Footer />
      <SocialFloat />
    </>
  );
}
