import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+973 1770 3730", "+973 1770 3731"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@kadigroup.com", "sales@kadigroup.com"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Kingdom of Bahrain"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Saturday - Thursday", "8:00 AM - 6:00 PM"],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <p className="text-primary font-semibold uppercase tracking-widest mb-4">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Get In <span className="text-gold">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-lg text-center card-hover"
              >
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary/10">
                  <info.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-3">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-muted-foreground text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                title="Send Us a Message"
                subtitle="Fill out the form below and our team will get back to you within 24 hours."
              />
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">
                      Product Inquiries
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Get quotes for tyres, lubricants, batteries, and more.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">
                      Service Appointments
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Schedule tyre services, alignment, or retreading.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">
                      Dealer Partnerships
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Become a partner dealer in our distribution network.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="bg-card border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="bg-card border-border"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-foreground"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+973 XXXX XXXX"
                      className="bg-card border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-foreground"
                    >
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Product Inquiry"
                      className="bg-card border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your requirements..."
                    rows={5}
                    className="bg-card border-border resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-hero"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-secondary">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Kingdom of Bahrain
            </h3>
            <p className="text-muted-foreground">
              Multiple locations across Bahrain
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
