import { Button, Snackbar } from "@mui/material";
import { useState } from "react";
import styles from "@/styles/TextBoxWithCopyButton.module.css";

const CopyToClipboardButton = ({ str, setIsPopupVisible, addSpace }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (typeof setIsPopupVisible === "function") {
      setIsPopupVisible(true);
    }
    setOpen(true);
    if (typeof window === "object") {
      let textToCopy = str.join("\n");
      if (addSpace) {
        textToCopy = str.join("\n\n");
      }
      navigator.clipboard.writeText(textToCopy);
    }
  };

  return (
    <>
      <Button
        className={str.length ? styles.dispBlock : styles.dispNone}
        onClick={handleClick}
      >
        コピーする！
      </Button>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        message="コピー成功！！！"
      />
    </>
  );
};

export default CopyToClipboardButton;
