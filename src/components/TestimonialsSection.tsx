import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Award, Users, Camera, Trophy } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Mother of 8-year-old Aniya",
      content: "The transformation in my daughter's confidence and creativity has been remarkable. She now approaches her school projects with such enthusiasm and her handwriting has improved dramatically!",
      rating: 5,
      program: "Little Fingers"
    },
    {
      name: "Rajesh Kumar",
      role: "Father of 12-year-old Arjun",
      content: "As a working parent, I was concerned about my son's academic stress. The art classes have become his favorite part of the week, and we've seen improvements in his focus and problem-solving skills.",
      rating: 5,
      program: "Intermediate Tweenies"
    },
    {
      name: "Dr. Meera Patel",
      role: "Mother of 15-year-old Kavya",
      content: "My daughter is now considering art therapy as a career option. The advanced program has opened up possibilities we never imagined. The mentorship has been exceptional.",
      rating: 5,
      program: "Advanced"
    },
    {
      name: "Sunita Reddy",
      role: "Mother of 6-year-old twins",
      content: "Both my children have different learning styles, but the personalized approach at Lil-Picasso caters to each of them individually. Their motor skills and concentration have improved significantly.",
      rating: 5,
      program: "Little Fingers"
    }
  ];

  const achievements = [
    { icon: Users, number: "1000+", label: "Happy Students" },
    { icon: Award, number: "250+", label: "Certificates Awarded" },
    { icon: Trophy, number: "50+", label: "Art Competitions Won" },
    { icon: Star, number: "4.9", label: "Average Rating" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Parents & Students{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real stories from families who've experienced the transformative power of art education at Lil-Picasso
          </p>
        </div>

        {/* Achievements Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="p-6 text-center bg-gradient-to-br from-white to-muted shadow-gentle hover:shadow-warm transition-all duration-300">
              <achievement.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">{achievement.number}</div>
              <div className="text-sm text-muted-foreground">{achievement.label}</div>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-white shadow-gentle hover:shadow-warm transition-all duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-gradient-to-r from-primary to-secondary rounded-full p-3">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.program}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center space-x-1">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
                <span className="text-sm text-muted-foreground ml-2">
                  {testimonial.rating}/5 stars
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* Gallery Showcase */}
        <div className="bg-gradient-subtle rounded-3xl p-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Student Gallery & Achievements
            </h3>
            <p className="text-lg text-muted-foreground">
              Witness the incredible artwork and progress of our talented students
            </p>
          </div>

          {/* Placeholder for Gallery Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <Camera className="w-12 h-12 text-primary mx-auto" />
                    <p className="text-sm font-medium text-primary">Student Artwork</p>
                    <p className="text-xs text-muted-foreground">Amazing creations by our students</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              View hundreds of inspiring artworks created by students across all age groups
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Camera className="w-5 h-5 mr-2" />
                View Full Gallery
              </Button>
              <Button variant="outline" size="lg">
                <Trophy className="w-5 h-5 mr-2" />
                Competition Winners
              </Button>
            </div>
          </div>
        </div>

        {/* Certificate Ceremony Section */}
        <div className="mt-16 bg-white rounded-3xl p-8 shadow-creative">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Certificate Ceremonies & Recognition
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We celebrate every milestone with formal certificate ceremonies, recognizing the 
                hard work and progress of our students. These moments of recognition boost 
                confidence and motivate continued learning.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "Quarterly progress certificates",
                  "Annual excellence awards",
                  "Special recognition for outstanding improvement",
                  "Parent-child achievement celebrations"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Button variant="creative">
                View Ceremony Photos
              </Button>
            </div>
            
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20">
              <div className="text-center space-y-4">
                <Award className="w-16 h-16 text-primary mx-auto" />
                <h4 className="text-xl font-bold text-foreground">Guinness Record Holder</h4>
                <p className="text-muted-foreground">
                  Our founder and students have achieved recognition in multiple art competitions 
                  and even contributed to Guinness World Record attempts in collaborative art projects.
                </p>
                <Badge variant="outline" className="border-primary text-primary">
                  World Record Recognition
                </Badge>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;