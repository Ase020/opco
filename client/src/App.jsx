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
  fraudIncidentsLoader,
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
        },
        {
          path: "/psp-cybersecurity-incident-record",
          element: <PSPCybersecurity />,
        },
        {
          path: "/psp-incidents-of-fraud-theft-robbery",
          element: <PSPIncidentFraud />,
          loader: fraudIncidentsLoader,
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
