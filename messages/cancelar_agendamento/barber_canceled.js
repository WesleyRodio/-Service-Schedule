exports.barber_canceled = function(client, message) {
  
    client
        .sendText(message.from, `Todos os seus agendamentos foram cancelados.
        
Muito obrigado por ter cancelado com antecedência 
Espero ter ajudado!👋 `);

};