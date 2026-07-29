import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>DTN | ECE Student</title>
        <meta
          name="description"
          content="DTN portfolio — Electrical and Computer Engineering student focused on robotics, embedded systems, and software engineering."
        />
        <meta name="keywords" content="DTN, ECE student, robotics, embedded systems, software engineering" />
        <link rel="canonical" href="https://ductnguyen-dtn.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
