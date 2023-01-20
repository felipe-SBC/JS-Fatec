//Carregao o modulo HTTP e URL
var http = require('http');
var url = require('url');

//Função callback para o servidor http
var callback = function(request, response){

    //Defome p cabecalho (header) com o tipo de resposta
    response.writeHead(200, {"Content-type": "text-plain; charset=utf-8"});

    //Faz o parse da URL separando o caminho (rota)
    var parts = url.parse(request.url);

    //Verifica a rota
    if(parts.path == '/'){
        response.end("Site Principal")
    }else if(parts.path == '/rota1'){
        response.end("Site da rota 1")
    }else{
        response.end("Rota Invalida: " + parts.path);
    }
};

//Cria um Servidor HTTP que responde para todas as requisições
var server = http.createServer(callback);

//Porta que o servidor vai escutar
server.listen(5000)

//Mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:5000/");