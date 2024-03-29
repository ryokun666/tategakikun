import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "@/styles/convertButton.module.css";
import TextBoxWithCopyButton from "@/components/TextBoxWithCopyButton";

function VerticalTextConverter(setIsPopupVisible) {
  const [boxLn, setBoxLn] = useState([]);
  const [str, setStr] = useState([]);
  const [lineCount, setLineCount] = useState(0);
  const [maxLn, setMaxLn] = useState(0);
  const [covStr, setCovStr] = useState([]);

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
      </Box>

      <div
        id="resultText"
        className={covStr.length ? styles.resultText : styles.dispNone}
      >
        {covStr.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
      <TextBoxWithCopyButton
        str={covStr}
        setIsPopupVisible={setIsPopupVisible}
      />
    </div>
  );
}

export default VerticalTextConverter;
