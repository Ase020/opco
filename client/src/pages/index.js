export { default as Home } from "./Home";
export { Layout } from "./Layout";
export { RequireAuthLayout } from "./Layout";
export { default as Login } from "./Login";
export { default as Signup } from "./Signup";
export { default as MobilePSP } from "./PSP/MobilePSP";
export { default as PSPCybersecurity } from "./PSP/PSPCybersecurity";
export { default as PSPIncidentFraud } from "./PSP/PSPIncidentFraud";
export { default as PSPScheduleOfCustomerComplaints } from "./PSP/PSPScheduleOfCustomerComplaints";
export { default as PSPScheduleOfDirectors } from "./PSP/PSPScheduleOfDirectors";
export { default as PSPScheduleOfSeniorMgt } from "./PSP/PSPScheduleOfSeniorMgt";
export { default as PSPScheduleOfShareholders } from "./PSP/PSPScheduleOfShareholders";
export { default as PSPScheduleOfTrustees } from "./PSP/PSPScheduleOfTrustees";
export { default as TrustAccountDetails } from "./PSP/TrustAccountDetails";
export { default as TrustAccountPlacement } from "./PSP/TrustAccountPlacement";
export { default as UserApprovals } from "./UserApprovals";
export { default as VerificationNotification } from "./VerificationNotification";

export { default as DirectorMgt } from "./BSD/DirectorMgt";
export { default as ExchangeRates } from "./BSD/ExchangeRates";
export { default as FinPosition } from "./BSD/FinPosition";
export { default as ForeignExchangePosition } from "./BSD/ForeignExchangePosition";
export { default as OutletInfo } from "./BSD/OutletInfo";
export { default as ShareholdersInfo } from "./BSD/ShareholdersInfo";

export const navLinks = [
  {
    id: 5,
    title: "Trust Account Details",
    link: "/trust-account-details",
    userType: "trust",
    category: "psp",
  },
  {
    id: 6,
    title: "Trust Account Placement",
    link: "/trust-account-placement",
    userType: "trust",
    category: "psp",
  },
  {
    id: 13,
    title: "PSP Incidents of fraud theft robbery",
    link: "/psp-incidents-of-fraud-theft-robbery",
    userType: "security",
    category: "psp",
  },
  {
    id: 14,
    title: "PSP Cybersecurity Incident Record",
    link: "/psp-cybersecurity-incident-record",
    userType: "cyber",
    category: "psp",
  },
  {
    id: 18,
    title: "PSP Schedule of Shareholders",
    link: "/psp-schedule-of-Shareholders",
    userType: "legal",
    category: "psp",
  },
  {
    id: 19,
    title: "PSP Schedule of Directors",
    link: "/psp-schedule-of-directors",
    userType: "legal",
    category: "psp",
  },
  {
    id: 20,
    title: "PSP Schedule of Senior Management",
    link: "/psp-schedule-of-senior-management",
    userType: "am",
    category: "psp",
  },
  {
    id: 21,
    title: "PSP Schedule of Trustees",
    link: "/psp-schedule-of-trustees",
    userType: "legal",
    category: "psp",
  },
  {
    id: 22,
    title: "Mobile PSP Counterfeit Currency Frauds",
    link: "/mobile-psp-counterfeit-currency-frauds",
    userType: "security",
    category: "psp",
  },
  {
    id: 23,
    title: "Particulars Of Directors/Management Information",
    link: "/particulars-Of-directors-management-information",
    userType: "legal",
    category: "bsd",
  },
  {
    id: 24,
    title: "Shareholder Information",
    link: "/shareholder-information",
    userType: "legal",
    category: "bsd",
  },
  {
    id: 25,
    title: "Exchange Rates Information",
    link: "/exchange-rates-information",
    userType: "trust",
    category: "bsd",
  },
  {
    id: 26,
    title: "Foreign Exchange Position",
    link: "/foreign-exchange-position",
    userType: "trust",
    category: "bsd",
  },
  {
    id: 27,
    title: "Statements Of Financial Position And Comprehensive Income",
    link: "/statements-of-financial-position-and-comprehensive-income",
    userType: "trust",
    category: "bsd",
  },
  {
    id: 28,
    title: "Branch/Outlet Information",
    link: "/outlet-information",
    userType: "imt",
    category: "bsd",
  },
  {
    id: 29,
    title: "PSP Schedule of Customer Complaints & Remedial Actions",
    link: "/psp-schedule-of-customer-complaints-&-remedial-actions",
    userType: "cx",
    category: "psp",
  },
];
