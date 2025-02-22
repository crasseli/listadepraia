const { set } = require('@netlify/blobs');

exports.handler = async (event) => {
  try {
    const { participantes } = JSON.parse(event.body);
    await set('participantes', JSON.stringify(participantes));
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Participantes salvos com sucesso' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Erro ao salvar participantes' }),
    };
  }
};