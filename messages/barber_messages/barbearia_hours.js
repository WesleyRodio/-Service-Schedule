exports.barber_horario = function(client,message){
  const buttons = [
      {
        "buttonText": {
          "displayText": "🕘 09:00 horas"
          }
        },
      {
        "buttonText": {
          "displayText": "🕙 10:00 horas"
          }
        },
        {
          "buttonText": {
            "displayText": "🕚 11:00 horas"
            }
          }
      ];
      client.sendButtons(message.from, 'Escolha um *horário* para o agendamento', buttons, 'Clique no botão que corresponde a sua escolha:');
};
