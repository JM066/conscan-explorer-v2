import React, { useEffect, useState } from "react";
import ReactEmbedGist from "react-embed-gist";
import SmallSpinner from "@/components/SmallSpinner";
import styles from "./CodeSnippetTab.module.scss";

interface Props {
  tableWidth?: number;
  contractName: string;
}
function CodeSnippetTab({ tableWidth, contractName }: Props) {
  const [gist, setGist] = useState<string>("");
  const GetGistByContract = () => {
    switch (contractName) {
      case "conx":
        setGist("Ruffiano/1ad1cedede6bf7c8313325e7ca2d25f5");
        break;
      case "bridge":
        setGist("Ruffiano/38399700cbdc3dfb91a542863119a1ed");
        break;
      case "drive":
        setGist("Ruffiano/1d8fdef2fca951e4703355a53b626f80");
      default:
        console.log("no data found");
    }
  };
  useEffect(() => {
    GetGistByContract();
  }, []);

  return (
    <div
      style={{
        minWidth: tableWidth,
      }}
    >
      {gist ? (
        <ReactEmbedGist
          gist={gist}
          titleClass="gist__title"
          wrapperClass={styles.GistWrapper}
          contentClass={styles.Content}
          loadingFallback={<SmallSpinner />}
        />
      ) : (
        <div className={styles.NoData}>No code-data found</div>
      )}
    </div>
  );
}

export default CodeSnippetTab;
