var inicio = require("./mensagens.json");

exports.Resposta = function(palavra){
    
    inicio.intro1.forEach(function(elemento) {
        if(elemento == palavra){
            console.log("aqui");
            return 'true';
        }else{
            return 'false';
        }
    
    });   
};
