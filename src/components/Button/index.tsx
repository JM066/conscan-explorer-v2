import Link from "next/link";
import classNames from "classnames";

import Spinner from "../Loading";

import styles from "./Button.module.scss";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: any;
  round?: boolean;
  loading?: boolean;
  link?: string;
  variant?: "primary" | "secondary" | "ghost";
}

function Button({
  children,
  className,
  round,
  loading = false,
  link,
  variant = "primary",
  ...props
}: ButtonProps) {
  if (link) {
    return (
      <Link href={link}>
        <a className={classNames(styles.Link, className)}>{children}</a>
      </Link>
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
