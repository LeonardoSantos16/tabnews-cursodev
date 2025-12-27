import database from "infra/database";

async function infoDatabase(request, response) {
  const versionResult = await database.query("SHOW server_version;");
  
  const version = versionResult.rows[0].server_version;
  console.log(`Versão api: ${version}`);
  return response.status(200).json({ api_version: version });
}

export default infoDatabase;
