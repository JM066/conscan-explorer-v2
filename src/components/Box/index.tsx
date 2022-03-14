import React from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import HStack from "@/components/HStack";
import Title from "@/components/Title";
import BackButton from "@/assets/icons/back-button.svg";
import styles from "./Box.module.scss";

interface Props {
  children?: React.ReactNode;
  className?: string;
  bottomLine?: boolean;
  position?: "start" | "center" | "end";
  goBackButton?: boolean;
  title?: string;
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
    <div
      className={classNames(
        styles.Box,
        styles[position],

        { [styles.horizontalLine]: bottomLine },
        className
      )}
    >
      {goBackButton && title && (
        <HStack>
          <div
            onClick={() => router.back()}
            className={styles.GoBackIconContainer}
          >
            <BackButton />
          </div>
          <Title title={title} className={styles.Title} />
        </HStack>
      )}
      {children}
    </div>
  );
}

export default Box;
