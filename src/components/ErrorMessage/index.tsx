import React from "react";
interface Props {
  statusCode?: number | string;
}
function ErrorMessage({ statusCode }: Props) {
  return <div>{statusCode && `An error ${statusCode} occured`}</div>;
}
export default ErrorMessage;
