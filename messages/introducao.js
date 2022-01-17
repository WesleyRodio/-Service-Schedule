var saudacao = require("../date")

exports.Resposta1 = function(client,message){
  const buttons = [
      {
        "buttonText": {
          "displayText": "📆 Agendar um serviço"
          }
        },
      {
        "buttonText": {
          "displayText": "⛔ Cancelar agendamento"
          }
        },
        {
          "buttonText": {
            "displayText": "💬 Mais Opções"
            }
          }
      ];
      client.sendButtons(message.from, `👋 ${saudacao.Saudacao()} ${message.sender.notifyName}, seja bem-vindo!`, buttons, 'Clique no botão que corresponde a sua escolha:')
      .then((result) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        console.error('erro na botao as : ', erro); //return object error
      });
};

