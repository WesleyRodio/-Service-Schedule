exports.barber_agent = function(client,message){

  var barber = require("../../mensagens.json");
  const buttons = [
      {
        "buttonText": {
          "displayText": barber.Barbeiro1
          }
        },
      {
        "buttonText": {
          "displayText": barber.Barbeiro2
          }
        },
        {
          "buttonText": {
            "displayText": barber.Barbeiro3
            }
          }
      ]
      client.sendButtons(message.from, `Escolha um *barbeiro* para te atender`, buttons, 'Clique no botão que corresponde a sua escolha:')
};

