const mongoose = require('mongoose');

const connectToDataBase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonode.hfklh.mongodb.net/database?retryWrites=true&w=majority`, (error) =>{
        if(error){
            return console.log('Erro ao conectar com Banco de Dados', error)
        }

        return console.log('Conexão realizada')
    })
};

module.exports = connectToDataBase;