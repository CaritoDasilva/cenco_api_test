const User = require("../models/user.model")
const creditService = require("../services/credits.services");
//By User
module.exports.findAllUsers = (req, res) => {
    User.find()
        .then(allUsers => res.json({ users: allUsers }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findUserById = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(oneSingleUser => res.json({ user: oneSingleUser }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));

};

module.exports.getCreditsUser = (req, res) => {
    User.findOne({ _id: req.body.id })
        .then(oneSingleUser => {
            if (oneSingleUser) {
                //Aquí voy a llamar la función con la lógica
                creditToUpdate = creditService.addUserCredit(oneSingleUser.credit, req.body.creditToUpdate, req.body.isDiscount);
                console.log("module.exports.getCreditsUser -> req", creditToUpdate)
                User.findOneAndUpdate({ "_id": req.body.id, "credit.store": req.body.creditToUpdate.store },
                    {
                        "$set": {
                            "credit.$.amount": creditToUpdate
                        }
                    })
                    .then(updateUser => res.json({ user: updateUser }))
            }
        })

        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.createNewUser = (req, res) => {
    User.create(req.body)
        .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
        .catch(err => res.status(400).json(err))
};

