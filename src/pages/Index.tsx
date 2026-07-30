import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Duc Tuan Nguyen | ECE Student</title>
        <meta
          name="description"
          content="Portfolio of Duc Tuan Nguyen, an Electrical and Computer Engineering student working on robotics, embedded systems, and reinforcement learning."
        />
        <meta name="keywords" content="Duc Tuan Nguyen, ECE student, robotics, embedded systems, reinforcement learning" />
        <link rel="canonical" href="https://ductnguyen-dtn.github.io" />
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
