//Variáveis da barbearia
var barba_h = require("../messages/barber_messages/barbearia_hours");
var barba_d = require("../messages/barber_messages/barbearia_day");
var barba_a = require("../messages/barber_messages/barbearia_barbeiro");
var barba_r = require("../messages/barber_messages/barbearia_resultado");

exports.decisao3 = function(client,message) {

    if(message.body === "💈 Barbearia" && message.isGroupMsg === false) {
        barba_h.barber_horario(client, message);
    } else 
    
    if(message.body === "🕘 09:00 horas" && message.isGroupMsg === false) {
        barba_d.barber_day(client, message);
    } else 
    
    if(message.body === "🕙 10:00 horas" && message.isGroupMsg === false) {
        barba_d.barber_day(client, message);
    } else 
    
    if(message.body === "🕚 11:00 horas" && message.isGroupMsg === false) {
        barba_d.barber_day(client, message);
    } else 
    
    if(message.body === "Segunda-feira" && message.isGroupMsg === false) {
        barba_a.barber_agent(client, message);
    } else 
    
    if(message.body === "Quarta-feira" && message.isGroupMsg === false) {
        barba_a.barber_agent(client, message);
    } else
    
    if(message.body === "Sexta-feira" && message.isGroupMsg === false) {
        barba_a.barber_agent(client, message);
    } else
    
    if(message.body === "👤- Thiago" && message.isGroupMsg === false) {
        barba_r.barber_result(client, message);
    } else 
    
    if(message.body === "👤- Pedro" && message.isGroupMsg === false) {
        barba_r.barber_result(client, message);
    } else 
    
    if(message.body === "👤- Maurício" && message.isGroupMsg === false) {
        barba_r.barber_result(client, message);
}
};