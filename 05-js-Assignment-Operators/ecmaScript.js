

//   Assignment operators

// 1. Assignment Operator kya hota hai?

//    Assignment operator ka basic kaam hota hai: Kisi variable ko value assign karna.




// 2. JavaScript ke Assignment Operators :

// | Operator | Meaning              |
// | -------- | -------------------- |
// |   =      | Assignment           |
// |   +=     | Add and assign       |
// |   -=     | Subtract and assign  |
// |   *=     | Multiply and assign  |
// |   /=     | Divide and assign    |
// |   %=     | Remainder and assign |
// |   **=    | Exponent and assign  |




//        Explanation:
//       -------------


// 3. = Basic Assignment:

  let Salary = 50000;


// Interview Question:
// Q: = operator kya karta hai?

// Answer: = assignment operator hai jo kisi variable ko value assign karta hai.



// 4. += Add and Assign:

//    Ye operator current value mein koi value add karta hai.

let price = 5000;

price += 1000;

 // matlab ya asal ma is tarha ha.

price = price + 1000;


// Interview perspective:
// Q: a += 5 aur a = a + 5 mein kya difference hai?

// Basic result dono ka same hi hota ha : 
a = 15;



// 5. -= Subtract and Assign:

//    Current value mein se value minus karta hai.

let balance = 10000;

balance -= 2500;

  // matlab ya asal ma is tarha ha.

balance = balance - 2500;



// 6. *= Multiply and Assign:

// Current value ko multiply karta hai.

let price_a = 100;

price_a *= 3;

price_a = price_a * 3;


//  Real-time example:
let quantity = 5;
let priCe = 1000;

priCe *= quantity;

priCe = 5000; // Answer



// 7. /= Divide and Assign:

//    Current value ko divide karta hai.

let amount = 10000;

amount /= 4;

amount = amount / 4;


//  Real-time example:
//   Suppose 10000 rupees 4 friends mein equally divide karne hain:
let money = 10000;

money /= 4;
// Har person ka share: 2500.



// 8. %= Remainder and Assign:

//    % division ke baad remainder deta hai.

let number = 10;

number %= 3;

number = number % 3;
// 10 % 3 ka result: 1

number = 1;



// 9. **= Exponent and Assign:

//    Ye power calculate karta hai.

let _number = 2;

_number **= 3;
// 2 × 2 × 2 = 8






// Interview ke liye important difference :

// Q : Assignment operator aur equality operator mein difference?

// Ans : Assignment operator "=" value assign karta hai, jabke "==" aur "===" comparison karte hain.



// Interview mini coding question :

let salary = 50000;

salary += 10000;
salary -= 5000;
salary *= 2;
salary /= 5;

// Q : End mein salary ki value kya hogi?


/*   "+=, -=, *=, and /= compound assignment operators hain. 
      Ye variable ki existing value ke saath operation perform 
      karke updated value usi variable mein assign karte hain."  
*/



let b = 10;

b += 5;
b *= 2;
b -= 4;

// console.log(b);

// Interview point
// Yahan operations left-to-right execute hue: 10 → 15 → 30 → 26




let c = 20;

c -= 5;
c /= 3;
c **= 2;

// console.log(c);



let d = 10;

d += 5 * 2;
// Yahan important cheez operator precedence hai.

// console.log(d);

// Interview point:
// x += 5 * 2 ko directly x + 5 * 2 ki tarah left-to-right nahi solve karte. 
// Pehle * execute hota hai, phir +=.




let e = 20;

e -= 4 + 2;
e *= 3;

// console.log(e);




let f = 50;

f /= 5 + 5;
f += 10;
f **= 2;

// console.log(f);




let price_g = 1000;

price_g += 200 * 2;
price_g -= 300;
price_g /= 2;

// console.log(price_g);