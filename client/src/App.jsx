import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  Home,
  Layout,
  Login,
  MobilePSP,
  PSPCybersecurity,
  PSPIncidentFraud,
  PSPScheduleOfDirectors,
  PSPScheduleOfSeniorMgt,
  PSPScheduleOfShareholders,
  PSPScheduleOfTrustees,
  RequireAuthLayout,
  Signup,
  TrustAccountDetails,
  TrustAccountPlacement,
} from "./pages";
import {
  cybersecurityIncidentLoader,
  fraudIncidentsLoader,
  mobilePSPLoader,
  scheduleOfDirectorsLoader,
  scheduleOfSeniorMgtLoader,
  scheduleOfShareholdersLoader,
  scheduleOfTrusteesLoader,
  trustAccDetailsLoader,
  trustAccPlacementsLoader,
} from "./lib/loaders";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuthLayout />,
      children: [
        {
          path: "/mobile-psp-counterfeit-currency-frauds",
          element: <MobilePSP />,
          loader: mobilePSPLoader,
        },
        {
          path: "/psp-cybersecurity-incident-record",
          element: <PSPCybersecurity />,
          loader: cybersecurityIncidentLoader,
        },
        {
          path: "/psp-incidents-of-fraud-theft-robbery",
          element: <PSPIncidentFraud />,
          loader: fraudIncidentsLoader,
        },
        {
          path: "/psp-schedule-of-directors",
          element: <PSPScheduleOfDirectors />,
          loader: scheduleOfDirectorsLoader,
        },
        {
          path: "/psp-schedule-of-senior-management",
          element: <PSPScheduleOfSeniorMgt />,
          loader: scheduleOfSeniorMgtLoader,
        },
        {
          path: "/psp-schedule-of-shareholders",
          element: <PSPScheduleOfShareholders />,
          loader: scheduleOfShareholdersLoader,
        },
        {
          path: "/psp-schedule-of-trustees",
          element: <PSPScheduleOfTrustees />,
          loader: scheduleOfTrusteesLoader,
        },
        {
          path: "/trust-account-details",
          element: <TrustAccountDetails />,
          loader: trustAccDetailsLoader,
        },
        {
          path: "/trust-account-placement",
          element: <TrustAccountPlacement />,
          loader: trustAccPlacementsLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
