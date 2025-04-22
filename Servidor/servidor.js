require ("colors");
var http = require("http");
var express = require("express");

var app = express();
app.use(express.static('./public'))

var server = http.createServer(app);
server.listen(80);

console.log("Servidor rodando...".rainbow);

// Métodos e actions

app.get("/inicio", function(requisicao, resposta){
    resposta.redirect("lab_1_atividade/index.html")

})

app.post("/inicio", function(requisicao, resposta){
    resposta.redirect("lab_1_atividade/index.html")
})

app.post("/cadastrar", function(requisicao, resposta){
    let nome = requisicao.body.nome;
    let login = requisicao.body.login;
    let senha = requisicao.body.senha;
    let nasc = requisicao.body.nascimento;

    console.log(nome, login, senha, nasc);

    resposta.render("resposta",{nome, login, senha, nasc});
})

app.get("/for_ejs", function(requisicao, resposta){
    let valor = requisicao.query.valor;
    resposta.render("exemplo_for",{valor});
})
