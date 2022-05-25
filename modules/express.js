const {
    application
} = require('express');
const express = require('express');
const UserModel = require('../src/models/user.model')
const app = express();

const port = 8080;

app.use(express.json());

// criando middleware
app.use((req, res, next) => {
    console.log(`Request Type: ${req.method}`);
    console.log(`Content Type: ${req.headers["content-type"]}`);
    console.log(`Date: ${new Data()}`);
    next();
});

app.post('/users', async (req, res) => {

    try {

        const user = await UserModel.create(req.body);
        res.status(201).send().json(user);

    } catch (error) {
        res.status(500).send(error.message)
    }

});

app.patch('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const userPath = await UserModel.findByIdAndUpdate(id, req.body, {
            new: true
        });
        res.status(200).json(userPath)

    } catch (error) {

        res.status(500).send(error.message)

    }
});

app.delete('/users/:id', async (req, res) => {
    try {

        const id = req.params.id;
        const userDelete = await UserModel.findByIdAndRemove(id);
        res.status(200).json(userDelete);

    } catch (erorr) {
        res.status(500).send(error.message)
    }
});

app.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.status(200).json(users);

    } catch (error) {
        res.status(500).send(error.message);
    }

});

app.get('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const userId = await UserModel.findById(id)
        return res.status(200).json(userId);


    } catch (error) {
        return res.status(500).send(error.message)
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});