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

let test2 = true && false && true;

console.log(test2);

let x = 5;
let y = 16;

console.log(x == 5 || y == 5);
console.log(5 < 10 && y > 1);
console.log(!(x === y));



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

let test1 = true || true;

console.log(test1);


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

console.log(!(age > 18));
console.log(!0);
console.log(!5);
console.log(!"false");


let isLoggedIn = false;

if(!isLoggedIn){
    // console.log("Please Login");
}

