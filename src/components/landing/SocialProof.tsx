export const SocialProof = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold animate-fade-in">
          Trusted by Growing Businesses
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { number: "500+", text: "Active Users", delay: "200ms" },
            { number: "10k+", text: "Deals Tracked", delay: "400ms" },
            { number: "98%", text: "Customer Satisfaction", delay: "600ms" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 hover:scale-105 transition-transform duration-200 animate-fade-in"
              style={{ animationDelay: stat.delay }}
            >
              <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
              <p className="text-gray-600">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};