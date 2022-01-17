exports.barber_cancel = function(client,message){
    const buttons = [
        {
          "buttonText": {
            "displayText": "Sim"
            }
          },
        {
          "buttonText": {
            "displayText": "Sair"
            }
          }
        ];
        client.sendButtons(message.from, 'Você gostaria de cancelar todos os agendamentos da barbearia?', buttons, 'Clique no botão que corresponde a sua escolha:');
};