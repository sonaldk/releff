export const clientsDatabase = {
  'techcorp-solutions': {
    organization: 'TechCorp Solutions',
    name: 'John Smith',
    email: 'john@techcorp.com',
    phone: '+1 (555) 123-4567',
    lastContact: '2024-02-15',
    lastMeeting: '2024-02-10',
    lastContactPerson: 'Sarah Johnson',
    engagementScore: '85%',
    sentiment: 'Positive',
    influence: 'High',
    organizationContact: 'Primary',
    riskIndex: 'Low',
    customerSatisfaction: '92%',
    deepestRelationship: 'CTO',
    broadestRelationship: '5 Departments',
    relationshipScore: '88%',
    interactionMetrics: {
      deals: 8,
      emails: 245,
      calls: 32,
      meetings: 15
    },
    emails: [
      {
        date: '2024-02-15',
        subject: 'Project Update Meeting',
        from: 'sarah@techcorp.com',
        hasAttachment: true
      },
      {
        date: '2024-02-14',
        subject: 'Contract Review',
        from: 'john@techcorp.com',
        hasAttachment: true
      }
    ],
    engagementHistory: [
      { month: 'Jan', score: 75, meetings: 4, responses: 85 },
      { month: 'Feb', score: 85, meetings: 6, responses: 90 },
      { month: 'Mar', score: 80, meetings: 5, responses: 88 }
    ]
  },
  'global-systems-inc': {
    organization: 'Global Systems Inc',
    name: 'Emily Brown',
    email: 'emily@globalsys.com',
    phone: '+1 (555) 234-5678',
    lastContact: '2024-02-14',
    lastMeeting: '2024-02-08',
    lastContactPerson: 'Michael Chen',
    engagementScore: '78%',
    sentiment: 'Neutral',
    influence: 'Medium',
    organizationContact: 'Secondary',
    riskIndex: 'Medium',
    customerSatisfaction: '85%',
    deepestRelationship: 'COO',
    broadestRelationship: '3 Departments',
    relationshipScore: '75%',
    interactionMetrics: {
      deals: 5,
      emails: 180,
      calls: 25,
      meetings: 12
    },
    emails: [
      {
        date: '2024-02-14',
        subject: 'Quarterly Review',
        from: 'michael@globalsys.com',
        hasAttachment: true
      },
      {
        date: '2024-02-12',
        subject: 'Implementation Timeline',
        from: 'emily@globalsys.com',
        hasAttachment: false
      }
    ],
    engagementHistory: [
      { month: 'Jan', score: 70, meetings: 3, responses: 80 },
      { month: 'Feb', score: 78, meetings: 4, responses: 85 },
      { month: 'Mar', score: 75, meetings: 4, responses: 82 }
    ]
  },
  'innovate-ai': {
    organization: 'Innovate AI',
    name: 'David Wilson',
    email: 'david@innovateai.com',
    phone: '+1 (555) 345-6789',
    lastContact: '2024-02-13',
    lastMeeting: '2024-02-05',
    lastContactPerson: 'Lisa Park',
    engagementScore: '62%',
    sentiment: 'Negative',
    influence: 'Low',
    organizationContact: 'Tertiary',
    riskIndex: 'High',
    customerSatisfaction: '68%',
    deepestRelationship: 'Product Manager',
    broadestRelationship: '2 Departments',
    relationshipScore: '65%',
    interactionMetrics: {
      deals: 3,
      emails: 120,
      calls: 18,
      meetings: 8
    },
    emails: [
      {
        date: '2024-02-13',
        subject: 'Service Issues',
        from: 'lisa@innovateai.com',
        hasAttachment: false
      },
      {
        date: '2024-02-10',
        subject: 'Support Request',
        from: 'david@innovateai.com',
        hasAttachment: true
      }
    ],
    engagementHistory: [
      { month: 'Jan', score: 65, meetings: 2, responses: 75 },
      { month: 'Feb', score: 62, meetings: 3, responses: 70 },
      { month: 'Mar', score: 60, meetings: 2, responses: 68 }
    ]
  }
};