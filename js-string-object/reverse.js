const sent = "i am learning web dev";
let reverse = "";
for (const letter of sent){
    reverse = letter + reverse;
}
// console.log(reverse);
let rev = ""
for (let i =0; i<sent.length; i++){
    // console.log(i);
    // console.log(sent[i]);
    const letter = sent[i];
    rev = letter+ rev;
}
console.log(rev);