interface Props {
  statusCode?: number | string;
  message?: string | unknown;
}
function ErrorMessage({ statusCode, message }: Props) {
  return (
    <div>
      {statusCode
        ? `An error ${statusCode} occured`
        : `An error: ${message} occured`}
    </div>
  );
}
export default ErrorMessage;
