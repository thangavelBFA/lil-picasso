import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Heart, 
  Eye, 
  TrendingUp, 
  Lightbulb, 
  Palette, 
  Target,
  BookOpen,
  Smile,
  Star
} from "lucide-react";
import brushStrokesImage from "@/assets/art-brush-strokes.jpg";

const WhyArtSection = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/916360799842?text=Hi! I would like to book a free demo class for my child.', '_blank');
  };

  return (
    <section id="why-art" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Art Matters</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Pause for a second, close your eyes, and visualize everything around you. Now open them—
            what do you see that isn't touched by art? From hospitals to kitchens, art is everywhere.
          </p>
        </div>

        {/* Art Impact Visual */}
        <div className="relative mb-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 border border-primary/20">
            <div className="text-center space-y-6">
              <div className="relative inline-block">
                <img
                  src={brushStrokesImage}
                  alt="Artistic brush strokes"
                  className="w-full max-w-3xl mx-auto rounded-2xl shadow-warm"
                />
              </div>
              <p className="text-lg font-semibold text-foreground">
                Art fuels over <span className="text-primary">250+ career paths</span> directly and indirectly
              </p>
            </div>
          </div>
        </div>

        {/* Academic Benefits */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Academic Benefits of Art Education
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Enhanced Memory",
                description: "Visual learning leads to better retention and understanding of complex concepts",
                color: "text-primary"
              },
              {
                icon: Eye,
                title: "Improved Observation",
                description: "Students learn to see details and patterns that enhance problem-solving abilities",
                color: "text-secondary"
              },
              {
                icon: Lightbulb,
                title: "Creative Thinking",
                description: "Art encourages original ideas and innovative approaches to challenges",
                color: "text-accent"
              },
              {
                icon: TrendingUp,
                title: "Better Academic Performance",
                description: "Research shows art students perform better in math, science, and language arts",
                color: "text-primary"
              },
              {
                icon: Target,
                title: "Goal Achievement",
                description: "Art teaches patience, persistence, and the satisfaction of completing projects",
                color: "text-secondary"
              },
              {
                icon: BookOpen,
                title: "Concept Visualization",
                description: "Complex ideas become clear through visual representation and hands-on learning",
                color: "text-accent"
              }
            ].map((benefit, index) => (
              <Card key={index} className="p-6 bg-white shadow-gentle hover:shadow-warm transition-all duration-300 hover:transform hover:scale-105">
                <benefit.icon className={`w-12 h-12 ${benefit.color} mb-4`} />
                <h4 className="text-lg font-semibold text-foreground mb-3">{benefit.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Health & Personal Benefits */}
        <div className="bg-gradient-subtle rounded-3xl p-8 mb-20">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Personal Growth Through Art
          </h3>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mental Health Benefits */}
            <div>
              <h4 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                <Heart className="w-8 h-8 text-primary mr-3" />
                Emotional Wellness
              </h4>
              <div className="space-y-4">
                {[
                  "Reduced stress and anxiety through creative expression",
                  "Increased happiness and emotional release",
                  "Healthy outlet for suppressed emotions",
                  "Higher emotional intelligence development",
                  "Therapeutic benefits for mental health"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skill Development */}
            <div>
              <h4 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                <Brain className="w-8 h-8 text-secondary mr-3" />
                Skill Development
              </h4>
              <div className="space-y-4">
                {[
                  "Enhanced creativity and critical thinking abilities",
                  "Improved memory, focus, and concentration",
                  "Better hand-eye coordination and motor skills",
                  "Clearer communication and idea expression",
                  "Effective problem-solving techniques"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Career Applications */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Careers Powered by Art
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: "Technology", fields: ["UI/UX Design", "Animation", "Game Development", "VR/AR"] },
              { category: "Healthcare", fields: ["Medical Illustration", "Therapy", "Equipment Design", "Research"] },
              { category: "Engineering", fields: ["Architecture", "Product Design", "Industrial Design", "CAD"] },
              { category: "Media", fields: ["Film", "Advertising", "Fashion", "Photography"] }
            ].map((career, index) => (
              <Card key={index} className="p-6 bg-white shadow-gentle hover:shadow-warm transition-all duration-300">
                <Palette className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-lg font-semibold text-foreground mb-3">{career.category}</h4>
                <ul className="space-y-2">
                  {career.fields.map((field, fieldIndex) => (
                    <li key={fieldIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      {field}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Unlock Your Child's Creative Potential?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of parents who've discovered the transformative power of art education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8"
              onClick={openWhatsApp}
              aria-label="Book free demo class via WhatsApp"
            >
              <Smile className="w-5 h-5 mr-2" />
              Book Free Demo Class
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 bg-white/10 hover:bg-white/20 border-white/30"
              onClick={openWhatsApp}
              aria-label="Download curriculum via WhatsApp"
            >
              Download Curriculum
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyArtSection;