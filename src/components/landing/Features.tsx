export const Features = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
          Everything You Need to Succeed
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Deal Management",
              description: "Track and manage your deals with real-time updates and intelligent insights.",
              delay: "200ms",
            },
            {
              title: "Customer Engagement",
              description: "Stay connected with your customers through integrated communication tools.",
              delay: "400ms",
            },
            {
              title: "AI-Powered Insights",
              description: "Make data-driven decisions with our advanced AI analytics.",
              delay: "600ms",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-200 animate-fade-in"
              style={{ animationDelay: feature.delay }}
            >
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};