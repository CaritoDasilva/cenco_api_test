module.exports = {
    addUserCredit: (previousCredit, creditToUpdate, isDiscount) => {
        const storeFiltered = previousCredit.filter(prev => prev.store === creditToUpdate.store);
        const total = isDiscount ? storeFiltered[0].amount - creditToUpdate.amount : storeFiltered[0].amount + creditToUpdate.amount;
        return total;
    },
    getStoreCredit: (allCredits) => {
        let total = 0;
        let totalCredits = []
        allCredits.map(creditByUser => {
            creditByUser.credit.map(credit => {
                return totalCredits.push(credit.amount);
            })
        });
        totalCredits.map(storeTotal => total += storeTotal)
        return total;

    }
}