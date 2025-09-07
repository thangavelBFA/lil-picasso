import Header from "@/components/Header";
import Footer from "@/components/Footer";
import logo from "@/assets/logo.jpg";
import { Instagram, Facebook, Youtube } from "lucide-react";

const IG_URL = "#";
const FB_URL = "#";
const YT_URL = "#";
const WHATSAPP_URL = "https://wa.me/916360799842?text=Hi!";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center py-20">
          <img src={logo} alt="Lil-Picasso Logo" className="w-28 h-28 mx-auto rounded-full shadow mb-6" />
          <h1 className="text-5xl font-extrabold mb-4">Coming Soon</h1>
          <p className="text-lg text-muted-foreground mb-8">
            We're working on something beautiful. We'll be back shortly — in the meantime,
            follow us on social media to see updates and student work.
          </p>

          <div className="flex items-center justify-center gap-4">
            <a href={IG_URL} aria-label="Instagram" className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary/90 transition">
              <Instagram className="w-5 h-5 text-foreground" />
            </a>
            <a href={FB_URL} aria-label="Facebook" className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary/90 transition">
              <Facebook className="w-5 h-5 text-foreground" />
            </a>
            <a href={YT_URL} aria-label="YouTube" className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary/90 transition">
              <Youtube className="w-5 h-5 text-foreground" />
            </a>
            <a href={WHATSAPP_URL} aria-label="WhatsApp" className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary/90 transition">
              <img src="/favicon.ico" alt="WhatsApp" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
