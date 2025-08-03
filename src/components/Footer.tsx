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
  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/90 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Lil-Picasso</h3>
                <p className="text-sm text-white/80">Art School</p>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed">
              Nurturing creativity, building confidence, and developing life skills through 
              the transformative power of art education.
            </p>

            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-sm text-white/80">8+ Years of Excellence</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-3">
              {[
                "About Us",
                "Our Programs",
                "Why Art Matters",
                "Student Gallery",
                "Testimonials",
                "Handwriting Institute"
              ].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Programs */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Our Programs</h4>
            <div className="space-y-3">
              {[
                { name: "Little Fingers", age: "Ages 3.5-9" },
                { name: "Intermediate Tweenies", age: "Ages 10-13" },
                { name: "Advanced", age: "Ages 13+ & Adults" },
                { name: "Handwriting Level 1", age: "All Ages" },
                { name: "Handwriting Level 2", age: "Students Only" },
                { name: "Custom Portraits", age: "Gifts" }
              ].map((program, index) => (
                <div key={index} className="space-y-1">
                  <p className="text-white font-medium">{program.name}</p>
                  <p className="text-sm text-white/60">{program.age}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Call or WhatsApp</p>
                  <p className="text-white/80">+91 6360799842</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-white/80">info@lilpicasso.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-white/80">Chennai, Tamil Nadu</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Class Hours</p>
                  <p className="text-white/80">Mon-Sun: 9 AM - 8 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & CTA Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-bold mb-4">Stay Connected</h4>
              <p className="text-white/80 mb-6">
                Follow us for daily inspiration, student achievements, and art tips!
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "#", color: "hover:text-blue-400" },
                  { icon: Instagram, href: "#", color: "hover:text-pink-400" },
                  { icon: Youtube, href: "#", color: "hover:text-red-400" },
                  { icon: Twitter, href: "#", color: "hover:text-blue-300" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white transition-colors ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <h4 className="text-xl font-bold mb-4">Ready to Start?</h4>
              <p className="text-white/80 mb-6">
                Book your free demo class today and see the difference!
              </p>
              <Button size="lg" variant="hero" className="bg-white text-foreground hover:bg-white/90">
                <Heart className="w-5 h-5 mr-2" />
                Book Free Demo
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20 mb-8" />

        {/* Bottom Footer */}
        <div className="grid md:grid-cols-3 gap-6 items-center text-center md:text-left">
          <div className="text-white/60">
            <p>&copy; 2024 Lil-Picasso Creative Educations Pvt. Ltd.</p>
            <p className="text-sm">All rights reserved.</p>
          </div>
          
          <div className="text-center">
            <p className="text-white/80 font-medium">
              "Every child is an artist. Let's keep their creativity alive."
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;