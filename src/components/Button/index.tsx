import classNames from "classnames";

import Spinner from "../Loading";

import styles from "./Button.module.scss";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className: any;
  noStyle?: boolean;
  round?: boolean;
  loading?: boolean;
  variant?: "primary" | "secondary";
}

function Button({
  children,
  className,
  noStyle,
  round,
  loading = false,
  variant = "primary",
  ...props
}: ButtonProps) {
  if (noStyle) {
    return (
      <button
        className={classNames(styles.NoStyleButton, className)}
        {...props}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      className={classNames(
        styles.Button,
        styles[variant],
        { [styles.round]: round },
        className
      )}
      {...props}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
}

export default Button;
