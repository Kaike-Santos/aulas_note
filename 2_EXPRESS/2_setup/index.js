// importar express 
const express = require('express') 
const app = express()

//get e post - verbos hhtp , toda vez que o usuario acessa o link ele faz umas requisiçao e vai chegar nesse arquivo , quando o usuario recebe a informaçao e get . qd recebe e post
app.get('/' , (requisicao, resposta) => {
    resposta.send("Estou utilizando o express!")
})