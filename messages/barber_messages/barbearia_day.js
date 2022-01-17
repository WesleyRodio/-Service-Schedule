exports.barber_day = function(client,message){
  const buttons = [
      {
        "buttonText": {
          "displayText": "Segunda-feira"
          }
        },
      {
        "buttonText": {
          "displayText": "Quarta-feira"
          }
        },
        {
          "buttonText": {
            "displayText": "Sexta-feira"
            }
          }
      ];
    client.sendButtons(message.from, `Escolha um *barbeiro* para te atender`, buttons, 'Clique no botão que corresponde a sua escolha:');
};
