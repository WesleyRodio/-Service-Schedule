exports.Resposta2 = function(client,message){
  const buttons = [
      {
        "buttonText": {
          "displayText": "💈 Barbearia"
          }
        },
      {
        "buttonText": {
          "displayText": "🎥 Cinema"
          }
        },
        {
          "buttonText": {
            "displayText": "🍴 Restaurante"
            }
          }
      ]
      client.sendButtons(message.from, `🤔 Qual serviço você gostaria de agendar?`, buttons, 'Clique no botão que corresponde a sua escolha:')
      .then((result) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        console.error('erro na botao as : ', erro); //return object error
      });
}

