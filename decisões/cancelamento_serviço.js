var aba_inicial = require('../messages/introducao');

var saudacao = require('../date');

var aba_de_cancelamento = require('../messages/cancelar_agendamento/cancelar_agendamento');
var barba_c = require('../messages/cancelar_agendamento/barber_cancel');
var barba_cd = require('../messages/cancelar_agendamento/barber_canceled');
var cine_c = require('../messages/cancelar_agendamento/cine_cancel');
var cine_cd = require('../messages/cancelar_agendamento/cine_canceled');

exports.decisao2 = function(client,message) {

    if(message.body === "Chernous" && message.isGroupMsg === false) {
        client.sendText(message.from, `👋${saudacao.Saudacao()} ${message.sender.notifyName}, seja bem vindo!`);
    } else     
    
    //Cancelamento

    if(message.body === "⛔ Cancelar agendamento" && message.isGroupMsg === false) {
        aba_de_cancelamento.agend_cancel(client, message);
    } else 

    if(message.body === "Barbearia 💈" && message.isGroupMsg === false) {
        barba_c.barber_cancel(client, message);
    } else 

    if(message.body === "Sim" && message.isGroupMsg === false) {
        barba_cd.barber_canceled(client, message);
    } else
    
    if(message.body === "Sair" && message.isGroupMsg === false) {
        aba_inicial.Resposta1(client, message);
    } else
    
    if(message.body === "Cinema 🎥" && message.isGroupMsg === false) {
        cine_c.cine_cancel(client, message);
    } else 

    if(message.body === "Sim" && message.isGroupMsg === false) {
        cine_cd.cine_canceled(client, message);
    } else
    
    if(message.body === "Sair" && message.isGroupMsg === false) {
        aba_inicial.Resposta1(client, message);
    } 

};