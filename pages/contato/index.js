import React, { useEffect } from "react";
import Contato from "../../src/components/Contato/Contato";
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
          content="Página com informações sobre contato"
        ></meta>
        <title>Victoria Werner - Contato</title>
      </Head>
      <Contato />
    </>
  );
}

export default index;
