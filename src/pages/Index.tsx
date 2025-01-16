import { UrgentDealsCard } from "@/components/dashboard/UrgentDealsCard";
import { AccountsAtRiskCard } from "@/components/dashboard/AccountsAtRiskCard";
import { TaskRemindersCard } from "@/components/dashboard/TaskRemindersCard";
import { RecentActivitiesCard } from "@/components/dashboard/RecentActivitiesCard";
import { LastWeekRecapCard } from "@/components/dashboard/LastWeekRecapCard";
import { ThisWeekOutlookCard } from "@/components/dashboard/ThisWeekOutlookCard";

const Index = () => {
  return (
    <div className="flex-1 p-8 bg-gray-50">
      <h1 className="text-4xl font-semibold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UrgentDealsCard />
        <AccountsAtRiskCard />
        <TaskRemindersCard />
        <RecentActivitiesCard />
        <LastWeekRecapCard />
        <ThisWeekOutlookCard />
      </div>
    </div>
  );
};

export default Index;