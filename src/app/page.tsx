import styles from "./page.module.css";
import { ZipCodeForm } from "../components";

type ZipCode = {
  city: string;
  cityKana: string;
  prefectureKana: string;
  prefecture: string;
  streetKana: string;
  zipCode: string;
  street: string;
};

export default async function Home() {
  return (
    <main className={styles.main}>
      <h1>さあ、郵便番号を検索しよう！</h1>
      <ZipCodeForm />
    </main>
  );
}
