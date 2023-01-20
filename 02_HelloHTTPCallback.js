//Carrega o módulo HTTP
const http = require('http');

//Função de callback para o servidor HTTP
var callback = function(request, response){

    //Define o cabeçalho (header) com o tipo de resposta
    response.writeHead(200, {"Content-type": "text/plain"});

    //Mensagem de retorno
    response.end("Hello World Node!\n");
};
//Servidor HTTP
var server = 'http'.createServer(callback);
//Porta que o servidor irá escutar
server.listen(5000);

// Mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:5000/");