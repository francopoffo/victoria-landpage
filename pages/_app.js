import "../styles/reset.css";
import "../styles/globals.css";
import { Inter } from "@next/font/google";
import Layout from "../src/components/Layout/Layout";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
});

function MyApp({ Component, pageProps }) {
  return (
    <Layout className={inter.className}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
