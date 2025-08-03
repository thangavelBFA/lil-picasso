import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgramsSection from "@/components/ProgramsSection";

const ProgramsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <ProgramsSection />
      </main>
      <Footer />
    </div>
  );
};

export default ProgramsPage;
