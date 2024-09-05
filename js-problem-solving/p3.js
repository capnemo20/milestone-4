function calculateElectronicsBudget(laptop, tablets, mobile){
    const total = laptop+tablets+mobile
    return total;
}
let totalBudget = calculateElectronicsBudget(15, 15, 15);
console.log(totalBudget);