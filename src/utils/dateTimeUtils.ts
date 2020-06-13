import { getCurrentLanguage } from "../components/TopBar/LanguageSelector";

const months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

export const concertFrenchStrToDate = (string: string) => {
  if (string === '') {
    return new Date();
  }
  const parts = string.split(" ");
  if (parts.length !== 4) return new Date();
  const [, date, searchMonth, year] = parts;
  const month = months.indexOf(searchMonth.toLowerCase());
  const numYear = parseInt(year, 10);
  const numDate = parseInt(date, 10);
  if (month < 0) return new Date();
  return new Date(numYear, month, numDate);
}

export const getDateObject = (dateString: string): Date => {
  const isFrench = getCurrentLanguage() === "fr";
  return isFrench ? concertFrenchStrToDate(dateString) : new Date(dateString);
}

export const hasDatePassed = (date: Date) => {
  return date.getTime() < Date.now();
}