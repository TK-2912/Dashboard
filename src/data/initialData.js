export const initialData = [
  {
    category: "CSPM",
    widgets: [],
  },
  {
    category: "CWPP",
    widgets: [],
  },
  {
    category: "Registry",
    widgets: [],
  },
  {
    category: "Ticket",
    widgets: [],
  },
];

// Important: category names must match Dashboard categories now!
export const availableWidgets = {
  "CSPM": ["Cloud Accounts", "Cloud Account Risk Assessment"],
  "CWPP": ["Top 5 Namespace Specific Alerts", "Workload Alerts"],
  "Registry": ["Registry Risk Assessment", "Registry Vulnerabilities"],
  "Ticket": ["Ticket Open Rate", "Ticket Resolution Time"],
};
