export const mockClients = {
  "techcorp-inc": {
    name: "TechCorp Inc.",
    status: "At Risk",
    reason: "No engagement in 30 days",
    lastEngagement: "30 days ago",
    industry: "Technology",
    revenue: "$5M",
    employees: 250,
    contacts: 12,
    activeDeals: 3,
    riskMetrics: {
      engagementScore: "Low",
      churnProbability: "High",
      lastMeeting: "2024-01-15",
      openTickets: 5
    }
  },
  "global-systems": {
    name: "Global Systems",
    status: "At Risk",
    reason: "Key champion left",
    details: "CTO departed",
    industry: "Manufacturing",
    revenue: "$8M",
    employees: 400,
    contacts: 15,
    activeDeals: 2,
    riskMetrics: {
      engagementScore: "Medium",
      churnProbability: "Medium",
      lastMeeting: "2024-02-01",
      openTickets: 2
    }
  },
  "innovate-co": {
    name: "Innovate Co.",
    status: "At Risk",
    reason: "Delayed payment",
    amount: "$25,000",
    industry: "Software",
    revenue: "$3M",
    employees: 120,
    contacts: 8,
    activeDeals: 4,
    riskMetrics: {
      engagementScore: "Low",
      churnProbability: "High",
      lastMeeting: "2024-02-10",
      openTickets: 7
    }
  }
};

export const clientsList = [
  {
    name: "TechCorp Inc.",
    employees: 250,
    website: "techcorp.com",
    dealsCount: 8,
    revenue: 5000000,
    health: "At Risk"
  },
  {
    name: "Global Systems",
    employees: 400,
    website: "globalsystems.com",
    dealsCount: 5,
    revenue: 8000000,
    health: "At Risk"
  },
  {
    name: "Innovate Co.",
    employees: 120,
    website: "innovateco.com",
    dealsCount: 4,
    revenue: 3000000,
    health: "At Risk"
  }
];