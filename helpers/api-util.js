export async function getServicos() {
  const dados = await fetch(
    "https://victoria-landpage-default-rtdb.firebaseio.com/servicos.json"
  );

  const dadosConvertidos = await dados.json();

  const SERVICOS = [];

  for (const key in dadosConvertidos) {
    SERVICOS.push({
      id: key,
      servico: dadosConvertidos[key].servico,
    });
  }

  return SERVICOS;
}
