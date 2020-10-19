const User = require("../models/user.model");
const creditService = require("../services/credits.services");

//By Store

module.exports.getCreditsByStore = (req, res) => {
    User.aggregate([{
        $project:
        {
            credit:
            {
                $filter:
                {
                    input: "$credit",
                    as: "cred",
                    cond: { $eq: ["$$cred.store", "Los Dominicos"] }
                }
            }
        }
    }])
        .then(allUsers => {
            if (allUsers) {
                totalByStore = creditService.getStoreCredit(allUsers, allUsers);
                return res.json({
                    totalStore: {
                        store: req.params.store,
                        total: totalByStore
                    }
                });
            }
        })
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.getCreditsAllStores = (req, res) => {
    User.aggregate([
        { $unwind: "$credit" },
        { $group: { _id: "$credit.store", amount: { $sum: "$credit.amount" } } }
    ])
        .then(allUsers => res.json({ stores: allUsers })
        )
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}