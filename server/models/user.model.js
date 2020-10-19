const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const CreditStoreSchema = new mongoose.Schema({
    store: {
        type: String,
        unique: false,
        required: [true, "Tienda debe tener un nombre"],
        minlength: [3, "Email debe tener mínimo 3 caracteres"]
    },
    amount: {
        type: Number,
        unique: false,
        min: [0, "No puede tener menos de $0 en créditos"]
    }
})

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "Usuario debe tener registrar un email"],
        minlength: [3, "Email debe tener mínimo 3 caracteres"]
    },
    credit: [CreditStoreSchema]
})

UserSchema.plugin(uniqueValidator);
const User = mongoose.model('User', UserSchema);
module.exports = User;