import express, { request } from "express";
import { seedUserStore, users } from "./database";

const port = 3333;

const app = express();

app.use(express.json());

seedUserStore()

app.post('/sessions', (request, response) => {
    const { email, password } = request.body;

    const user = users.get(email);
    console.log(user);
    if (!user || password != user.password) {
        return response.status(401).json({
            error: true,
            message: 'E-mail or password incorrect.'
        });
    }

    return response.json({
        token: 'teste',
        refreshToken: 'test',
    });

    // Pegar o Usuario e Senha
    // Buscar no banco de dados o usuario
    // Erro 401 quando não encontrar o usuario
    // Descriptografar a senha
    // Verificar a senha informada com a senha do banco
    // Erro 401 quando não encontrar a senha
    // Gerar Token e o Refresh Token
    // Retornar Token e Refresh Token
});

app.listen(port,() => {
    console.log(`Listening on port ${port}`);
});