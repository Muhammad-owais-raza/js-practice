//  Comparison operators ::

// 🔹 Comparison Operators kya hotay hain?

//    Comparison operators 2 values ko compare karte hain aur result mein hamesha:
//    true / false dete hain.


//  | Operator | Meaning              |
// | -------- | --------------------- |
// | `>`      | Greater than          |
// | `<`      | Less than             |
// | `>=`     | Greater than or equal |
// | `<=`     | Less than or equal    |
// | `==`     | Loose equality        |
// | `===`    | Strict equality ⭐    |
// | `!=`     | Loose not equal       |
// | `!==`    | Strict not equal ⭐   |



// Example:

let Age = 17;

// console.log(age > 18); 



let temperature = 15;

// console.log(temperature < 20);




let age = 18;

if (age >= 18) {
    // console.log("You are eligible");
}





let marks = 50;

// console.log(marks <= 50);




// console.log(5 == "5");

// ⚠️ Interview mein important :

//     == aur === mein kya difference hai?

//     Answer: == value compare karta hai aur type conversion kar sakta hai.
//             === value + data type dono check karta hai.






// console.log(5 === 5);

// 🎯 Interview Tip :

// Modern JavaScript mein normally === ko prefer kiya jata hai, 
// kyunki ye unexpected type conversion se bachata hai.



// console.log(10 != 5);


// console.log(5 !== "5");




// 🎯 Interview ke liye sabse important

// console.log(5 == "5");   // true
// console.log(5 === "5");  // false

// console.log(5 != "5");   // false
// console.log(5 !== "5");  // true



// Q: 5 == "5" true kyun hai?

// Answer: === strict equality hai. Ye value ke saath data type bhi check karta hai. 
//         Number aur string different types hain, isliye false.




let age2 = 20;

// console.log(age > 18);
// console.log(age < 18);
// console.log(age >= 20);
// console.log(age <= 19);
// console.log(age === 20);
// console.log(age === "20");





let _marks = 75;

// console.log(marks >= 50);
// console.log(marks < 50);
// console.log(marks == "75");
// console.log(marks === "75");
// console.log(marks != 80);
// console.log(marks !== "75");
