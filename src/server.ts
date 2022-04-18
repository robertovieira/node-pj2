// itens do node module
import express, { Request, Response } from 'express';
import path from 'path';
import mustache from 'mustache-express';
import dotenv from 'dotenv';

// itens da aplicacao
import mainRoutes from './routes/index';

// liberando o acesso as variaveis de ambiente (.envi)
dotenv.config();

// criando o objeto express
const server = express();

// setando a engine
server.set('view engine', 'mustache');
// setando o caminho dos arquivos html
server.set('views', path.join(__dirname, 'views'));
// usar o mustache
server.engine('mustache', mustache());

// definindo a pasta dos arquivos publicos
server.use(express.static(path.join(__dirname, '../public')));

// habilitando para pegar os dados via POST
server.use(express.urlencoded({ extended: true }));

// usando o arquivo de rotas
server.use(mainRoutes);

// caso nao encontre nenhuma pagina
server.use((req: Request, res: Response) => {
    res.status(404).send("Página não encontrada!");
})

// servidor rodando na porta x
server.listen(process.env.PORT);