import React, { useEffect } from "react";
import Sobre from "../../src/components/Sobre/Sobre";
import Head from "next/head";

function index() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer.push({
        event: "pageview",
      });
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Página com informações sobre a advogada criminal"
        ></meta>
        <title>Victoria Werner - Sobre</title>
      </Head>
      <Sobre />
    </>
  );
}

export default index;
