//mongoose - cria uma classe para comunicar o node x mongodb

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var personSchema = new Schema({
    nome: String
})

module.exports = mongoose.model('Person', personSchema)