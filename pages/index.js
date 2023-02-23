import Reviews from "../src/components/Reviews/Reviews";
import Servicos from "../src/components/Serviços/Servicos";
import { getServicos } from "../helpers/api-util";
import { useEffect } from "react";

export default function Home(props) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer.push({
        event: "pageview",
      });
    }
  }, []);

  return (
    <>
      <Servicos servicos={props.servicos} />
      <Reviews />
    </>
  );
}

export async function getStaticProps() {
  const servicos = await getServicos();

  return {
    props: {
      servicos: servicos,
    },
  };
}
