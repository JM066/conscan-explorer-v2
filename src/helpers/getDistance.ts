import { formatDistance } from "date-fns";

export function getDistance(datePast: string) {
  const date = formatDistance(new Date(datePast), new Date(), {
    addSuffix: true,
  });
  return date;
}
