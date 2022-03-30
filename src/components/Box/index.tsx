import React from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import HStack from "@/components/HStack";
import Title from "@/components/Title";
import BackButton from "@/assets/icons/back-button.svg";
import { TitleProps } from "@/components/Title";
import styles from "./Box.module.scss";

interface Props extends TitleProps {
  children?: React.ReactNode;
  className?: string;
  bottomLine?: boolean;
  position?: "start" | "center" | "end";
  goBackButton?: boolean;
}
function Box({
  children,
  className,
  position = "center",
  bottomLine = true,
  goBackButton,
  title,
}: Props) {
  const router = useRouter();
  return (
    <HStack
      className={classNames(
        styles.Box,
        styles[position],

        { [styles.horizontalLine]: bottomLine },
        className
      )}
    >
      <div
        onClick={() => router.back()}
        className={classNames(styles.GoBackIconContainer, {
          [styles.alignLeft]: !goBackButton,
        })}
      >
        {goBackButton && <BackButton />}
        <Title title={title} />
      </div>

      {children}
    </HStack>
  );
}

export default Box;
