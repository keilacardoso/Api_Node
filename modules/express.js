const express = require('express');
const UserModel = require('../src/models/user.model')
const app = express();

const port = 8080;

app.use(express.json());

app.get('/home', (req, res) => {
    res.status(200).send("<h1> Home Page </h1>");
});


app.post('/users', async (req, res) => {

    try {

        const user = await UserModel.create(req.body);
        res.status(201).send().json(user);

    } catch (error) {
        res.status(500).send(error.message)
    }

});

app.get('/users', (req, res) => {
    // const users = [{
    //         nome: 'Keila Cardoso',
    //         email: 'keila_dcardoso@hotmail.com',
    //     },
    //     {
    //         nome: 'Bruna Nascimento',
    //         email: 'brunaleotec@gmail.com',
    //     },
    // ];

    try {
        const users = UserModel.find();
        res.status(200).send().json(users);

    } catch (error) {
        res.status(500).send(error.message);
    }

});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});