const months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

export const concertFrenchStrToDate = (string: string) => {
  if (string === '') {
    return '';
  }
  const parts = string.split(" ");
  if (parts.length !== 4) throw Error(`Expected 4 parts, got ${parts.length}: "${string}"`);
  const [, date, searchMonth, year] = parts;
  const month = months.indexOf(searchMonth.toLowerCase());
  const numYear = parseInt(year, 10);
  const numDate = parseInt(date, 10);
  if (month < 0) throw Error(`Unknown month: "${searchMonth}"`);
  return new Date(numYear, month, numDate);
}