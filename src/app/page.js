import GradientWrapper from "@/components/GradientWrapper";
import CTA from "@/components/ui/CTA";
import Features from "@/components/ui/Features";
import Footer from "@/components/ui/Footer";
import FooterCTA from "@/components/ui/FooterCTA";
import Hero from "@/components/ui/Hero";
import LogoGrid from "@/components/ui/LogoGrid";
import Testimonials from "@/components/ui/Testimonials";
import ToolKit from "@/components/ui/ToolKit";
import CategoriesGrid from "./Componet/Categores/CategoriesGrid";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  // Filter Data apllication in Dahborde_company ["pending","accepted","rejected"]
  // Crate dahborde_user page
  // Crate dahborde_admin page
  return (
    <div className="min-h-screen container px-5 m-auto   overflow-hidden">
      {/* Hero Section */}
      <Navbar />
      <Hero />

      {/* Categories */}
      <CategoriesGrid />

      <GradientWrapper>
        <Features />
        <CTA />
      </GradientWrapper>
      <ToolKit />
      <GradientWrapper>
        <Testimonials />
      </GradientWrapper>
      <FooterCTA />
      <LogoGrid />
      <Footer />

      {/* Features Section */}
      {/* <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Revolutionary Features
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our platform offers cutting-edge capabilities that will transform
              your digital experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaBolt className="w-6 h-6" />,
                title: "Lightning Fast",
                description:
                  "Experience unprecedented speed with our optimized infrastructure.",
              },
              {
                icon: <FaShieldAlt className="w-6 h-6" />,
                title: "Ultra Secure",
                description:
                  "Advanced encryption and security protocols to protect your data.",
              },
              {
                icon: <FaGlobe className="w-6 h-6" />,
                title: "Global Reach",
                description:
                  "Connect with users worldwide with our distributed network.",
              },
              {
                icon: <FaUsers className="w-6 h-6" />,
                title: "AI Collaboration",
                description:
                  "Work alongside advanced AI to boost your productivity.",
              },
              {
                icon: <FaStar className="w-6 h-6" />,
                title: "Premium Experience",
                description:
                  "Enjoy a seamless, intuitive interface designed for the future.",
              },
              {
                icon: <FaCheck className="w-6 h-6" />,
                title: "Reliable Service",
                description:
                  "99.99% uptime guarantee with 24/7 monitoring and support.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-colors group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-purple-600/30 group-hover:to-blue-600/30 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-40 -left-40 w-80 h-80 bg-purple-700 rounded-full filter blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                What Our Users Say
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hear from our satisfied customers who are already experiencing the
              future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Tech Innovator",
                content:
                  "This platform has completely transformed how we approach our projects. The speed and efficiency are unmatched.",
              },
              {
                name: "Sarah Chen",
                role: "Digital Strategist",
                content:
                  "The AI collaboration features have boosted our team's productivity by 300%. It's like having a team from the future.",
              },
              {
                name: "Michael Rodriguez",
                role: "Startup Founder",
                content:
                  "We've tried many solutions, but nothing comes close to this. It's truly technology from 2030 available today.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.content}</p>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5 text-yellow-500" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Pricing Section */}
      {/* <section id="pricing" className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Future-Proof Pricing
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the plan that fits your needs and start experiencing the
              future today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$49",
                description: "Perfect for individuals and small projects",
                features: [
                  "5 Projects",
                  "Basic AI Assistance",
                  "Standard Security",
                  "Email Support",
                  "1 Team Member",
                ],
              },
              {
                name: "Pro",
                price: "$99",
                description: "Ideal for growing businesses and teams",
                features: [
                  "Unlimited Projects",
                  "Advanced AI Collaboration",
                  "Enhanced Security",
                  "Priority Support",
                  "5 Team Members",
                  "API Access",
                ],
              },
              {
                name: "Enterprise",
                price: "$249",
                description: "For organizations requiring maximum capabilities",
                features: [
                  "Unlimited Everything",
                  "Custom AI Training",
                  "Military-grade Security",
                  "24/7 Dedicated Support",
                  "Unlimited Team Members",
                  "Custom Integrations",
                  "Dedicated Infrastructure",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border ${
                  index === 1
                    ? "bg-gradient-to-b from-purple-900/40 to-blue-900/40 border-purple-500"
                    : "bg-gray-900 border-gray-800"
                }`}>
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <button
                  className={`w-full py-2 rounded-full font-medium mb-6 ${
                    index === 1
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90"
                      : "border border-purple-500 hover:bg-purple-900/20"
                  }`}>
                  Get Started
                </button>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <FaCheck className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-700 rounded-full filter blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 rounded-2xl p-8 md:p-12 border border-purple-500/30 backdrop-blur-sm">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Experience the Future?
              </h2>
              <p className="text-gray-300 mb-8">
                Join thousands of forward-thinking individuals and businesses
                who are already using our platform to stay ahead of the curve.
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity inline-flex items-center">
                Get Started Now <FaChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      {/* <section id="contact" className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Get in Touch
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have questions or ready to start? Contact our team for more
              information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your message"></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaEnvelope className="w-5 h-5 text-purple-400 mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-400">contact@futureproject.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaPhone className="w-5 h-5 text-purple-400 mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="w-5 h-5 text-purple-400 mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-400">
                        123 Future Avenue, Innovation District, Tech City
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    {
                      icon: <FaTwitter className="w-5 h-5" />,
                      name: "Twitter",
                    },
                    {
                      icon: <FaLinkedin className="w-5 h-5" />,
                      name: "LinkedIn",
                    },
                    {
                      icon: <FaInstagram className="w-5 h-5" />,
                      name: "Instagram",
                    },
                    { icon: <FaGithub className="w-5 h-5" />, name: "GitHub" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:border-purple-500 transition-colors"
                      aria-label={social.name}>
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center">
                  <FaBolt className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  FutureProject
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Bringing the technology of 2030 to today's world.
              </p>
            </div>

            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Testimonials", "FAQ"],
              },
              {
                title: "Company",
                links: ["About Us", "Careers", "Blog", "Press"],
              },
              {
                title: "Resources",
                links: [
                  "Documentation",
                  "Support",
                  "Privacy Policy",
                  "Terms of Service",
                ],
              },
            ].map((column, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-purple-400 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2030 FutureProject. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
