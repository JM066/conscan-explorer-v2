import React, { useRef } from "react";
import { useRouter } from "next/router";

import Button from "@/components/Button";

import MagnifyingGlass from "@/assets/icons/magnifying-glass.svg";
import styles from "./SearchBox.module.scss";

function SearchBox() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const searchSubmitHandler = (event: any) => {
    event.preventDefault();
    const value = inputRef.current?.value;
    if (value?.startsWith("0x") && value.length > 2) {
      const fullPath = `/blocks/${value}`;
      router.push(fullPath);
    } else {
      const fullPath = `/transactions/${value}`;
      router.push(fullPath);
    }
  };
  return (
    <form className={styles.SearchBox} onSubmit={searchSubmitHandler}>
      <div className={styles.Title}>
        <p>CONUN BLOCKCHAIN EXPLORER</p>
        <p className={styles.Gradient}>CONSCAN</p>
      </div>
      <div className={styles.SearchBarCell}>
        <div className={styles.SearchPlaceholder}>
          <input
            placeholder="Search by block number or transaction hash"
            className={styles.InputWithNoOutline}
            ref={inputRef}
          />
          <Button noStyle type="submit">
            <MagnifyingGlass />
          </Button>
        </div>
      </div>
    </form>
  );
}

export default SearchBox;
