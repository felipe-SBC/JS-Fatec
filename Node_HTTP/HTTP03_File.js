//Carregao o modulo HTTP e URL
var fs = require('fs')
var http = require('http');
var url = require('url');

//Função callback para o servidor http
function readFile(response, file){
    //Faz a leitura do arquivo de forma assincrona
    fs.readFile(file, function(err, data) {
        //Quando ler, escreva no response o conteúdo do arquivo JSON
        response.end(data);
    });
};
var callback = function(request, response){

    //Defome p cabecalho (header) com o tipo de resposta
    response.writeHead(200, {"Content-type": "application/json; charset=utf-8"});
    //Faz o parse da URL separando o caminho (rota)
    var parts = url.parse(request.url);
    var path = parts.path;

    //Verifica a rota
    if(parts.path == "/rota1/cadastro"){
        //Retorna o JSON do cadastro do JSON
        readFile(response, "01_Cadastro.json");
    }else if(parts.path == "/rota1/catalogo"){
        //Retorna o JSON do cadastro do JSON
        readFile(response, "00_Catalogo.json");
    }else if(parts.path == "/rota1/dados"){
        //Retorna o JSON do cadastro do JSON
        readFile(response, "02_Dados.json");
    }else{
        response.end("Rota Não Mapeada: "+parts.path);
    }
};

//Cria um Servidor HTTP que responde para todas as requisições
var server = http.createServer(callback);

//Porta que o servidor vai escutar
server.listen(5000)

//Mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:5000/");