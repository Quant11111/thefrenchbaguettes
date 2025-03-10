import { Box } from "@mui/material";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Expertise from "../components/Expertise";
import Partners from "../components/Partners";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Box>
      <Header />
      <main>
        <Hero />
        <Services />
        <Expertise />
        <Partners />
        <About />
        <Contact />
      </main>
      <Footer />
    </Box>
  );
}
