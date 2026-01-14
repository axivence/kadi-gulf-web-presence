import { Target, Users, Building2, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import aboutHero from "@/assets/about-hero.jpg";

const About = () => {
  const missionPoints = [
    "We drive for the best results and are agile in addressing new challenges.",
    "We operate safely and are committed to the well-being of our workforce.",
    "We follow ethical standards in conducting business.",
    "We are a positive influence in the Kingdom of Bahrain and its environment.",
  ];

  const stats = [
    { value: "64+", label: "Years of Experience" },
    { value: "12", label: "Retail Outlets" },
    { value: "100+", label: "Dealers Network" },
    { value: "100+", label: "Skilled Staff" },
  ];

  const divisions = [
    {
      icon: Building2,
      title: "KADI International Trading",
      description:
        "Sole dealer of premium quality and trusted international tyre brands including Marshal, Landsail, Sonar, Jinyu, Wanli, Blackhawk, Rovelo, Dynamo, and lubricants from Lucas Oil USA.",
    },
    {
      icon: Users,
      title: "Tyre Express",
      description:
        "Providing complete tyre services for TBR and PCR tyres along with battery and oil services, 3D tyre alignment, and other mechanical services across 12 outlets.",
    },
    {
      icon: Target,
      title: "Bahrain Tyres Factory (BATREP)",
      description:
        "Established in 1959, BATREP specializes in tyre retreading with cutting-edge technology, serving leading companies in the Kingdom of Bahrain for over 60 years.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${aboutHero})` }}
        />
        <div className="absolute inset-0 overlay-full" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <p className="text-primary font-semibold uppercase tracking-widest mb-4">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-gold">Story</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A legacy of excellence in the automotive industry spanning over six
              decades.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="KADI International Group"
              subtitle="One of the leading, established dealers and distributors of automotive products in the Kingdom of Bahrain."
              centered
            />
            <div className="prose prose-lg mx-auto text-center">
              <p className="text-muted-foreground leading-relaxed mb-6">
                It gives us immense pleasure to introduce to you KADI International
                Group - one of the leading, established dealers and distributors of
                automotive products in the Kingdom of Bahrain.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                M/s KADI International Trading is a Division of Bahrain Tyres
                Factory (BATREP), which was established in the year 1959. BATREP
                has since continued to serve many leading establishments with tyre
                re-treading for the past 64 years - with the latest cutting-edge
                technology and advanced processes in the Kingdom of Bahrain.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                KADI International Group is the sole dealer of premium quality and
                trusted international tyre brands such as Marshal from Korea,
                Landsail from Thailand, Sonar from Taiwan, Jinyu, Wanli, Blackhawk,
                Rovelo, Dynamo from China, and lubricants brands such as Lucas from
                USA in the Kingdom of Bahrain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Divisions */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Divisions"
            subtitle="Three specialized divisions working together to serve all your automotive needs"
            centered
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {divisions.map((division, index) => (
              <div
                key={index}
                className="p-8 bg-card border border-border rounded-lg card-hover"
              >
                <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-primary/10">
                  <division.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {division.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {division.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Our Mission"
                subtitle="Driving excellence in everything we do"
              />
              <div className="space-y-4">
                {missionPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-background p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold mb-6 text-gold">
                Why Choose KADI?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-muted-foreground">
                    In-depth understanding of customer needs
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Dedicated and skilled workforce
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Premium quality products at competitive prices
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Steadfast commitment to timely deliveries
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Extensive network of 12 retail outlets across Bahrain
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
