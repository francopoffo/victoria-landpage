import "../styles/reset.css";
import "../styles/globals.css";
import { Montserrat } from "@next/font/google";
import Layout from "../src/components/Layout/Layout";
import Head from "next/head";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600"],
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Página profissional do escritório de advocacia criminal da advogada Victoria Werner."
        ></meta>
        <title>Victoria Werner - Advocacia Criminal</title>
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-11027113595"
      ></Script>
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'AW-11171089265');
        `}
      </Script>
      <Layout className={montserrat.className}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
