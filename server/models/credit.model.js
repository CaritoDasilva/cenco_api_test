const mongoose = require('mongoose');

const CreditStoreSchema = new mongoose.Schema({
    store: {
        type: String,
        required: [true, "Tienda debe tener un nombre"],
        minlength: [3, "Nombre de tienda debe tener mínimo 3 caracteres"]
    },
    amount: {
        type: Number,
        min: [0, "No puede tener menos de $0 en créditos"]
    }
})

const CreditStore = mongoose.model('CreditStore', CreditStoreSchema);
module.exports = CreditStore;