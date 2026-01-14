import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, Award, Truck } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import heroImage from "@/assets/hero-tyres.jpg";
import tyresProduct from "@/assets/tyres-product.jpg";
import lubricantsProduct from "@/assets/lubricants-product.jpg";
import serviceAlignment from "@/assets/service-alignment.jpg";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Premium Quality",
      description: "Only the finest international tyre and lubricant brands",
    },
    {
      icon: Clock,
      title: "64+ Years Experience",
      description: "Trusted since 1959 in the Kingdom of Bahrain",
    },
    {
      icon: Award,
      title: "Certified Products",
      description: "All products meet international quality standards",
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      description: "Timely deliveries across Bahrain",
    },
  ];

  const products = [
    {
      image: tyresProduct,
      title: "Premium Tyres",
      description: "TBR, PCR, Industrial & Agricultural tyres from top brands",
      link: "/products",
    },
    {
      image: lubricantsProduct,
      title: "Lubricants & Oils",
      description: "Lucas Oil, LIQUIMOLY and Armor Oil products",
      link: "/products",
    },
    {
      image: serviceAlignment,
      title: "Tyre Services",
      description: "Complete tyre services including 3D alignment",
      link: "/services",
    },
  ];

  const brands = [
    "Marshal",
    "Landsail",
    "Jinyu",
    "Rovelo",
    "Blackhawk",
    "Wanli",
    "Autogreen",
    "Prinx",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 overlay-dark" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-slide-up">
            <p className="text-primary font-semibold uppercase tracking-widest mb-4">
              Since 1959
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Premium Automotive
              <span className="block text-gold">Solutions in Bahrain</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl">
              One of the leading dealers and distributors of premium tyres,
              lubricants, and automotive products in the Kingdom of Bahrain.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn-hero">
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-hero-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 border border-border rounded-lg card-hover bg-background"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <SectionHeading
                title="About KADI International"
                subtitle="A legacy of excellence in the automotive industry spanning over six decades."
              />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                KADI International Group is a division of Bahrain Tyres Factory
                (BATREP), which was established in the year 1959. We are the sole
                dealer of premium quality international tyre brands in the Kingdom
                of Bahrain.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our success is based on an in-depth understanding of our
                customer's needs and the dedication of our skilled workforce.
              </p>
              <Link to="/about" className="btn-hero-outline">
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/30 rounded-lg" />
              <img
                src={tyresProduct}
                alt="Premium Tyres"
                className="relative z-10 w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Products & Services"
            subtitle="Comprehensive range of automotive products and professional services"
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {products.map((product, index) => (
              <Link
                key={index}
                to={product.link}
                className="group relative overflow-hidden rounded-lg card-hover"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground">{product.description}</p>
                  <span className="inline-flex items-center gap-2 mt-4 text-primary font-semibold group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Partner Brands"
            subtitle="We proudly partner with premium international tyre manufacturers"
            centered
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="p-8 bg-card border border-border rounded-lg text-center card-hover"
              >
                <span className="text-xl font-bold text-foreground">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your automotive product needs. We're here
            to help you find the perfect solution.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground font-semibold uppercase tracking-wider hover:bg-foreground hover:text-background transition-all"
          >
            Contact Us Today
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
