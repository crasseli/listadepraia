const { get } = require('@netlify/blobs');

exports.handler = async () => {
  try {
    const data = await get('participantes');
    const participantes = data ? JSON.parse(data) : [];
    return {
      statusCode: 200,
      body: JSON.stringify({ participantes }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Erro ao carregar participantes' }),
    };
  }
};