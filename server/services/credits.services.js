const { getAllStores } = require("../controllers/stores.controllers");

module.exports = {
    addUserCredit: (previousCredit, creditToUpdate, isDiscount) => {
        const storeFiltered = previousCredit.filter(prev => prev.store === creditToUpdate.store);
        const total = isDiscount ? storeFiltered[0].amount - creditToUpdate.amount : storeFiltered[0].amount + creditToUpdate.amount;
        return total;
    },
    getCreditByStore: (allCredits) => {
        let total = 0;
        let totalCredits = []
        allCredits.map(creditByUser => {
            creditByUser.credit.map(credit => {
                return totalCredits.push(credit.amount);
            })
        });
        totalCredits.map(storeTotal => total += storeTotal)
        return total;

    },
    getAllStoresCredits: (allStores) => {
        // let stores = [];
        // allStores.map(credit => credit.credit(store => {
        //     return stores.push({ store: store.store });
        // }));
        console.log("stores", allStores)
        // allStores.map(_credit => _credit.map(storeTotal => {
        //     stores.map(_store => {
        //         if (_store === storeTotal.store) {
        //             return { ..._store, total: _store.total ? _store.total + storeTotal.amount : storeTotal.amount }
        //         }
        //     })
        // }))
        // return stores;
    },
}