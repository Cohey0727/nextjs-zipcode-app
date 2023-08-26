import { ZipCodeForm } from "../../components";
import styles from "./page.module.css";

type ZipCode = {
  city: string;
  cityKana: string;
  prefectureKana: string;
  prefecture: string;
  streetKana: string;
  zipCode: string;
  street: string;
};

type Props = {
  params: {
    zipcode: string;
  };
};

const baseUrl = "https://ecxerepute.execute-api.ap-northeast-1.amazonaws.com";

export default async function ZipCode(props: Props) {
  const { params } = props;
  const { zipcode } = params;
  const res = await fetch(`${baseUrl}/Prod/zipcode/${zipcode}`);
  const data = res.ok ? ((await res.json()) as ZipCode) : null;
  return (
    <main className={styles.main}>
      {}
      <div>
        <h1>郵便番号情報</h1>
        {data ? (
          <ul>
            <li>
              <strong>都道府県：</strong> {data.prefecture}
            </li>
            <li>
              <strong>都道府県（かな）：</strong> {data.prefectureKana}
            </li>
            <li>
              <strong>市区町村：</strong> {data.city}
            </li>
            <li>
              <strong>市区町村（かな）：</strong> {data.cityKana}
            </li>
            <li>
              <strong>通り：</strong> {data.street}
            </li>
            <li>
              <strong>通り（かな）：</strong> {data.streetKana}
            </li>
            <li>
              <strong>郵便番号：</strong> {data.zipCode}
            </li>
          </ul>
        ) : (
          <p>郵便番号が見つかりませんでした。</p>
        )}
      </div>
      <ZipCodeForm />
    </main>
  );
}
