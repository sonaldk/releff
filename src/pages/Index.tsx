import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="flex min-h-screen">
      <Navbar />
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-semibold mb-6">Dashboard</h1>
        <p className="text-lg text-gray-600">Welcome to your workspace.</p>
      </main>
    </div>
  );
};

export default Index;