import { getTimeDistance, toCapitalize } from "@/helpers/index";
import classNames from "classnames";

interface Props {
  time: string | number;
  className?: string;
}

function TimeStamp({ time, className }: Props) {
  const date = getTimeDistance(time);

  return (
    <div className={classNames(className)}>{date && toCapitalize(date)}</div>
  );
}

export default TimeStamp;
