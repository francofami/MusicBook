require('./db/mongo');
const { PORT } = require('./utils/config')

const express = require('express');
const cors = require('cors');
const { 
    handlerNotFound, 
    handlerError,
    logger,
} = require('./utils/middleware');

const musicoRouter = require('./routes/musicoRouter');
const usersRouter = require('./routes/userRouter');
const loginRouter = require('./routes/loginRouter');

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
    res.send("<h1>Servidor Personas</h1>");
});

app.use('/api/users', usersRouter);
app.use('/api/musico', musicoRouter);
app.use('/api/login', loginRouter);

app.use(handlerNotFound);
app.use(handlerError);

app.listen(3000, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});