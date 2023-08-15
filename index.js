const express = require('express')
const app = express()

/*
    - Query params => meusite.com/user?name=cleber&age=21  //FILTRO
    - Route params => /users/2  //BUSCAR, DELETAR OU ATUALIZAR ALGO ESPECÍFICO

*/

app.get('/users/:id', (request, response) => {
    const{ id } = request.params
    return response.json({id})
})

app.listen(3001, 
    console.log("😍 Servidor Iniciado"))