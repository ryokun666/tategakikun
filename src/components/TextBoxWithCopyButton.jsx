import { Button, Snackbar } from "@mui/material";
import { useState } from "react";
import styles from "@/styles/TextBoxWithCopyButton.module.css";

const CopyToClipboardButton = (str) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
    if (typeof window === "object") {
      navigator.clipboard.writeText(
        document.getElementById("resultText").innerText
      );
    }
  };

  return (
    <>
      {console.log(str)}
      <Button
        className={str.str.length ? styles.dispBlock : styles.dispNone}
        // className={styles.dispBlock }

        onClick={handleClick}
      >
        コピーする！
      </Button>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        message="コピー成功！！！"
      />
    </>
  );
};

export default CopyToClipboardButton;
