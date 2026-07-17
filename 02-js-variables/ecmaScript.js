// variables : Data store karne ki jagah.

// Variables ki zarurat kyun hoti hai?

// Agar aapko kisi value ko baar baar use karna ho, to usay variable mein store karte hain.

// JavaScript mein Variables banane ke 3 tareeqe :

// var : (old way) , ( Prefer not to use var because of issue in block scope and functional scope )

// let : Same name not allowed and  reassignment allowed.

// const :  const me reassignment nhi hota.

const accountId = 144553;
let accountEmail = "hitesh@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// Variable Naming Rules

// ✅ Sahi:

let firstName = "Ali";
let age = 20;
let user123 = "Ahmed";
let _name = "Sara";
let $price = 100;

// ❌ Galat:

// let 1name = "Ali";      // Number se start nahi ho sakta
// let first-name = "Ali"; // Hyphen allowed nahi
// let let = "Ali";        // Keyword use nahi kar sakte

// Data jo Variable mein store ho sakta hai

let name = "Owais"; // String
let age = 20; // Number
let isStudent = true; // Boolean
let marks = null; // Null
let city; // Undefined

let Let = 6; // no keywords
