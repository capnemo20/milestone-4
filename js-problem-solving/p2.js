// finding smallest name from an array
const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let smallest = names[0];
for (let i = 1; i < names.length; i++) {
    if(names[i].length<smallest.length){
        smallest  = names[i];
    }
}
console.log(smallest);