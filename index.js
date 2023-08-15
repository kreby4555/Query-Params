const express = require('express')
const app = express()
app.use(express.json())

/*
    - Query params => meusite.com/user?name=cleber&age=21  //FILTRO
    - Route params => /users/2  //BUSCAR, DELETAR OU ATUALIZAR ALGO ESPECÍFICO
    - Request Body => {"name":"Rodolfo", "age"}
*/

app.get('/users/', (request, response) => {
    const {name, age } = request.body
    return response.json({name, age})
})

app.listen(3001, 
    console.log("😍 Servidor Iniciado"))