import React from "react";
import classNames from "classnames";
import Button from "@/components/Button";
import CopyIcon from "@/assets/icons/copy_icon.svg";

interface Props {
  textToCopy: string;
  className?: string;
  setIsCopied: React.Dispatch<React.SetStateAction<boolean>>;
}
function CopyButton({ setIsCopied, textToCopy, className }: Props) {
  const handleStringToCopy = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(textToCopy);
    setTimeout(() => setIsCopied(false), 1000);
  };

  return (
    <Button
      variant="ghost"
      className={classNames(className)}
      onClick={handleStringToCopy}
    >
      <CopyIcon />
    </Button>
  );
}
export default CopyButton;
