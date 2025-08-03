import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Star, Users, Award, Heart } from "lucide-react";
import heroImage from "@/assets/hero-art-children.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-background to-muted overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-accent rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-primary rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 w-fit shadow-gentle">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="text-sm font-medium text-foreground">
                8+ Years of Excellence • 1000+ Happy Students
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Where Every Child's{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Creativity
                </span>{" "}
                Comes to Life
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Research-based art education that develops life skills, boosts academic performance, 
                and nurtures your child's natural creative genius.
              </p>
            </div>

            {/* Value Props */}
            <div className="grid sm:grid-cols-3 gap-4">
              <Card className="p-4 bg-white/80 backdrop-blur-sm border-0 shadow-gentle hover:shadow-warm transition-all duration-300">
                <div className="text-center space-y-2">
                  <Users className="w-8 h-8 text-primary mx-auto" />
                  <p className="font-semibold text-foreground">Personalized</p>
                  <p className="text-sm text-muted-foreground">Individual Attention</p>
                </div>
              </Card>
              <Card className="p-4 bg-white/80 backdrop-blur-sm border-0 shadow-gentle hover:shadow-warm transition-all duration-300">
                <div className="text-center space-y-2">
                  <Award className="w-8 h-8 text-secondary mx-auto" />
                  <p className="font-semibold text-foreground">Proven</p>
                  <p className="text-sm text-muted-foreground">Research-Based</p>
                </div>
              </Card>
              <Card className="p-4 bg-white/80 backdrop-blur-sm border-0 shadow-gentle hover:shadow-warm transition-all duration-300">
                <div className="text-center space-y-2">
                  <Heart className="w-8 h-8 text-accent mx-auto" />
                  <p className="font-semibold text-foreground">Safe</p>
                  <p className="text-sm text-muted-foreground">Child-Friendly</p>
                </div>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="hero" className="text-lg px-8 py-6">
                Start Your Child's Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Watch Demo Class
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-secondary rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-accent rounded-full border-2 border-white"></div>
                </div>
                <span>500+ Parents Trust Us</span>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
                <span className="ml-1">4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-creative">
              <img
                src={heroImage}
                alt="Children learning art at Lil-Picasso"
                className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-500"
              />
              {/* Floating Elements */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-warm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Happy Students</div>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-warm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">8+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;