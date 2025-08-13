import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { name: "Blender", level: 95 },
  { name: "Cinema 4D", level: 90 },
  { name: "Maya", level: 85 },
  { name: "3ds Max", level: 80 },
  { name: "Substance Designer", level: 88 },
  { name: "Unreal Engine", level: 75 },
];

const tools = [
  "3D Modeling", "Animation", "Texturing", "Lighting", 
  "Rendering", "VFX", "Motion Graphics", "Game Assets"
];

export const About = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate 3D artist with expertise in creating stunning visuals 
            and immersive digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="bg-gradient-glass border-border shadow-glass">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  With over 5 years of experience in 3D graphics and visualization, 
                  I specialize in creating compelling digital art that bridges the gap 
                  between imagination and reality. My work spans from architectural 
                  visualization to abstract digital sculptures.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-glass border-border shadow-glass">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-accent">Expertise</h3>
                <div className="grid grid-cols-2 gap-2">
                  {tools.map((tool, index) => (
                    <div 
                      key={tool}
                      className="bg-secondary/50 rounded-lg px-3 py-2 text-sm border border-border"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Technical Skills</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out shadow-neon"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};