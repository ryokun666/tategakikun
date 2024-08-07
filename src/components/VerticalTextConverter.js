import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import styles from "@/styles/convertButton.module.css";
import CopyToClipboardButton from "@/components/TextBoxWithCopyButton";

function VerticalTextConverter() {
  const [boxLn, setBoxLn] = useState([]);
  const [str, setStr] = useState([]);
  const [lineCount, setLineCount] = useState(0);
  const [maxLn, setMaxLn] = useState(0);
  const [covStr, setCovStr] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [addSpace, setAddSpace] = useState(false);

  function handleInputChange(event) {
    const input = event.target.value;
    const newStr = input
      .split("\n")
      .map((line) => line.replace(/っ/g, ` っ`).trim())
      .map((line) => line.replace(/ー/g, "｜").trim())
      .map((line) => line.replace(/、/g, "︑").trim())
      .map((line) => line.replace(/。/g, "︒").trim())
      .map((line) => line.replace(/，/g, "︐").trim())
      .map((line) => line.replace(/【/g, "︗").trim())
      .map((line) => line.replace(/】/g, "︘").trim())
      .map((line) => line.replace(/〜/g, "∮").trim());
    setStr(newStr);
    setLineCount(newStr.length);

    const newBoxLn = newStr.map((line) => line.length);
    setBoxLn(newBoxLn);

    const newMaxLn = Math.max(...newBoxLn);
    setMaxLn(newMaxLn);

    const newCovStr = [];
    for (let j = 0; j < newMaxLn; j++) {
      let line = "";
      for (let i = newStr.length - 1; i >= 0; i--) {
        const char = newStr[i][j] || "　";
        line += char + " ";
      }
      if (j < newMaxLn - 1 || line.trim() !== "") {
        newCovStr.push(line);
      }
    }
    setCovStr(newCovStr);
  }

  const handleCheckboxChange = (event) => {
    setAddSpace(event.target.checked);
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 3, width: "80%" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            onChange={handleInputChange}
            id="text-area"
            label="テキストを入力してね"
            multiline
            lg={{ display: "flex", maxWidth: 360 }}
            maxRows={10}
            rows={3}
          />
        </div>
        <FormControlLabel
          control={
            <Checkbox checked={addSpace} onChange={handleCheckboxChange} />
          }
          label="文字間隔をあける"
        />
      </Box>

      <div
        id="resultText"
        className={covStr.length ? styles.resultText : styles.dispNone}
      >
        {covStr.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
      <CopyToClipboardButton
        str={covStr}
        setIsPopupVisible={setIsPopupVisible}
        addSpace={addSpace}
      />
    </div>
  );
}

export default VerticalTextConverter;
