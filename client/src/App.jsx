import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  Home,
  MobilePSP,
  PSPCybersecurity,
  PSPIncidentFraud,
  PSPScheduleOfDirectors,
  PSPScheduleOfSeniorMgt,
  PSPScheduleOfShareholders,
  PSPScheduleOfTrustees,
  TrustAccountDetails,
  TrustAccountPlacement,
} from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/mobile-psp-counterfeit-currency-frauds",
      element: <MobilePSP />,
    },
    {
      path: "/psp-cybersecurity-incident-record",
      element: <PSPCybersecurity />,
    },
    {
      path: "/psp-incidents-of-fraud-theft-robbery",
      element: <PSPIncidentFraud />,
    },
    {
      path: "/psp-schedule-of-directors",
      element: <PSPScheduleOfDirectors />,
    },
    {
      path: "/psp-schedule-of-senior-management",
      element: <PSPScheduleOfSeniorMgt />,
    },
    {
      path: "/psp-schedule-of-Shareholders",
      element: <PSPScheduleOfShareholders />,
    },
    {
      path: "/psp-schedule-of-trustees",
      element: <PSPScheduleOfTrustees />,
    },
    {
      path: "/trust-account-details",
      element: <TrustAccountDetails />,
    },
    {
      path: "/trust-account-placement",
      element: <TrustAccountPlacement />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
