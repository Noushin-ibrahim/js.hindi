/// Dates /////////////////

let myDate = new Date()

//console.log(myDate.toString());
//console.log(myDate.toDateSring());
//console.log(myDate.toLocaleString());
//console.log(typeof myDate);

//console.log(myDate. toString());
//const myCreatedDate = new Date(2025, 0, 23)
//const myCreatedDate = new Date("2025-01-25")
//const myCreatedDate = new Date("01-27-2025")
//console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));
 
const newDate = new Date()
//console.log(newDate);
//console.log(newDate.getMonth());
//console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "Long",
    timeZone: ''
})

