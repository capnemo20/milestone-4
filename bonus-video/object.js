const nayok = {
    name: "Sakib Khan",
    id: 121,
    adress: "uttara",
    isSingle: true,
    friends: ["apu", "raaz", "salman", "aamir"],
    movies:[{name: "no 1", year:2015}, {name: "no 2", year:2016}]  ,
    act: function(){
        console.log("acting link sakib khan");
    },
    car: {
        brand: "tesla",
        price: 5000000,
        made: 2025
    }
}
// console.log(nayok.movies[0].name);
// console.log(nayok.act());

//objects can be used like array
// const products = [15,22,43];
const products = {
    "0": 15,
    "1": 22,
    "2": 43
}
console.log(products[0]);