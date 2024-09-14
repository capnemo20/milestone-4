const numbers = [12, 43, 24, 53, 85]

// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     console.log(number);
// }

for (const number of numbers){
    // console.log(number);
}

const products = [
    {id: 1, name: "xiaomi", price: 29000},
    {id: 2, name: "iphone", price: 29000},
    {id: 3, name: "mac book", price: 29000},
    {id: 4, name: "walton", price: 29000},
    {id: 5, name: "lenovo", price: 29000},
    {id: 6, name: "dell inspiron", price: 29000},
    {id: 7, name: "samsung", price: 29000},
    {id: 8, name: "nokia", price: 29000},
    {id: 8, name: "one phone", price: 29000}
];


function matchedProducts(products, search){
    for (const product of products){
        console.log(product);
    }
}

const result = matchedProducts(products, "phone");
console.log(result);