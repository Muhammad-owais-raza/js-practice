// https://www.w3schools.com/js/js_logical.asp


// Topic : Logical Operators in JavaScript .

// Logical operators ka use hum multiple conditions ko combine karne ke liye karte hain.




// JavaScript mein 3 main logical operators hain:

// 1. && ==> AND Operator
// 2. || ==> OR Operator
// 3. ! ==> NOT Operator



// 1. && — AND Operator :

// Rule: && mein dono conditions true honi chahiye.

// Example :

let testB = true && false && true;

console.log(testB);

let X = 5;
let Y = 16;

// console.log(x == 5 || y == 5);
// console.log(5 < 10 && y > 1);
// console.log(!(x === y));



let email = "owais@gmail.com";
let password = "12345";

if(email === "owais@gmail.com" && password === "12345"){
    // console.log("Login Successful");
}

// Interview point:

// Q: && operator kab true return karta hai?

// Ans: && tab true hota hai jab uski dono conditions true hon.



// 2. || — OR Operator :

// Rule: || mein sirf ek condition bhi true ho to result true hota hai.

// Example :

let testA = true || true;

// console.log(testA);


let role = "Manager";

if(role === "Admin" || role === "Manager"){
    // console.log("Access Granted");
}

// Interview point:

// Q: || operator kab true hota hai?

// Ans:|| tab true hota hai jab kam az kam ek condition true ho.



// 3. ! — NOT Operator

// Rule: ! kisi boolean value ko opposite kar deta hai.

// !true   ==> false
// !false  ==> true

// Example :

let age = 55;

// console.log(!(age > 18));
// console.log(!0);
// console.log(!5);
// console.log(!"false");


let isLoggedIn = false;

if(!isLoggedIn){
    // console.log("Please Login");
}



let age1 = 55;

// console.log(!(age > 18));
// console.log(!0);
// console.log(!5);
// console.log(!"false");


let x = 5;
let y = 16;

// console.log(x == 5 || y == 5);
// console.log(5 < 10 && y > 1);
// console.log(!(x === y));



// aakhir truthy value return kare ga
// console.log(true && "shehzad");
// console.log(true && "");
// console.log("shehzad" && true && "smit");
// console.log(null && "shehzad" && 56);
// console.log(null && "" && 0);
// console.log(54 && 55 && 56);
// console.log(true && "shehzad" && 56);
// console.log(true && 0 && 56);
// console.log(true && 1 && false);
// console.log("hh" && null);
// console.log("hh" && "kk");

// Phale truthy value return kare ga
// console.log("shehzad" || true);
// console.log("" || null);
// console.log("" || true);
// console.log("shehzad" || 0 || null || true);
// console.log(null || " " || 56);
// console.log(true || "shehzad" || 56);
// console.log(false || 0 || 56);
// console.log("hh" || null);
// console.log("hh" || "kk");


// Trick
false || false || false;
true || true || true;
false && false && false;
true && true && true;