import { Button, Snackbar } from "@mui/material";
import { useState } from "react";
import styles from "@/styles/TextBoxWithCopyButton.module.css";

const CopyToClipboardButton = ({ str, setIsPopupVisible }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setIsPopupVisible(true);
    setOpen(true);
    if (typeof window === "object") {
      navigator.clipboard.writeText(
        document.getElementById("resultText").innerText
      );
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
