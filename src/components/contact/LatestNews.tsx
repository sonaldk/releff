import { Newspaper } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export const LatestNews = () => {
  return (
    <Card className="mt-6">
      <CardHeader className="flex flex-row items-center gap-2">
        <Newspaper className="h-5 w-5" />
        <h3 className="text-lg font-semibold">Latest News</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 line-clamp-2">
          TechCorp Solutions announces strategic partnership with Global Cloud Services, 
          aiming to enhance their enterprise solutions portfolio with advanced cloud capabilities.
        </p>
        <a 
          href="#" 
          className="text-sm text-blue-600 hover:text-blue-800 mt-2 inline-block"
        >
          Read more →
        </a>
      </CardContent>
    </Card>
  );
};