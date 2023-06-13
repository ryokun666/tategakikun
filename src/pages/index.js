import Head from "next/head";
import styles from "@/styles/Home.module.css";
import VerticalTextConverter from "@/components/VerticalTextConverter";
import TextBoxWithCopyButton from "@/components/TextBoxWithCopyButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>瞬間❗️縦書きくん</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>瞬間❗️縦書きくん</h1>
          <div className={styles.container}>
            <h3>〜使い方〜</h3>
            <ol>
              <li>文字を入力します</li>
              <li>コピーします</li>
            </ol>
          </div>

          <VerticalTextConverter />

        </div>
      </main>
    </>
  );
}