let mydate = new Date()

// console.log(mydate);
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());

let customDate = new Date(2023, 5, 22)

console.log(customDate.toDateString());       //>>Thu Jun 22 2023
console.log(customDate.toLocaleDateString()); //>>6/22/2023
console.log(customDate.toLocaleString());     //>>6/22/2023, 12:00:00 AM
console.log(customDate.toLocaleTimeString()); //>>12:00:00 AM
console.log(customDate.toString());           //>>Thu Jun 22 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(customDate.toTimeString());       //>> 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(customDate.toUTCString());        //>> Thu, 22 Jun 2023 00:00:00 GMT