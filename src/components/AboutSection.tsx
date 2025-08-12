import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Trophy, Heart, BookOpen, Lightbulb } from "lucide-react";
// import founderImage from "@/assets/founder-portrait.jpg";

const AboutSection = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/916360799842?text=Hi! I would like to know more about Lil-Picasso\'s teaching approach.', '_blank');
  };

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Lil-Picasso</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We proudly create the "Inventors of the Future" – nurturing creativity, building confidence, 
            and developing life skills through the transformative power of art.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-foreground">Who We Are</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Lil-Picasso is a unique research-based institute dedicated to creative stimulation and visual 
                communication. We open our doors to all and cultivate imagination through the power of art.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a holistic art school, we offer personalized attention, individual progress tracking, 
                and support a diverse student base from across the globe.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-gentle border border-border">
              <blockquote className="text-lg italic text-foreground text-center">
                "Every child is an artist. The hardest part of growing up is holding on to our creativity."
              </blockquote>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 bg-white shadow-gentle hover:shadow-warm transition-all duration-300">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Personalized Learning</h4>
              <p className="text-sm text-muted-foreground">Individual attention for every student</p>
            </Card>
            <Card className="p-6 bg-white shadow-gentle hover:shadow-warm transition-all duration-300">
              <BookOpen className="w-12 h-12 text-secondary mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Research-Based</h4>
              <p className="text-sm text-muted-foreground">8+ years of curriculum development</p>
            </Card>
            <Card className="p-6 bg-white shadow-gentle hover:shadow-warm transition-all duration-300">
              <Target className="w-12 h-12 text-accent mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Goal-Oriented</h4>
              <p className="text-sm text-muted-foreground">Career and ambition-driven methods</p>
            </Card>
            <Card className="p-6 bg-white shadow-gentle hover:shadow-warm transition-all duration-300">
              <Heart className="w-12 h-12 text-primary mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Holistic Growth</h4>
              <p className="text-sm text-muted-foreground">Life skills through art education</p>
            </Card>
          </div>
        </div>

        {/* Who It's For */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">Who Is It For?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "School Students", desc: "KG to 12th Grade", icon: BookOpen },
              { title: "College Students", desc: "University & Professional Courses", icon: Trophy },
              { title: "Working Professionals", desc: "Skill Development & Creativity", icon: Target },
              { title: "Art Enthusiasts", desc: "Passionate Learners of All Ages", icon: Heart }
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center bg-white shadow-gentle hover:shadow-warm transition-all duration-300 hover:transform hover:scale-105">
                <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Founder Section */}
        <div className="bg-white rounded-3xl p-8 shadow-creative">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/dqtiif615/image/upload/v1755003826/Thangavel_2_1_bocklj.png"
                  alt="Thangavel N - Founder"
                  className="w-full max-w-sm mx-auto rounded-2xl shadow-warm"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-secondary rounded-2xl p-4 text-white">
                  <div className="text-center">
                    <div className="text-2xl font-bold">25+</div>
                    <div className="text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-2">About Our Founder</h3>
                <h4 className="text-xl text-primary font-semibold mb-4">Thangavel N – Founder & Managing Director</h4>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over 25 years of experience in the creative industry, Thangavel N holds a Bachelor of Fine 
                  Arts degree from the Government College of Fine Arts, Chennai.
                </p>
                <p>
                  His career spans animation, VFX, GUI design, web design, advertising, and print media. While 
                  his digital work was highly acclaimed, his passion led him to connect with young creative minds 
                  to emphasize the lifelong importance of art.
                </p>
                <p>
                  A multi-award-winning creative visionary, Thangavel's leadership brings together knowledge, 
                  compassion, and innovation.
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 border border-primary/20">
                <blockquote className="text-lg italic text-foreground text-center">
                  "Founding Lil-Picasso School of Fine Arts was the best decision of my life"
                </blockquote>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button 
                  variant="hero"
                  onClick={openWhatsApp}
                  aria-label="Learn more about our teaching approach"
                >
                  Learn More About Our Approach
                </Button>
                <Button 
                  variant="outline"
                  onClick={openWhatsApp}
                  aria-label="Schedule a meeting with our team"
                >
                  Schedule a Meeting
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;