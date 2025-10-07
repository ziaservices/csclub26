import { Card } from "@/components/ui/card";
import { Trophy, Users, Rocket, Award } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Hackathon Winners",
    description: "1st place at National CS Competition 2024",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Users,
    title: "500+ Members",
    description: "Growing community of passionate developers",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Rocket,
    title: "20+ Projects",
    description: "Real-world applications built by our teams",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Award,
    title: "Tech Workshops",
    description: "50+ sessions delivered to students",
    gradient: "from-green-500 to-emerald-500",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4 text-gradient">Our Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Celebrating milestones and showcasing our journey
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="card-hover bg-card/50 backdrop-blur border-primary/20 p-6 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${achievement.gradient} flex items-center justify-center`}>
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-muted-foreground">{achievement.description}</p>
            </Card>
          ))}
        </div>

        {/* Placeholder for future images */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <p className="text-muted-foreground">Photo {i}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
