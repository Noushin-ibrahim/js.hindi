const marvel_heros = ["captain","ironman", "spiiderman"]
const dc_heros = ["superman", "flas", "batman"]

marvel_heros.push(dc_heros)

//console.log(marvel_heros); another array will be add as in 2nd element not an value

//const allheros = marvel_heros.concat(dc_heros)
//console.log(allheros); both array will be marge and end array [] will be remove

const all_new_heros = [...marvel_heros, ...dc_heros]
//console.log(all_new_heros); you can add multiple valie in array to concat, this is right way to use concat

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity) //  when you have multiple arrays, like array inside another array [[[2[2[2]]]]], then you can break like glasss all arrays and also define how many times you want to broke array or infinity means broke all the arrays
//console.log(real_another_array); 



//console.log(Array.isArray("noshi")); ask value that have in array or not
//console.log(Array.from("noshin")); convet any valuee in array, when you add any value in from"noshin", the array will be created for this value

let score1 = 100
let score2 = 200
let score3 = 300

//console.log(Array.of(score1,score2,score3)); you can add different time of veribale in same array or merge them

