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

export const mobilePSPLoader = async () => {
  const mobilePSPPromise = apiRequest(
    "/mobile-psp-counterfeit-currency-frauds"
  );

  return defer({
    mobilePSPResponse: mobilePSPPromise,
  });
};

export const cybersecurityIncidentLoader = async () => {
  const cybersecurityIncidentPromise = apiRequest(
    "/psp-cybersecurity-incident-record"
  );

  return defer({
    cybersecurityIncidentResponse: cybersecurityIncidentPromise,
  });
};

export const scheduleOfDirectorsLoader = async () => {
  const scheduleOfDirectorsPromise = apiRequest("/psp-schedule-of-directors");

  return defer({
    scheduleOfDirectorsResponse: scheduleOfDirectorsPromise,
  });
};

export const scheduleOfShareholdersLoader = async () => {
  const scheduleOfShareholdersPromise = apiRequest(
    "/psp-schedule-of-shareholders"
  );

  return defer({
    scheduleOfShareholdersResponse: scheduleOfShareholdersPromise,
  });
};

export const scheduleOfTrusteesLoader = async () => {
  const scheduleOfTrusteesPromise = apiRequest("/psp-schedule-of-trustees");

  return defer({
    scheduleOfTrusteesResponse: scheduleOfTrusteesPromise,
  });
};

export const scheduleOfSeniorMgtLoader = async () => {
  const scheduleOfSeniorMgtPromise = apiRequest(
    "/psp-schedule-of-senior-management"
  );

  return defer({
    scheduleOfSeniorMgtResponse: scheduleOfSeniorMgtPromise,
  });
};
