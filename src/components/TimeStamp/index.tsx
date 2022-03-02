import { getTimeDistance } from "@/helpers/index";
import classNames from "classnames";

interface Props {
  time: string;
  className?: string;
}

function TimeStamp({ time, className }: Props) {
  const date = getTimeDistance(time);

  return (
    <div className={classNames(className)}>
      {date && date.charAt(0).toUpperCase() + date.slice(1)}
    </div>
  );
}

export default TimeStamp;
