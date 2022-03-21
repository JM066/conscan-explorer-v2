import React, { useRef, useState } from "react";
import { useRouter } from "next/router";

import Button from "@/components/Button";

import MagnifyingGlass from "@/assets/icons/magnifying-glass.svg";
import styles from "./SearchBox.module.scss";

function SearchBox() {
  const [inputSearch, setInputSearch] = useState<string | undefined>("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const searchSubmitHandler = (event: any) => {
    event.preventDefault();

    const refValue = inputRef?.current?.value;
    const numInput = /^\d+$/;
    if (refValue?.startsWith("0x") && refValue.length > 2) {
      router.push(`/wallet/${refValue}`);
    } else if (refValue && refValue.match(numInput)) {
      router.push(`/blocks/${refValue}`);
    } else {
      router.push({ pathname: `/txns/${refValue}` });
    }

    setInputSearch("");
  };
  return (
    <form className={styles.SearchBox} onSubmit={searchSubmitHandler}>
      <div className={styles.Title}>
        <div> CONUN BLOCKCHAIN EXPLORER</div>
        <div className={styles.Gradient}>CONSCAN</div>
      </div>
      <div className={styles.SearchBarCell}>
        <div className={styles.SearchPlaceholder}>
          <input
            placeholder="Search by block number or transaction hash"
            className={styles.InputWithNoOutline}
            ref={inputRef}
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
          />
          <Button variant="ghost" type="submit" className={styles.SerachButton}>
            <MagnifyingGlass />
          </Button>
        </div>
      </div>
    </form>
  );
}

export default SearchBox;
