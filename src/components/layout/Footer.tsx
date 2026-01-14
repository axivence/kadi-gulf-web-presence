import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import kadiLogo from "@/assets/kadi-logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img
              src={kadiLogo}
              alt="KADI International Trading"
              className="h-12 w-auto"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              One of the leading, established dealers and distributors of
              automotive products in the Kingdom of Bahrain since 1959.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Products", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-primary">Products</h4>
            <ul className="space-y-3">
              {["Tyres", "Lubricants", "Batteries", "Tubes & Flaps", "Additives"].map(
                (product) => (
                  <li key={product}>
                    <Link
                      to="/products"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {product}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-primary">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Kingdom of Bahrain
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+97317703730"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +973 1770 3730
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@kadigroup.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  info@kadigroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} KADI International Trading Co WLL. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            A Division of Bahrain Tyres Factory (BATREP)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
