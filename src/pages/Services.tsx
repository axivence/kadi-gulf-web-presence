import { Link } from "react-router-dom";
import {
  ArrowRight,
  CircleDot,
  Settings,
  Gauge,
  Wrench,
  RefreshCw,
  MapPin,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import serviceImage from "@/assets/service-alignment.jpg";

const Services = () => {
  const tyreExpressServices = [
    {
      icon: CircleDot,
      title: "Tyre Fitting & Balancing",
      description:
        "Professional tyre fitting and computerized wheel balancing for all vehicle types including passenger cars and commercial trucks.",
    },
    {
      icon: Settings,
      title: "3D Wheel Alignment",
      description:
        "State-of-the-art 3D tyre alignment technology ensuring precise alignment for optimal tyre performance and longevity.",
    },
    {
      icon: Gauge,
      title: "Oil & Battery Services",
      description:
        "Complete oil change services and battery testing, replacement, and maintenance for all vehicle types.",
    },
    {
      icon: Wrench,
      title: "Mechanical Services",
      description:
        "General mechanical repairs and maintenance services performed by our skilled technicians.",
    },
    {
      icon: RefreshCw,
      title: "Puncture Repairs",
      description:
        "Quick and reliable puncture repairs for all tyre sizes using quality materials and professional techniques.",
    },
  ];

  const retreadingFeatures = [
    "Latest cutting-edge retreading technology",
    "Advanced processes for optimal quality",
    "64+ years of expertise since 1959",
    "Renowned MIDAS Treads from India",
    "Highest quality tread rubber compounds",
    "All types of truck and bus radial tyres",
    "Cost-effective alternative to new tyres",
    "Environmentally sustainable solution",
  ];

  const outlets = [
    { name: "Salmabad", type: "Exclusive" },
    { name: "Riffa", type: "Exclusive" },
    { name: "Hamad Town", type: "Exclusive" },
    { name: "Alba Industrial Area", type: "Exclusive" },
    { name: "Sitra", type: "Exclusive" },
    { name: "Additional Partner Outlets", type: "Partner" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${serviceImage})` }}
        />
        <div className="absolute inset-0 overlay-full" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <p className="text-primary font-semibold uppercase tracking-wider md:tracking-widest mb-3 md:mb-4 text-sm md:text-base">
              Our Services
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
              Professional <span className="text-gold">Tyre Services</span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground">
              Complete tyre services and maintenance solutions across our network
              of 12 outlets in Bahrain.
            </p>
          </div>
        </div>
      </section>

      {/* Tyre Express Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Tyre Express"
            subtitle="Your one-stop destination for complete tyre services and automotive maintenance"
            centered
          />
          <p className="text-center text-sm md:text-base text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-12">
            Tyre Express is a division of KADI International Group, providing
            complete tyre services for TBR and PCR tyres along with battery and oil
            services, 3D tyre alignment, and other mechanical services. Currently
            operating 12 outlets across Bahrain.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {tyreExpressServices.map((service, index) => (
              <div
                key={index}
                className="p-4 md:p-8 bg-card border border-border rounded-lg card-hover"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 mb-4 md:mb-6 flex items-center justify-center rounded-full bg-primary/10">
                  <service.icon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
                </div>
                <h3 className="text-base md:text-xl font-bold mb-2 md:mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retreading Section */}
      <section className="py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <SectionHeading
                title="Tyre Retreading"
                subtitle="Bahrain Tyres Factory - Specialists in tyre retreading since 1959"
              />
              <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                BAHRAIN TYRES FACTORY specializes in tyre retreading for all types
                of trucks and bus radial tyres. Equipped with the latest
                cutting-edge technology and advanced processes, we have been
                successfully re-treading for most of the leading companies in the
                Kingdom Of Bahrain for over 60 years.
              </p>
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                {retreadingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 md:gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-xs md:text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-background p-4 md:p-8 rounded-lg border border-border">
                <div className="text-center mb-6 md:mb-8">
                  <div className="text-4xl md:text-5xl font-bold text-gold mb-1 md:mb-2">64+</div>
                  <div className="text-sm md:text-base text-muted-foreground">Years of Expertise</div>
                </div>
                <div className="space-y-3 md:space-y-4">
                  <div className="p-3 md:p-4 bg-card rounded-lg">
                    <div className="font-bold text-foreground mb-1 text-sm md:text-base">
                      MIDAS Treads
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">
                      Premium Indian-made tread rubber
                    </div>
                  </div>
                  <div className="p-3 md:p-4 bg-card rounded-lg">
                    <div className="font-bold text-foreground mb-1 text-sm md:text-base">
                      Truck & Bus Tyres
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">
                      All types of TBR retreading
                    </div>
                  </div>
                  <div className="p-3 md:p-4 bg-card rounded-lg">
                    <div className="font-bold text-foreground mb-1 text-sm md:text-base">
                      Repairs & Punctures
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">
                      Complete repair services
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Locations"
            subtitle="Find a Tyre Express outlet near you"
            centered
          />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mt-8 md:mt-12">
            {outlets.map((outlet, index) => (
              <div
                key={index}
                className="p-3 md:p-6 bg-card border border-border rounded-lg flex items-center gap-2 md:gap-4 card-hover"
              >
                <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                  <MapPin className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-xs md:text-base">{outlet.name}</div>
                  <div className="text-[10px] md:text-sm text-muted-foreground">
                    {outlet.type} Outlet
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm md:text-base text-muted-foreground mt-6 md:mt-8">
            We intend to expand to more locations around Bahrain.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4 md:mb-6">
            Need Our Services?
          </h2>
          <p className="text-primary-foreground/80 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
            Visit any of our 12 outlets or contact us to schedule a service
            appointment for your vehicle.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-background text-foreground font-semibold uppercase tracking-wider hover:bg-foreground hover:text-background transition-all text-sm md:text-base"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
