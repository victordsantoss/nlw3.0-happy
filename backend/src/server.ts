import express from 'express';
import 'express-async-errors';
import './database/connection';
import routes from './routes';
import path from 'path';
import errorHandler from './errors/handler';
import cors from 'cors';

const app = express();

app.use(cors()); // Permite o acesso para o frontend acessar a aplicação backend 
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads'))); // permite clicar na imagem e abrir pelo link
app.use(errorHandler);

app.listen(3333);