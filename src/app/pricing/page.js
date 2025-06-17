import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { FaCheck } from "react-icons/fa";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "مجاني",
      description: "Perfect for students starting their journey",
      features: [
        "Access to basic internship listings",
        "Create and manage your profile",
        "Apply to internships",
        "Basic search functionality",
        "Email notifications",
      ],
    },
    {
      name: "Pro",
      price: "1,350",
      period: " دج/شهرياً",
      description: "Ideal for serious job seekers",
      features: [
        "All Basic features",
        "Priority application processing",
        "Advanced search filters",
        "Resume builder",
        "Interview preparation resources",
        "Career guidance",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "مخصص",
      description: "For companies and organizations",
      features: [
        "Custom pricing based on needs",
        "Dedicated account manager",
        "Advanced analytics",
        "Custom branding",
        "API access",
        "Priority support",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your career journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-8 ${
                plan.popular ? "ring-2 ring-blue-500" : ""
              }`}>
              {plan.popular && (
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mt-4">
                {plan.name}
              </h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                )}
              </div>
              <p className="mt-2 text-gray-600">{plan.description}</p>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <FaCheck className="text-green-500 mr-3" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full py-3 px-4 rounded-lg font-medium ${
                  plan.popular
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
