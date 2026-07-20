// 1) Primitive

// 7 types : Boolean , Bigint , String , Symbole , Number , Null , Undefined

// in ko yad karnay ka esy tarika " BBSSNNU "



// 2) Reference ( Non primitive )

// Array , Objects , Functions 



// Examples to  Primitive data types :


let num = 5847348934; // Number

let text = "hello";   // String

let isPresent = true; // Boolean (han ya na)

let b = undefined;    // Undefined

let courseResult = null; // Null (empty variable) standalone value

let s = Symbol("hello");  // Symbole  unique


let b = 485343849343843488457454n; // Bigint "is ko is tarikay sa bhi likh saktay ha"

let b = BigInt(485343849343843488457454); // Bigint "or is ko is tarikay sa bhi likh saktay ha"

console.log(typeof isPresent); /* typeof "ya founction kisi ki bhi data type 
                                malom karnay k liya use hota ha" */


// console.log(5 + 4); // 9
// console.log("5 + 4"); // 5 + 4
// console.log("5" + "4"); // 54

// console.log("Shehzad" + "Iqbal");


//  console.log(typeof undefined); // undefined
//  console.log(typeof null); // object




// Examples to  Reference (Non primitive) data types :

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function () {
    console.log("Hello world");
}

//  console.log(typeof anotherId);





// ---------------------------------------------------------------------


//                 Data types conversion


// JavaScript mein 2 tarah ki type conversion hoti hai:

// Implicit Type Conversion (Automatic)
// Explicit Type Conversion (Manual)



//                Explicit Type Conversion (Manual)

// 1) Number = Number()  ya number datatype ma convert kar ta ha. 

// 2) String = String()  ya string datatype ma convert kar ta ha.

// 3) Boolean = Boolean()  ya boolean datatype ma convert kar ta ha.

// 4) parseInt() = parseInt() → decimal hissa hata kar integer deta hai.

// 5) parseFloat() = parseFloat() → decimal value ko bhi preserve karta hai.


//               Implicit Type Conversion (Automatic)

// 6) + operator string ke saath ho to concatenation karta hai, lekin -, *, / 
//    operators strings ko number mein convert kar dete hain (agar mumkin ho).



//  Examples to all Data types conversion :


// Example 1

let a = "10";
let b = 5;

// console.log(a + b);

// Output

105

// 👉 + operator string dekh kar 5 ko bhi string bana deta hai.

// "10" + "5" = "105"


// Example 2

let a = "10";
let b = 5;

// console.log(a - b);

// Output

5

// Yahan JavaScript "10" ko number bana deta hai.

// 10 - 5 = 5



// Example 3

// console.log("6" * "2");

// Output

12


// Example 4

// console.log("20" / 2);

// Output

10


// String → Number
// Number()

let age = "25";

let result = Number(age);

// console.log(result);
// console.log(typeof result);

// Output

25
// number


// Unary Plus (+)
let num = +"100";

// console.log(num);
// console.log(typeof num);

// Output

100
//number


// String → Integer
// parseInt()
let price = "150.99";

// console.log(parseInt(price));

// Output

150


// parseFloat()
let price = "150.99";

// console.log(parseFloat(price)); 

// Output

150.99


// Number → String
// String()
let num = 200;

// let result = String(num);

// console.log(result);
// console.log(typeof result);

// Output

200
// string


// toString()
// let num = 500;

// console.log(num.toString());

// Output

"500"


// Boolean → Number
// console.log(Number(true));
// console.log(Number(false));

// Output

1
0


// Number → Boolean
// console.log(Boolean(1));
// console.log(Boolean(0));

// Output

// true
// false
// String → Boolean
// console.log(Boolean("Hello"));
// console.log(Boolean(""));

// Output

// true
// false


// Null Conversion
// console.log(Number(null));
// console.log(String(null));
// console.log(Boolean(null));

// Output

// 0
// "null"
// false


// Undefined Conversion
// console.log(Number(undefined));
// console.log(String(undefined));
// console.log(Boolean(undefined));

// Output

// NaN
// "undefined"
// false






