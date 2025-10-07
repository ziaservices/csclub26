import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const members = [
  { name: "Hajar El-Janany", role: "Vice President", color: "hsl(var(--accent))", photoUrl: "/members/hajar.jpeg" },
  { name: "Allae Elbaze", role: "President", color: "hsl(var(--primary))", photoUrl: "/members/allae.jpeg" },
  { name: "Hatim Babtai", role: "Media", color: "hsl(var(--primary))", photoUrl: "/members/hatim.jpeg" },
  { name: "Imane Elhadana", role: "Communication", color: "hsl(var(--accent))", photoUrl: "/members/imane_e.jpg" },
  { name: "Doha Mahfoud", role: "Development", color: "hsl(var(--primary))", photoUrl: "/members/doha.jpg" },
  { name: "Yassmine Azoui", role: "Events", color: "hsl(var(--accent))", photoUrl: "/members/yassmine.jpg" },
  { name: "Imane Morchid", role: "HR", color: "hsl(var(--primary))", photoUrl: "/members/imane_m.jpg" },
  { name: "Hadil Elbaze", role: "Supervisor", color: "hsl(var(--primary))", photoUrl: "/members/hadil.jpg" },
];

const Members = () => {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <section id="members" className="py-20 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4 text-gradient">Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the passionate individuals driving our mission forward
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <Card
              key={index}
              className="card-hover bg-card/50 backdrop-blur border-primary/20 text-center"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="pt-6">
                <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary/30">
                  {member.photoUrl ? (
                    <img
                      src={member.photoUrl}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                      onError={e => { e.currentTarget.style.display = 'none'; }}
                    />
                  ) : null}
                  <AvatarFallback 
                    className="text-2xl font-bold"
                    style={{ backgroundColor: member.color, color: "white" }}
                  >
                    {getInitials(member.name)}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <Badge variant="secondary" className="text-sm">
                  {member.role}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
