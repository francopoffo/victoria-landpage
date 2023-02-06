import React from "react";
import Sobre from "../../src/components/Sobre/Sobre";
import Head from "next/head";

function index() {
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
