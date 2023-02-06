import Reviews from "../src/components/Reviews/Reviews";
import Servicos from "../src/components/Serviços/Servicos";
import { getServicos } from "../helpers/api-util";

export default function Home(props) {
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
