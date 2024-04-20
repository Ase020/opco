import { defer } from "react-router-dom";

import apiRequest from "./apiRequest";

export const trustAccDetailsLoader = async () => {
  const trustAccDetailsPromise = apiRequest("/trust-accounts");

  return defer({
    trustAccDetailsResponse: trustAccDetailsPromise,
  });
};

export const trustAccPlacementsLoader = async () => {
  const trustAccPlacementsPromise = apiRequest("/trust-account-placements");

  return defer({
    trustAccPlacementsResponse: trustAccPlacementsPromise,
  });
};

export const fraudIncidentsLoader = async () => {
  const fraudIncidentsPromise = apiRequest(
    "/psp-incidents-of-fraud-theft-robbery"
  );

  return defer({
    fraudIncidentsResponse: fraudIncidentsPromise,
  });
};
