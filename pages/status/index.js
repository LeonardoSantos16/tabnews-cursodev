import useSWR from "swr";

async function fetchApi(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

export default function StatusPage() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchApi, {
    refreshInterval: 2000,
  });
  return (
    <>
      <h1>Status</h1>
      <UpdatedAt data={data} isLoading={isLoading} />
      <PostgresInfo data={data} isLoading={isLoading} />
    </>
  );
}

function UpdatedAt({ data, isLoading }) {
  let updatedAtText = "Carregando...";

  if (!isLoading && data) {
    updatedAtText = new Date(data.updated_at).toLocaleString("pt-BR");
  }

  return <div>Últuma atualização: {updatedAtText}</div>;
}

function PostgresInfo({ data, isLoading }) {
  console.log(data);
  const {
    version,
    max_connections: maxConnections,
    opened_connections: openedConnections,
  } = data?.dependencies?.database || {};

  if (isLoading) {
    return "Carregando...";
  }

  return (
    <ul>
      <li>Versão do banco de dados: {version}</li>
      <li>Máximo de conexões: {maxConnections}</li>
      <li>Conexões abertas: {openedConnections}</li>
    </ul>
  );
}
