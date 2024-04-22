export { default as Home } from "./Home";
export { Layout } from "./Layout";
export { RequireAuthLayout } from "./Layout";
export { default as Login } from "./Login";
export { default as Signup } from "./Signup";
export { default as MobilePSP } from "./MobilePSP";
export { default as PSPCybersecurity } from "./PSPCybersecurity";
export { default as PSPIncidentFraud } from "./PSPIncidentFraud";
export { default as PSPScheduleOfDirectors } from "./PSPScheduleOfDirectors";
export { default as PSPScheduleOfSeniorMgt } from "./PSPScheduleOfSeniorMgt";
export { default as PSPScheduleOfShareholders } from "./PSPScheduleOfShareholders";
export { default as PSPScheduleOfTrustees } from "./PSPScheduleOfTrustees";
export { default as TrustAccountDetails } from "./TrustAccountDetails";
export { default as TrustAccountPlacement } from "./TrustAccountPlacement";
export { default as VerificationNotification } from "./VerificationNotification";

export const navLinks = [
  {
    id: 5,
    title: "Trust Account Details",
    link: "/trust-account-details",
    userType: "trust",
  },
  {
    id: 6,
    title: "Trust Account Placement",
    link: "/trust-account-placement",
    userType: "trust",
  },
  {
    id: 13,
    title: "PSP Incidents of fraud theft robbery",
    link: "/psp-incidents-of-fraud-theft-robbery",
    userType: "security",
  },
  {
    id: 14,
    title: "PSP Cybersecurity Incident Record",
    link: "/psp-cybersecurity-incident-record",
    userType: "cyber",
  },
  {
    id: 18,
    title: "PSP Schedule of Shareholders",
    link: "/psp-schedule-of-Shareholders",
    userType: "legal",
  },
  {
    id: 19,
    title: "PSP Schedule of Directors",
    link: "/psp-schedule-of-directors",
    userType: "legal",
  },
  {
    id: 20,
    title: "PSP Schedule of Senior Management",
    link: "/psp-schedule-of-senior-management",
    userType: "am",
  },
  {
    id: 21,
    title: "PSP Schedule of Trustees",
    link: "/psp-schedule-of-trustees",
    userType: "legal",
  },
  {
    id: 22,
    title: "Mobile PSP Counterfeit Currency Frauds",
    link: "/mobile-psp-counterfeit-currency-frauds",
    userType: "security",
  },
];
