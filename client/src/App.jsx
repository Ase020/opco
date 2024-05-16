import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  DirectorMgt,
  ExchangeRates,
  FinPosition,
  ForeignExchangePosition,
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
  ShareholdersInfo,
  Signup,
  TrustAccountDetails,
  TrustAccountPlacement,
  UserApprovals,
  VerificationNotification,
} from "./pages";
import {
  cybersecurityIncidentLoader,
  directorMgtLoader,
  exchangeRatesLoader,
  financialPositionLoader,
  foreignExchangePositionLoader,
  fraudIncidentsLoader,
  mobilePSPLoader,
  scheduleOfDirectorsLoader,
  scheduleOfSeniorMgtLoader,
  scheduleOfShareholdersLoader,
  scheduleOfTrusteesLoader,
  shareholdersInfoLoader,
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
        {
          path: "/verification-notification",
          element: <VerificationNotification />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuthLayout />,
      children: [
        {
          path: "/user-approvals",
          element: <UserApprovals />,
        },
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
        {
          path: "/particulars-of-directors-management-information",
          element: <DirectorMgt />,
          loader: directorMgtLoader,
        },
        {
          path: "/shareholder-information",
          element: <ShareholdersInfo />,
          loader: shareholdersInfoLoader,
        },
        {
          path: "/exchange-rates-information",
          element: <ExchangeRates />,
          loader: exchangeRatesLoader,
        },
        {
          path: "/foreign-exchange-position",
          element: <ForeignExchangePosition />,
          loader: foreignExchangePositionLoader,
        },
        {
          path: "/statements-of-financial-position-and-comprehensive-income",
          element: <FinPosition />,
          loader: financialPositionLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
