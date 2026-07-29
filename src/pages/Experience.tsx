import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";

const Experience = () => {
  return (
    <>
      <Helmet>
        <title>Experience | DTN</title>
        <meta name="description" content="Experience and education — Duc Nguyen, ECE student at Olin College." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-20">
          <ExperienceSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Experience;
