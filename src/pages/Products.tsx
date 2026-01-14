import { Link } from "react-router-dom";
import { ArrowRight, CircleDot, Droplets, Battery, Wrench } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import tyresProduct from "@/assets/tyres-product.jpg";
import lubricantsProduct from "@/assets/lubricants-product.jpg";

const Products = () => {
  const tyreCategories = [
    {
      title: "PCR/LT Tyres",
      description: "Passenger Car Radial and Light Truck tyres for everyday vehicles",
    },
    {
      title: "TBR Tyres",
      description: "Truck and Bus Radial tyres for commercial vehicles",
    },
    {
      title: "Industrial Tyres",
      description: "Heavy-duty tyres for industrial applications",
    },
    {
      title: "Agricultural Tyres",
      description: "Specialized tyres for farming equipment",
    },
    {
      title: "Earthmover Tyres",
      description: "OTR tyres for construction and mining equipment",
    },
  ];

  const tyreBrands = [
    { name: "Marshal", country: "Korea", highlight: true },
    { name: "Landsail", country: "Thailand", highlight: true },
    { name: "Sonar", country: "Taiwan", highlight: false },
    { name: "Jinyu", country: "China", highlight: true },
    { name: "Wanli", country: "China", highlight: false },
    { name: "Blackhawk", country: "China", highlight: true },
    { name: "Rovelo", country: "China", highlight: false },
    { name: "Dynamo", country: "China", highlight: false },
    { name: "Autogreen", country: "China", highlight: false },
    { name: "Prinx", country: "China", highlight: false },
    { name: "Honour", country: "China", highlight: false },
    { name: "Powerzone", country: "India", highlight: false },
  ];

  const lubricantProducts = [
    {
      brand: "Lucas Oil",
      origin: "USA",
      description: "Complete range of conventional, semi-synthetic, and fully synthetic lubricants plus additives for all automotive and industrial applications.",
      sole: true,
    },
    {
      brand: "LIQUIMOLY",
      origin: "Germany",
      description: "Premium quality lubricants and additives known for their exceptional performance and reliability.",
      sole: false,
    },
    {
      brand: "Armor Oil",
      origin: "UAE",
      description: "Full range of quality lubricants and automotive care products.",
      sole: false,
    },
  ];

  const otherProducts = [
    {
      icon: Battery,
      title: "Batteries",
      description: "High-quality automotive batteries for all vehicle types, including Amara Raja brand batteries.",
    },
    {
      icon: Wrench,
      title: "Tubes & Flaps",
      description: "Premium Indian-made tubes and flaps for all tyre sizes with superior durability.",
    },
    {
      icon: CircleDot,
      title: "Tip Top Patches",
      description: "Quality tyre repair patches and vulcanizing solutions for professional repairs.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${tyresProduct})` }}
        />
        <div className="absolute inset-0 overlay-full" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <p className="text-primary font-semibold uppercase tracking-wider md:tracking-widest mb-3 md:mb-4 text-sm md:text-base">
              Our Products
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
              Premium <span className="text-gold">Automotive Products</span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground">
              Comprehensive range of tyres, lubricants, batteries, and accessories
              from trusted international brands.
            </p>
          </div>
        </div>
      </section>

      {/* Tyres Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <SectionHeading
                title="Tyres"
                subtitle="We proudly cater a full range of tyres for all vehicle types from premium international brands."
              />
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                {tyreCategories.map((category, index) => (
                  <div
                    key={index}
                    className="p-3 md:p-4 bg-card border border-border rounded-lg"
                  >
                    <h4 className="font-bold text-foreground mb-1 text-sm md:text-base">
                      {category.title}
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gold">
                Our Tyre Brands
              </h3>
              <div className="grid grid-cols-3 gap-2 md:gap-4">
                {tyreBrands.map((brand, index) => (
                  <div
                    key={index}
                    className={`p-2 md:p-4 rounded-lg border text-center card-hover ${
                      brand.highlight
                        ? "bg-primary/10 border-primary"
                        : "bg-card border-border"
                    }`}
                  >
                    <div className="font-bold text-foreground text-xs md:text-base">{brand.name}</div>
                    <div className="text-[10px] md:text-xs text-muted-foreground mt-1">
                      {brand.country}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lubricants Section */}
      <section className="py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Lubricants & Additives"
            subtitle="Premium lubricants for all automotive and industrial applications"
            centered
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12">
            {lubricantProducts.map((product, index) => (
              <div
                key={index}
                className="p-4 md:p-8 bg-background border border-border rounded-lg card-hover relative overflow-hidden"
              >
                {product.sole && (
                  <div className="absolute top-2 right-2 md:top-4 md:right-4 px-2 py-1 bg-primary text-primary-foreground text-[10px] md:text-xs font-bold rounded">
                    SOLE AGENT
                  </div>
                )}
                <Droplets className="w-8 h-8 md:w-12 md:h-12 text-primary mb-4 md:mb-6" />
                <h3 className="text-lg md:text-2xl font-bold text-foreground mb-1 md:mb-2">
                  {product.brand}
                </h3>
                <p className="text-xs md:text-sm text-primary mb-2 md:mb-4">{product.origin}</p>
                <p className="text-sm md:text-base text-muted-foreground">{product.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 md:mt-12 text-center">
            <img
              src={lubricantsProduct}
              alt="Premium Lubricants"
              className="max-w-2xl w-full mx-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Other Products */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Batteries & Accessories"
            subtitle="Complete range of automotive batteries, tubes, flaps, and repair materials"
            centered
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12">
            {otherProducts.map((product, index) => (
              <div
                key={index}
                className="p-4 md:p-8 bg-card border border-border rounded-lg text-center card-hover"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 flex items-center justify-center rounded-full bg-primary/10">
                  <product.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="text-base md:text-xl font-bold mb-2 md:mb-4 text-foreground">
                  {product.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4 md:mb-6">
            Need a Quote?
          </h2>
          <p className="text-primary-foreground/80 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
            Contact us today for competitive pricing on all our products. We serve
            retail customers, dealers, and corporate clients.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-background text-foreground font-semibold uppercase tracking-wider hover:bg-foreground hover:text-background transition-all text-sm md:text-base"
          >
            Get a Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
