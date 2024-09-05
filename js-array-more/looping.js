/* Looping technique
1.for Loop
2. while loop
3. do..while
4.for or [for looping an array]
5. for in [for looping objects]
*/

const friends = ["ross", "monica", "chandler", "joey"];
for (const friend of friends){
    // console.log(friend);
}

for (let i=0; i<friends.length; i++){
    console.log(i);
    console.log(friends[i]);
}

let i = 0;
while(i<friends.length){
    
    console.log(friends[i]);
    i++;
}
