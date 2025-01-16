import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-primary">Releff</h2>
          <Link to="/auth">
            <Button variant="outline">Sign In</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Transform Your Business Relationships
            </h1>
            <p className="text-xl text-gray-600">
              Streamline your customer relationships, track deals, and boost engagement with our intelligent CRM platform.
            </p>
            <div className="pt-4">
              <Link to="/auth">
                <Button size="lg" className="text-lg px-8">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Person working on laptop"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Everything You Need to Succeed
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Deal Management</h3>
              <p className="text-gray-600">
                Track and manage your deals with real-time updates and intelligent insights.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Customer Engagement</h3>
              <p className="text-gray-600">
                Stay connected with your customers through integrated communication tools.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">AI-Powered Insights</h3>
              <p className="text-gray-600">
                Make data-driven decisions with our advanced AI analytics.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Trusted by Growing Businesses
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6">
              <p className="text-4xl font-bold text-primary mb-2">500+</p>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-primary mb-2">10k+</p>
              <p className="text-gray-600">Deals Tracked</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-primary mb-2">98%</p>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl">
              Join thousands of businesses already using our platform to grow their relationships and revenue.
            </p>
            <div className="pt-4">
              <Link to="/auth">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8"
                >
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-xl font-bold text-primary">Releff</h2>
            <p className="text-gray-600">© 2024 Releff. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
