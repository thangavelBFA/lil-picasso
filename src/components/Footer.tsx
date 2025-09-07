import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Heart, 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter,
  Palette,
  Award
} from "lucide-react";

const Footer = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/916360799842?text=Hi! I would like to book a free demo class for my child.', '_blank');
  };

  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/90 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Lil-Picasso</h3>
              <p className="text-sm text-white/80">Art School</p>
            </div>
          </div>

          <p className="text-white/80 text-center max-w-xl">
            We're launching soon. Meanwhile, reach us on WhatsApp or follow our social channels for updates and student work.
          </p>

          <div className="flex space-x-4">
            {[
              { icon: Instagram, href: "#", color: "hover:text-pink-400" },
              { icon: Facebook, href: "#", color: "hover:text-blue-400" },
              { icon: Youtube, href: "#", color: "hover:text-red-400" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white transition-colors ${social.color}`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
            <a
              href="https://wa.me/916360799842?text=Hi!"
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white transition-colors hover:bg-green-600"
            >
              <img src="/favicon.ico" alt="WhatsApp" className="w-5 h-5" />
            </a>
          </div>

          <p className="text-white/60 text-sm mt-4">&copy; {new Date().getFullYear()} Lil-Picasso Creative Educations Pvt. Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;