exports.Resposta = function(palavra){
    array = ["primeiro", "segundo", "Teste", "Oi"];
    var chave = 0; 
    array.forEach(function(elemento) {
        console.log(elemento == palavra)
        if(elemento == palavra){
            chave = 1;
           // break;
        }
    });

    if(chave == 1){
        return true;
    }else{
        return false;
    }

}