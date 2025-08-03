import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send,
  Heart,
  Star,
  Gift,
  Truck,
  Palette,
  Camera
} from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Start Your Child's{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Creative Journey
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to unlock your child's artistic potential? Get in touch with us today for a free consultation 
            and demo class.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="p-8 bg-white shadow-creative">
            <h3 className="text-2xl font-bold text-foreground mb-6">Book Your Free Demo Class</h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Parent's Name *</label>
                  <Input placeholder="Your full name" className="border-border" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Phone Number *</label>
                  <Input placeholder="+91 XXXXX XXXXX" className="border-border" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email Address</label>
                <Input type="email" placeholder="your.email@example.com" className="border-border" />
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Child's Name *</label>
                  <Input placeholder="Child's name" className="border-border" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Child's Age *</label>
                  <Input placeholder="Age in years" className="border-border" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Program Interest</label>
                <div className="grid sm:grid-cols-3 gap-2">
                  <Badge variant="outline" className="p-2 text-center cursor-pointer hover:bg-primary hover:text-white transition-colors">
                    Little Fingers
                  </Badge>
                  <Badge variant="outline" className="p-2 text-center cursor-pointer hover:bg-secondary hover:text-white transition-colors">
                    Tweenies
                  </Badge>
                  <Badge variant="outline" className="p-2 text-center cursor-pointer hover:bg-accent hover:text-white transition-colors">
                    Advanced
                  </Badge>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message (Optional)</label>
                <Textarea 
                  placeholder="Tell us about your child's interests or any specific questions you have..."
                  className="border-border min-h-[100px]"
                />
              </div>
              
              <Button className="w-full" size="lg" variant="hero">
                <Send className="w-5 h-5 mr-2" />
                Book Free Demo Class
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="p-6 bg-white shadow-gentle">
              <h3 className="text-xl font-bold text-foreground mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Call or WhatsApp</p>
                    <p className="text-muted-foreground">+91 6360799842</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email Us</p>
                    <p className="text-muted-foreground">info@lilpicasso.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Visit Our Studio</p>
                    <p className="text-muted-foreground">Chennai, Tamil Nadu</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Class Timings</p>
                    <p className="text-muted-foreground">Mon-Sun: 9 AM - 8 PM</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* WhatsApp Quick Action */}
            <Card className="p-6 bg-gradient-to-r from-green-500 to-green-600 text-white">
              <div className="text-center space-y-4">
                <MessageSquare className="w-12 h-12 mx-auto" />
                <h3 className="text-xl font-bold">Quick WhatsApp Assessment</h3>
                <p className="opacity-90">
                  Send us your child's handwriting sample for immediate feedback!
                </p>
                <Button variant="secondary" size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  WhatsApp Now
                </Button>
              </div>
            </Card>

            {/* Special Offers */}
            <Card className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
              <div className="text-center space-y-4">
                <Star className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-xl font-bold text-foreground">Limited Time Offers</h3>
                <div className="space-y-2">
                  <Badge variant="outline" className="border-primary text-primary">
                    First Month 50% OFF
                  </Badge>
                  <Badge variant="outline" className="border-secondary text-secondary">
                    Free Art Kit Included
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  *Valid for new enrollments this month
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Custom Portrait Service */}
        <div className="bg-white rounded-3xl p-8 shadow-creative">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Custom Portrait Service
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your favorite photographs into beautiful handmade portraits. 
              Perfect gifts for special occasions!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Service Features */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Palette,
                    title: "100% Handmade",
                    description: "Created by India's top portrait artists, no digital prints"
                  },
                  {
                    icon: Truck,
                    title: "Free Delivery",
                    description: "Pan-India delivery with no hidden costs"
                  },
                  {
                    icon: Heart,
                    title: "Perfect Gift",
                    description: "Thoughtful, personal, and timeless keepsake"
                  },
                  {
                    icon: Camera,
                    title: "Any Photo",
                    description: "Transform family photos, pets, landscapes, or portraits"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <feature.icon className="w-8 h-8 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 border border-primary/20">
                <h4 className="font-semibold text-foreground mb-3">Available Styles:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span>Pencil Sketches</span>
                  <span className="flex items-center"><span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>Watercolor Paintings</span>
                  <span className="flex items-center"><span className="w-2 h-2 bg-accent rounded-full mr-2"></span>Charcoal Portraits</span>
                  <span className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-2"></span>Coffee Paintings</span>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <Card className="p-6 border-2 border-primary/20">
              <div className="text-center space-y-4">
                <Gift className="w-12 h-12 text-primary mx-auto" />
                <h4 className="text-xl font-bold text-foreground">Starting Price</h4>
                <div className="text-3xl font-bold text-primary">₹5,000</div>
                <p className="text-sm text-muted-foreground">
                  Includes premium materials, free delivery, and 5-7 day completion
                </p>
                <Button className="w-full" variant="creative">
                  Order Portrait Now
                </Button>
                <p className="text-xs text-muted-foreground">
                  Perfect for birthdays, anniversaries, and special occasions
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;