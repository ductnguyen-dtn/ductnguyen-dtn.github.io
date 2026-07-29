import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | DTN</title>
        <meta name="description" content="About Duc Nguyen — ECE student at Olin College focused on robotics, embedded systems, and software engineering." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-20">
          <AboutSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
