exports.barber_result = function(client, message) {
  
    client
        .sendText(message.from, `Você tem *agendado* para ir a barbearia.

📆Dia: *Segunda-feira / Quarta-feira / Sexta-feira*
🕦Horário: *09:00 / 10:00 / 11:00* da manhã
👤Com o barbeiro: *Thiago / Pedro / Maurício* 
        
Te esperamos lá! 👋 `);

};