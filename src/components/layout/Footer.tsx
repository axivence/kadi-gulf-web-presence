import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import kadiLogo from "@/assets/kadi-logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {/* Company Info */}
          <div className="col-span-2 lg:col-span-1 space-y-4 md:space-y-6">
            <img
              src={kadiLogo}
              alt="KADI International Trading"
              className="h-10 md:h-12 w-auto"
            />
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
              One of the leading, established dealers and distributors of
              automotive products in the Kingdom of Bahrain since 1959.
            </p>
            <div className="flex gap-3 md:gap-4">
              <a
                href="#"
                className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm md:text-lg font-bold mb-3 md:mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              {["Home", "About", "Products", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-base"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm md:text-lg font-bold mb-3 md:mb-6 text-primary">Products</h4>
            <ul className="space-y-2 md:space-y-3">
              {["Tyres", "Lubricants", "Batteries", "Tubes & Flaps", "Additives"].map(
                (product) => (
                  <li key={product}>
                    <Link
                      to="/products"
                      className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-base"
                    >
                      {product}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-sm md:text-lg font-bold mb-3 md:mb-6 text-primary">Contact Us</h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-2 md:gap-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-xs md:text-sm">
                  Kingdom of Bahrain
                </span>
              </li>
              <li className="flex items-center gap-2 md:gap-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+97317703730"
                  className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm"
                >
                  +973 1770 3730
                </a>
              </li>
              <li className="flex items-center gap-2 md:gap-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@kadigroup.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm"
                >
                  info@kadigroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
          <p className="text-muted-foreground text-xs md:text-sm text-center md:text-left">
            © {currentYear} KADI International Trading Co WLL. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs md:text-sm">
            A Division of Bahrain Tyres Factory (BATREP)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
