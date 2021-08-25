import { formatDistance } from "date-fns";

export function getTimeDistance(datePast: string) {
  const date = formatDistance(new Date(datePast), new Date(), {
    addSuffix: true,
  });
  return date;
}
