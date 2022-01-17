exports.agend_cancel = function(client,message){
    const buttons = [
        {
          "buttonText": {
            "displayText": "Barbearia 💈"
            }
          },
        {
          "buttonText": {
            "displayText": "Cinema 🎥"
            }
          },
          {
            "buttonText": {
              "displayText": "Restaurante 🍴"
              }
            }
        ];
        client.sendButtons(message.from, '🤔 Qual serviço você gostaria de cancelar?', buttons, 'Clique no botão que corresponde a sua escolha:');
  };