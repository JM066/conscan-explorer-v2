import classNames from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  nostyle?: boolean;
}

function Button({ children, nostyle, className }: ButtonProps) {
  if (nostyle) {
    return (
      <button className={classNames(styles.NoStyle, className)}>
        {children}
      </button>
    );
  }

  return (
    <button className={classNames(styles.Button, className)}>{children}</button>
  );
}

export default Button;
