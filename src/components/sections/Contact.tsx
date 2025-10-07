import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, Phone, MapPin, FileText } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "csclub@uit.ac.ma",
    link: "mailto:csclub@uit.ac.ma",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@csclub_uit",
    link: "https://instagram.com/csclub_uit",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+212 XXX-XXXXXX",
    link: "tel:+212XXXXXXXXX",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ibn Tofail University, Kenitra",
    link: "https://maps.google.com",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4 text-gradient">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out to us anytime!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="card-hover bg-card/50 backdrop-blur border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </CardContent>
          </Card>

          <Card className="card-hover bg-card/50 backdrop-blur border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Submit a Report</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Use our Google Form to submit feedback, suggestions, or report any issues.
                </p>
                <Button 
                  className="w-full btn-glow gap-2" 
                  size="lg"
                  onClick={() => window.open('https://forms.google.com', '_blank')}
                >
                  <FileText className="w-5 h-5" />
                  Open Report Form
                </Button>
                
                <div className="mt-8 aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-primary/50" />
                </div>
                <p className="text-sm text-center text-muted-foreground">
                  Map will be embedded here
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
