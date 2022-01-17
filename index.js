
const venom = require('venom-bot');

var intro1 = require('./decisões/introducao2');
var intro2 = require('./decisões/cancelamento_serviço');
var intro3 = require('./decisões/barbearia');
var intro4 = require('./decisões/cinema');

venom
    .create(
        'Sessão Programming',
        (base64Qr, asciiQR, attempts, urlCode) => {
            console.log(asciiQR); // Optional to log the QR in the terminal
            var matches = base64Qr.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
                response = {};

            if (matches.length !== 3) {
                return new Error('Invalid input string');
            }
            response.type = matches[1];
            response.data = new Buffer.from(matches[2], 'base64');

            var imageBuffer = response;
            require('fs').writeFile(
                'messages/QrCode.png',
                imageBuffer['data'],
                'binary',
                function(err) {
                    if (err != null) {
                        console.log(err);
                    }
                }
            );
        },
        
        undefined, { logQR: false }
    )
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {

    client.onMessage((message) => {

    intro1.decisao1(client,message);
    intro2.decisao2(client,message);
    intro3.decisao3(client,message);
    intro4.decisao4(client,message);

});
}
