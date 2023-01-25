import "../styles/reset.css";
import "../styles/globals.css";
import { Inter } from "@next/font/google";
import Layout from "../src/components/Layout/Layout";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Victoria Werner - Advocacia Criminal</title>
      </Head>
      <Layout className={inter.className}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
