const http = require('http');
const { Http2ServerRequest } = require('http2');

const listaDeEstados = require("./estados.json");

const app = http.createServer((req , res) =>{
    console.log(listaDeEstados);
    res.setHeader ("Access-Control-Allow-Origin" , '*');
    res.setHeader ("content-type", "aplication-json");
    const respostaEmJson = JSON.stringify(listaDeEstados);
    
    res.write (respostaEmJson);
    res.end ();
});

app.listen (8000, () => console.log ('servidor iniciado na porta 8000'));
