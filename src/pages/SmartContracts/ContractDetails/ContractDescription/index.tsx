import React from "react";
import classNames from "classnames";
import HStack from "@/components/HStack";
import VStack from "@/components/VStack";
import ContractIcon from "@/components/ContractIcon";
import { getTimeDistance, getLocalTime } from "@/helpers/index";
import { ContractType } from "@/types/index";
import styles from "./ContractDescription.module.scss";

const DESCRIPTION = {
  drive:
    "The drive-type contract is used when users share files or click ‘like’ button using the CONUN Drive service.",
  conx: "The coin-type contract is used to transfer tokens between users, as trade, or as a reward for using one of the other services.",
  bridge:
    "The basic-type contract is used for internal operations, such as creating new contracts in the blockchain network.",
};

function Section({
  title,
  data,
  className,
}: {
  title: string;
  data: string;
  className: string;
}) {
  const displayDescription = (name: string) => {
    if (name === "drive") {
      return DESCRIPTION.drive;
    }
    if (name === "conx") {
      return DESCRIPTION.conx;
    }
    if (name === "bridge") {
      return DESCRIPTION.bridge;
    }
  };

  return (
    <HStack className={classNames(styles.Section, className)}>
      <div className={styles.Partition}>|</div>
      <div className={styles.Title}>{title}</div>
      {title === "UPDATED" ? (
        <VStack className={styles.DescriptionBox}>
          <div>{getTimeDistance(data)}</div>
          <div className={styles.Description}>
            {getLocalTime(new Date(data)).toString()}
          </div>
        </VStack>
      ) : (
        <VStack className={styles.DescriptionBox}>
          {title === "TYPE" ? (
            <ContractIcon contractName={data} />
          ) : (
            <div>{data}</div>
          )}

          {title === "TITLE" && (
            <div className={styles.Description}>{displayDescription(data)}</div>
          )}
        </VStack>
      )}
    </HStack>
  );
}

interface Props {
  contract: ContractType;
  className?: string;
}
function ContractDescription({ contract, className }: Props) {
  return (
    <HStack
      centered={false}
      className={classNames(styles.DescriptionContainer, className)}
    >
      <Section
        className={classNames(styles.Title, className)}
        title="TITLE"
        data={contract.chaincodename}
      />

      <Section
        className={classNames(styles.Type, className)}
        title="TYPE"
        data={contract.chaincodename}
      />

      <Section
        className={classNames(styles.Author, className)}
        title="AUTHOR"
        data="CONUN"
      />

      <Section
        className={classNames(styles.Updated, className)}
        title="UPDATED"
        data={contract.codes[0].createdt}
      />
    </HStack>
  );
}

export default ContractDescription;
