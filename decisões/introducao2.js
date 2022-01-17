var aba_inicial = require('../messages/introducao');
var aba_de_serviço = require('../messages/agendamento.js');
var TesT = require('../messages/cinema_messages/test');


exports.decisao1 = function(client, message) {

    if(message.body === "Oi" && message.isGroupMsg === false ) {
        aba_inicial.Resposta1(client, message);
    } else  
    
    if(message.body === "📆 Agendar um serviço" && message.isGroupMsg === false ) {
        aba_de_serviço.Resposta2(client, message);
    } else

    if(message.body === "teste" && message.isGroupMsg === false ) {
        TesT.test(client, message);
    }

};