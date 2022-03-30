import React, { useEffect, useState } from "react";
import ReactEmbedGist from "react-embed-gist";
import SmallSpinner from "@/components/SmallSpinner";
import styles from "./CodeSnippetTab.module.scss";

function CodeSnippetTab({ tableWidth }: { tableWidth?: number }) {
  const [gist, setGist] = useState<string>("");
  useEffect(() => {
    setGist("JM066/6557c30ebce0d61fbc46e34a9daed39a");
  }, []);

  return (
    <div
      style={{
        minWidth: tableWidth,
        backgroundColor: "pink",
      }}
    >
      <ReactEmbedGist
        gist={gist}
        titleClass="gist__title"
        wrapperClass={styles.GistWrapper}
        contentClass={styles.Content}
        loadingFallback={<SmallSpinner />}
      />
    </div>
  );
}

export default CodeSnippetTab;
