const months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

export const concertFrenchStrToDate = (string: string) => {
  if (string === '') {
    return '';
  }
  const parts = string.split(" ");
  if (parts.length !== 4) return "";
  const [, date, searchMonth, year] = parts;
  const month = months.indexOf(searchMonth.toLowerCase());
  const numYear = parseInt(year, 10);
  const numDate = parseInt(date, 10);
  if (month < 0) return "";
  return new Date(numYear, month, numDate);
}