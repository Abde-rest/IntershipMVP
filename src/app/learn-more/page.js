import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import GradientWrapper from "@/components/GradientWrapper";
import Btncontact from "./Btncontact/btn";
export default function LearnMore() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Learn About Our Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive platform designed to connect companies and
            professionals, facilitating employment and collaboration
          </p>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              Comprehensive Services
            </h3>
            <p className="text-gray-600">
              We offer a complete range of services for companies and
              professionals, making communication and collaboration easier
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Smart Recruitment</h3>
            <p className="text-gray-600">
              An advanced recruitment system that helps companies find the best
              talent and professionals find suitable job opportunities
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Active Community</h3>
            <p className="text-gray-600">
              A vibrant community of professionals and companies, providing
              opportunities for networking and knowledge exchange
            </p>
          </div>
        </div>

        {/* How It Works Section */}
        <GradientWrapper>
          <div className="py-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Create Account</h3>
                <p className="text-gray-600">
                  Sign up and choose the account type that suits you
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Complete Profile</h3>
                <p className="text-gray-600">
                  Add your information, skills, and experience
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Start Connecting</h3>
                <p className="text-gray-600">
                  Connect with companies or professionals and begin your journey
                  to success
                </p>
              </div>
            </div>
          </div>
        </GradientWrapper>

        {/* Contact Section */}
        <div className="text-center py-16">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="text-gray-600 mb-8">
            Have questions or inquiries? We&apos;re here to help
          </p>
          <Btncontact />
        </div>
      </main>

      <Footer />
    </div>
  );
}
