import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styles from "@/styles/convertButton.module.css";
import parse from "html-react-parser";
import TextBoxWithCopyButton from "@/components/TextBoxWithCopyButton";

const App = () => {
  let clickBtn = false;
  const [text, setText] = useState("");

  /* ↓state変数「addText」を定義 */
  const [addText, setAddText] = useState("");

  /* ↓関数onClickAddTextを定義 */
  const onClickAddText = () => {
    const verticalText = changeDirection(text);
    clickBtn = true;
    // setCursor();
    setAddText("");
    setAddText(changeDirection(text));
    setText("");
  };

  return (
    <div className="App">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 4, width: "15ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            value={text}
            onChange={(event) => setText(event.target.value)}
            id="text-area"
            label="テキストを入力してね"
            multiline
            maxRows={4}
          />
        </div>
      </Box>
      <Box sx={{ "& button": { m: 3 } }}>
        <div>
          <Button variant="contained" size="large" onClick={onClickAddText}>
            変換！
          </Button>
        </div>
      </Box>
      <div className={styles.resultArea}>
        {/* <div id="resultText">{addText}</div> */}
      </div>
      <TextBoxWithCopyButton />
    </div>
  );
};

export default App;

function changeDirection(text) {
  // テキストを一文字ずつ分割して配列にする
  const chars = text.split("");

  // 改行で配列を分割し、二次元配列にする
  const lines = chars
    .join("<br>")
    .split("<br>")
    .map((line) => line.split(""));

  // 各行の末尾に空白文字を追加する
  const maxLength = Math.max(...lines.map((line) => line.length));
  lines.forEach((line) => {
    while (line.length < maxLength) {
      line.push("　");
    }
  });

  // 各列を連結して縦書きのテキストを作成する
  const result = [];
  for (let i = 0; i < maxLength; i++) {
    result.push(
      lines
        .map((line) => line[i])
        .reverse()
        .join("")
    );
  }
  return result;
}

// 変換ボタン押下後にカーソルをテキストエリアに移動させる。
function setCursor() {
  var obj = document.getElementById("text-area");
  var val = document.getElementById("text-area").value;

  obj.focus();
  obj.setSelectionRange(val, val);
}
