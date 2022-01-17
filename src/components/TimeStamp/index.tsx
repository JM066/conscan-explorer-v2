import { formatDistance } from "date-fns";
import classNames from "classnames";

interface Props {
  time: string;
  className?: string;
}

function TimeStamp({ time, className }: Props) {
  const date = formatDistance(new Date(time), new Date(), {
    addSuffix: true,
  });

  return <div className={classNames(className)}>{date}</div>;
}

export default TimeStamp;
