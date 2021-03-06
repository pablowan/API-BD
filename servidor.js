/* 
Descricao :
Basicamente o arquivo que vai manipular e importar o banco de dados da nossa API, vamos buscar/trablhar com todas as informações contidas no nosso arquivo database.json.
Utilizando esse arquivo JS podemos realizar operações com esses dados, GET, POST, PUT E DELETE... Essa será nossa página principal, terá todos os imports e comandos necessários para essa integração.
Aluno : Pablo Junio Souza Santos
Data : 28/ 07 / 2021
 
*/
const express = require('express');
const mongoose = require('mongoose');

require("./models/User");
const User = mongoose.model('user');

const app = express();

app.use(express.json());


mongoose.connect("mongodb+srv://test:test@apibd.xj5lg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
    
}).then(() => {
    console.log("Conexão com MongoDB realizada com sucesso!");
}).catch((erro) => {
    console.log("Erro: Conexão com MongoDB não foi realizada com sucesso!");
});

app.get("/", (req, res) => {
    User.find({}).then((user) => {
        return res.json(user);
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum user encontrado!"
        })
    })
});

app.get("/user/:id", (req, res) => {
    User.findOne({ _id: req.params.id }).then((user) => {
        return res.json(user);
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum user encontrado!"
        })
    })
})

app.post("/user", (req, res) => {
    const user = User.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: User não foi cadastrado com sucesso!"
        });

        return res.status(200).json({
            error: false,
            message: "User cadastrado com sucesso!"
        })
    });
});

app.put("/user/:id", (req, res) => {
    const user = User.updateOne({ _id: req.params.id}, req.body, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Error: User não foi editado com sucesso!"
        });

        return res.json({
            error: false,
            message: "User editado com sucesso!"
        });
    });
});

app.delete("/user/:id", (req, res) => {
    const user = User.deleteOne({_id: req.params.id}, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Error: User não foi apagado com sucesso!"
        });

        return res.json({
            error: false,
            message: "User apagado com sucesso!"
        });
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor iniciado na porta 3000: http://localhost:3000/");
});