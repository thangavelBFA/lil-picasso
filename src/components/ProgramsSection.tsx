import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Clock, 
  Star, 
  CheckCircle, 
  Baby, 
  GraduationCap, 
  Briefcase,
  PenTool,
  Calendar,
  Target,
  Award,
  Heart
} from "lucide-react";

const ProgramsSection = () => {
  const openWhatsApp = (program: string) => {
    window.open(`https://wa.me/916360799842?text=Hi! I would like to know more about the ${program} program at Lil-Picasso.`, '_blank');
  };

  return (
    <section id="programs" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Structured, age-appropriate programs designed to nurture creativity and build essential life skills 
            through art education.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Little Fingers Program */}
          <Card className="bg-white shadow-warm hover:shadow-creative transition-all duration-300 overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-primary-light p-6 text-white">
              <Baby className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Little Fingers</h3>
              <p className="opacity-90">Ages 3.5 - 9 years</p>
            </div>
            <div className="p-6">
              <div className="space-y-4 mb-6">
                <p className="text-muted-foreground leading-relaxed">
                  A fun yet structured foundation program where young children build essential motor skills 
                  and develop their natural creative abilities.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Program Focus:</h4>
                  {[
                    "Hand-eye coordination development",
                    "Proper posture and tool handling",
                    "Motor skills and stability training",
                    "Creative exploration and expression"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">1 hour sessions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Small groups</span>
                  </div>
                </div>
                <Button 
                  className="w-full" 
                  variant="hero"
                  onClick={() => openWhatsApp('Little Fingers')}
                  aria-label="Learn more about Little Fingers program"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </Card>

          {/* Intermediate Tweenies Program */}
          <Card className="bg-white shadow-warm hover:shadow-creative transition-all duration-300 overflow-hidden">
            <div className="bg-gradient-to-r from-secondary to-accent p-6 text-white">
              <GraduationCap className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Intermediate Tweenies</h3>
              <p className="opacity-90">Ages 10 - 13 years</p>
            </div>
            <div className="p-6">
              <div className="space-y-4 mb-6">
                <p className="text-muted-foreground leading-relaxed">
                  Perfect for academically busy tweens, this program strengthens fundamentals while 
                  developing art as a scientific subject.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Program Focus:</h4>
                  {[
                    "Art fundamentals and techniques",
                    "Scientific approach to creativity",
                    "Academic integration methods",
                    "Stress relief through art"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">1.5 hour sessions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Goal-oriented</span>
                  </div>
                </div>
                <Button 
                  className="w-full" 
                  variant="creative"
                  onClick={() => openWhatsApp('Intermediate Tweenies')}
                  aria-label="Learn more about Intermediate Tweenies program"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </Card>

          {/* Advanced Program */}
          <Card className="bg-white shadow-warm hover:shadow-creative transition-all duration-300 overflow-hidden">
            <div className="bg-gradient-to-r from-accent to-primary p-6 text-white">
              <Briefcase className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Advanced</h3>
              <p className="opacity-90">Ages 13+ & Adults</p>
            </div>
            <div className="p-6">
              <div className="space-y-4 mb-6">
                <p className="text-muted-foreground leading-relaxed">
                  Results-driven course diving deeper into art principles, logical creative thinking, 
                  and real-world career applications.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Program Focus:</h4>
                  {[
                    "Advanced art principles & techniques",
                    "Career-oriented skill development",
                    "Portfolio building guidance",
                    "Professional art practices"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">2 hour sessions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Certificate</span>
                  </div>
                </div>
                <Button 
                  className="w-full" 
                  variant="success"
                  onClick={() => openWhatsApp('Advanced')}
                  aria-label="Learn more about Advanced program"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Handwriting Institute */}
        <div className="bg-white rounded-3xl p-8 shadow-creative mb-16">
          <div className="text-center mb-12">
            <PenTool className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Handwriting Research Institute
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your child's handwriting with our proven research-based methodology. 
              8+ years of results with 20+ school collaborations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Level 1: Beautification */}
            <Card className="p-6 border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge variant="secondary" className="mb-2">Level 1</Badge>
                  <h4 className="text-xl font-bold text-foreground">Beautification</h4>
                </div>
                <Star className="w-8 h-8 text-yellow-500 fill-current" />
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Boosts confidence by refining every written letter. Includes pen/paper handling, 
                posture, writing principles, and error correction.
              </p>

              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>24 Classes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>1 Hour each</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-primary" />
                    <span>2 classes/week</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span>Certificate</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 rounded-lg p-4 mb-6">
                <p className="text-sm font-semibold text-primary mb-2">Final Outcome:</p>
                <p className="text-sm text-muted-foreground">
                  Clear, attractive cursive writing—visibly improved and officially certified
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">₹10,200</div>
                  <div className="text-sm text-muted-foreground">Payable in 3 installments</div>
                </div>
                <Button 
                  className="w-full" 
                  variant="hero"
                  onClick={() => openWhatsApp('Handwriting Level 1')}
                  aria-label="Enroll in Handwriting Level 1 program"
                >
                  Enroll in Level 1
                </Button>
              </div>
            </Card>

            {/* Level 2: Speed Writing */}
            <Card className="p-6 border-2 border-secondary/20 hover:border-secondary/40 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge variant="outline" className="mb-2 border-secondary text-secondary">Level 2</Badge>
                  <h4 className="text-xl font-bold text-foreground">Speed Writing</h4>
                </div>
                <div className="text-center">
                  <div className="text-xs text-muted-foreground">Prerequisite</div>
                  <div className="text-sm font-semibold text-secondary">Level 1 Complete</div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Advanced speed writing techniques for students who have completed Level 1. 
                Focus on maintaining quality while increasing writing speed.
              </p>

              <div className="space-y-4 mb-6">
                <h5 className="font-semibold text-foreground">Who can join?</h5>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    <span className="text-sm text-muted-foreground">Juniors: UKG to 4th Std</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    <span className="text-sm text-muted-foreground">Seniors: 5th to 12th Std</span>
                  </div>
                  <div className="text-xs text-muted-foreground italic">
                    *Not available for adults
                  </div>
                </div>
              </div>

              <div className="bg-secondary/10 rounded-lg p-4 mb-6">
                <p className="text-sm font-semibold text-secondary mb-2">Benefits:</p>
                <p className="text-sm text-muted-foreground">
                  Faster exam completion, improved academic performance, enhanced confidence
                </p>
              </div>

              <Button 
                className="w-full" 
                variant="creative"
                onClick={() => openWhatsApp('Handwriting Level 2')}
                aria-label="Learn about Handwriting Level 2 program"
              >
                Learn About Level 2
              </Button>
            </Card>
          </div>
        </div>

        {/* Enrollment Process */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Simple Enrollment Process
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Assessment", desc: "Download and complete assessment sheet" },
              { step: "2", title: "Submit", desc: "WhatsApp your sample to +91 6360799842" },
              { step: "3", title: "Guidance", desc: "Get personalized recommendations" },
              { step: "4", title: "Start", desc: "Choose slots, pay, and begin journey" }
            ].map((step, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto">
                  {step.step}
                </div>
                <h4 className="font-semibold text-foreground">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button 
              size="lg" 
              variant="hero"
              onClick={() => openWhatsApp('enrollment process')}
              aria-label="Start your child's creative journey today"
            >
              <Heart className="w-5 h-5 mr-2" />
              Start Your Child's Journey Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;