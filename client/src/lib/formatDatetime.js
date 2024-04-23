export const formatDateTime = (date) => {
  const datetime = new Date(date);

  const formattedDate = datetime.toLocaleDateString("en-GB");
  const formattedTime = datetime.toLocaleTimeString();

  return `${formattedDate} ${formattedTime}`;
};
