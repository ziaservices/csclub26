import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Cpu } from "lucide-react";

const formations = [
  {
    icon: Code,
    title: "Web Development Bootcamp",
    description: "Master HTML, CSS, JavaScript, and React to build modern web applications",
    status: "Enrolling Now",
    level: "Beginner",
  },
  {
    icon: Database,
    title: "Machine Learning & Data Science",
    description: "Learn Python, machine learning, and data analysis techniques",
    status: "Coming Soon",
    level: "Intermediate",
  },
  {
    icon: Globe,
    title: "Full-Stack Development",
    description: "Complete journey from frontend to backend with Node.js and databases",
    status: "Enrolling Now",
    level: "Advanced",
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    description: "Dive into Arduino, Raspberry Pi, and IoT development",
    status: "Coming Soon",
    level: "Intermediate",
  },
];

const Formations = () => {
  return (
    <section id="formations" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4 text-gradient">Our Formations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Structured learning paths designed to transform you into a skilled developer
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {formations.map((formation, index) => (
            <Card 
              key={index} 
              className="card-hover bg-card/50 backdrop-blur border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <formation.icon className="w-8 h-8 text-primary" />
                  </div>
                  <Badge 
                    variant={formation.status === "Enrolling Now" ? "default" : "secondary"}
                    className={formation.status === "Enrolling Now" ? "btn-glow" : ""}
                  >
                    {formation.status}
                  </Badge>
                </div>
                <CardTitle className="text-2xl">{formation.title}</CardTitle>
                <CardDescription className="text-base">
                  {formation.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-accent text-accent">
                    {formation.level}
                  </Badge>
                  <Button 
                    variant={formation.status === "Enrolling Now" ? "default" : "secondary"}
                    className={formation.status === "Enrolling Now" ? "btn-glow" : ""}
                  >
                    {formation.status === "Enrolling Now" ? "Enroll Now" : "Join Waitlist"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Formations;
