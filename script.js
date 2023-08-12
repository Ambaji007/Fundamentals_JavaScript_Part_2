//console.log("hello");
'use strict';
//example of use strict mode 
// it easily detceted smelling mistakes and all ;
// let hasDrivingLicence = false ;
// const passTest = true ;



// if(passTest) hasDrivingLicence= true ;
// if(hasDrivingLicence) console.log("I can drive :D)")


// it does not allow the reserved key words 
//const interface = "audio"; //this is an expample 
//const private = 555;
//const if = 56464;

// Functions 
// the function is piece of code that we use over and over again 

// syntax
//function function_name(){
        // this is the function body 
//}
//Function Declaration


// function logger(){
//     console.log("My name is Ambaji");
// }
// logger(); 


// this is logger() here is known as invoking or calling or running the function... we will number of times

// function fruitProcecss (apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;

// }
//fruitProcecss(5 ,22) // (5 , 22)  are called arguments ;
//const appleJuice = fruitProcecss(5 , 22);
//console.log(appleJuice);
//or

//console.log(fruitProcecss(5 ,22));

// Reusability
// const applesOrangrJuice = fruitProcecss(5, 2);
// console.log(applesOrangrJuice);
// const orangeAppleJuice = fruitProcecss(6,12);
// console.log(orangeAppleJuice);

// by the function we will write more maintainable code.,,

//Function Declaration VS Expression;
// function ageClc1 (birthYear){
//  return 2023 - birthYear; 
// }
// const age1 =  ageClc1(1998);
// console.log(age1);

// //or 
// const age_2 = function (birthYear){
//  return 2023 - birthYear; 

// }


//function with out name is known as anonymous function
//functions  is the value 


// console.log (age_2);

// console.log (age_2(2021));

// console.log (typeof  age_2(2021));

// //Arrow function 

// const age_3 =  birthYear => 2023 -birthYear;
// console.log(age_3 (1333));

//reterment age...  if reterment age == 65 

// const yearUntilRretair =  (birthYear , firstName)=> {
//  const age = 2023 - birthYear;
//  const retaiMent = 65 -age;
//  return `FirstName :- ${firstName} \n RetairMentAge:-  ${retaiMent}`
//  //return  retaiMent
// }
// console.log(yearUntilRretair(1998 , 'Ambaji'));
// console.log(yearUntilRretair(1999 , 'Sai'));


//function calling other function;
//calling one function to other function ;
// This is example

//Note Take a moment and  understand the code...👍👍👍👍👍👍👍 
// const cutPeice = function (fruite){
//     return fruite * 4;
// }

// function fruitProcecss (apples, oranges){
//     const applePiece = cutPeice(apples);
//     const orangePiece = cutPeice(oranges);
//     console.log(apples, oranges);
//     const juice = `Juice with ${applePiece} pieces of apples and ${orangePiece} oranges of pieces`;
//     return juice;

// }
// console.log(fruitProcecss(2, 4));

//Reviewing functions;

// const calAge = function(year){
//     return 2023-year;
// }
// const yearUntilRretair = function (birthYear , firstName) {
//     const age = calAge(birthYear);
//     const retaiMent = 65 -age;
//     if(retaiMent > 0){
//         return `FirstName :- ${firstName} \n RetairMentAge:-  ${retaiMent}`;
   

//     }else{
//         return -1;
        
//     }
//    //return function has  quick response ; 
//     //return  retaiMent
//    }
//    console.log(yearUntilRretair(1998 , 'Ambaji'));
//    console.log(yearUntilRretair(1999 , 'Sai'));


//Here Are the three differnt types of writing of function but all are works in same way....👍👍👍🤷‍♂️

// Funtion Declaration 
// expample 
// function ageCle (birthYear){
//     return 2230- birthYear

//}
   
//function Expression 
//Here we store value in a variable 
// const ageCle  = function(birthYear){
//     return 2230-birthYear
// }


//Arrow Functions 
//these are quike one line function 
// const ageCle= birthYear=>2230-birthYear;
// >= means AtLeast


// const scoreDolphins = function (){
    
// }

//Examples

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



// Your tasks:

// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.



//solution


// const calcAverage = function (firstScore ,secoundScore, theirdScore){
//     return (firstScore + secoundScore + theirdScore)/ 3;
// }

// let  scoreDolphins  = calcAverage(44 , 22 , 71)
// let  scoreKoalas  = calcAverage(65 , 54 , 49);
//here we re asign the value 
// scoreDolphins = calcAverage(85 , 54 , 41);
// scoreKoalas= calcAverage (23,34 , 27)

// const checkWinner = function(avgDolphins ,avgKoalas ){
//     if (avgDolphins >= (avgKoalas*2)  ) {
//         console.log( `Koalas win (${avgKoalas} vs. ${avgDolphins})`);
        
//     }else if(avgKoalas >= (avgDolphins*2)){
//         console.log( `Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     }
//     else
//     {
//         console.log( "No team wins...");
//     }
    
// } 
//  checkWinner(scoreDolphins,scoreKoalas);
// const values connot be mutated or connot be changes






//dolphins and kolas;

// Introduction About Arrays....😎😎😎😎😎
// Here i want to store my frds names ;
// Arrays are data streture;

// Two most imp data

// const frd1 = "Shusma";
// const frd2 = "Pooja";
// const frd3 = "Shiva";
// const frd4 = "Manasa";


//these are frds list write it as which is above in comment 
 const frineds = ['Shusma','Pooja', 'Shiva','Manasa'] //this is one type

 console.log(frineds);  
const years = new Array(1199 , 1122, 555, 221,555); //this one another type;;; 

console.log(years); 
console.log(typeof frineds); 
console.log(frineds[0]); 
console.log(frineds[1]); 
console.log(frineds[2]); 

console.log(frineds.length);  // this is for print no of elements in array;
// this is object 

// for printing last element in Array by this formula
// const printingLastElement =  variable.length -1;
// console.log(printingLastElement)

//example
const printingLastElement = frineds.length-1;
console.log( frineds.length-1);
console.log(frineds[frineds.length-1]);

//new is a key word which is used to creat a new object



//Adding new value in a array manually;

frineds[2] = "Ambaji";
console.log(frineds);

//this is illigle asignment opration
//frineds =['bob', "alice"]


//in Array can we change values either variable can declare by const because Arrays are immutate (we can change and asign new values ) 



// here we store all bundle of values in one container is known as  Array;


//An array can store all type of data types ;;
const name_= "Amaji";
const role = 'Developer';
const ambaji = [ name_, 2096-2023 , role, frineds]

console.log(ambaji);
console.log(ambaji.length);

//Excercise 

const presetAge = function(birthDate){
    return 2035 - birthDate
}
const dateTime = [1990 ,1967 ,2002, 2018,  2021];

console.log(presetAge(dateTime));
// here  we conclude that in arrays we connot do any operationas here but we do like this..🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️

const age_1 = presetAge(dateTime[0]);
const age_2 = presetAge(dateTime[1]);
const age_3 = presetAge(dateTime[2]);
const age_4 = presetAge(dateTime[3]);
const age_5 = presetAge(dateTime[dateTime.length - 1]);

console.log(age_1 ,age_2,age_3,age_4,age_5 );

//Two types of printing Array;
console.log(Array(age_1 ,age_2,age_3,age_4 ,age_5 ));
console.log (typeof  Array(age_1 ,age_2,age_3,age_4 ,age_5));

//Or
const ages = [presetAge(dateTime[0]), presetAge(dateTime[1]), presetAge(dateTime[2]),presetAge(dateTime[3]), presetAge(dateTime[dateTime.length - 1]) ]
console.log(ages);


//BASIC OPRATIONS (METHODS OF ARRAYS);

//ADD ELEMENTS METHODS 

//PUSH method;
//THIS METHOD IS USED TO ADD A VALUE IN TO AN ARRAY;
//THIS WILL ADD VALUE AFTER THE LAST VALUE;


const friends_1 = ["Amabji", "Shusma", "Ajay", "Abhi"];

friends_1.push('shiva');
console.log(friends_1);
//Here we can know length of a string by using below syntax

// const newLength = friends_1.push('shiva');

// console.log(newLength);

//UNSHIFT method ;
//This method is used to add an value at beginning of an Array;

const array_Len = friends_1.unshift('Chinni');
console.log(array_Len);
console.log(friends_1);


//REMOVE ELEMENTS METHODS 
//POP METHOD;\/\/\/
//This method is purely opposite to PUSH method 
//this will remove last value from an ARRAY;

friends_1.pop();

const poped = friends_1.pop();
console.log(poped);
console.log(friends_1);

//SHIFT method ;
//this method is used for remove the first value from the array;
const removed = friends_1.shift() // to see romoved value ;
console.log(friends_1);

console.log(removed); 

//INDEXOF method ;
const index_ = friends_1.indexOf("Shusma");
const index_1 = friends_1.indexOf("sai"); // this is not in Array list;
console.log(index_);
console.log(index_1);

//INCLUDES methods ;
//this ES6 moderan method ;
//This will give only Boolean values .. If value present in Aaary then it will give TRUE other wise it says FALSE;

friends_1.push(22);
const check_ar = friends_1.includes('Shusma') ;
console.log(check_ar); // this will give True
const check_ar_1 = friends_1.includes('sai') ;// this is not in Array list;
console.log(check_ar_1); //this will give False
const check_ar_3 = friends_1.includes("22");
console.log(check_ar_3); //this will give False because this is in strict mode it does allow type coresion... By giving same data type that will be give true ...😎🤷‍♀️😎😎😎😎



// writing an if statement ;
if(friends_1.includes("Shusma")){
    console.log("Yes you had a friend and name was shusma");

}else{
    console.log("Sorry nobody will find with name..🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️")
}


//Question 2 

// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.


//SOLUTION 



let calcTip = (bill)=> {
    if (bill >= 50 && bill<=300)  {
        return 0.15 * bill;
    }else{
      return  0.2 * bill;
    }
};
let bill_1 = calcTip(125);
let bill_2 = calcTip(555);
let bill_3 = calcTip(44);

let tips  = [bill_1 ,bill_2 , bill_3]


// console.log(bills);



// let actualBill_1 = 125;
// let actualBill_2 = 555;
// let actualBill_3 = 44;

let bills =  [125, 555, 44] ;

let totals = [tips[0] + bills[0] ,  tips[1]+ bills[1] , tips[2] + bills[2]];

console.log(totals);


//INRODUCTION OF OBJECT;

const ambajiArray = [
    'Ambaji',
    'Developer',
    2023-1662,
    'Hyderabad',
    ["Abhi", 'Susma','Pooja']

]
//console.log(typeof  ambajiArray);
//Object declare ;
const ambaji_ = {
    firstName : 'Ambaji', // Asigning values in by using(key : value) pair;
    role : 'Developer',
    age : 2023-1662,
    loc :'Hyderabad',
    frinds : ["Abhi", 'Shusma','Pooja']

}

//DOT and BRACKET notation;
//These are use full to RETRIVE DATA and CHANGE DATA in Object;
console.log(ambaji_)  ;
console.log(ambaji_.frinds)  ;//DOT Notation;
console.log(ambaji_[1]); //BRACKET Notation (Fail); 
console.log(ambaji_['role']); //BRACKET Notation (Pass);


// This ia Really Cool Method;;;;;;😎😎😎😎😎😎
const nameKey = "Name";
console.log(ambaji_["first" + nameKey ]);
//console.log(ambaji_."first" + nameKey ); // this is not work not at all
// From Above method DOT Notation does not work properly here....;

//PROMPT 
// prompt("what you want to about Ambaji ?? Chose b/w firstName , role,age,loc , frinds");


//INPUT FROM USER 

// const intrestedIn =  prompt("what you want to about Ambaji ?? Chose b/w firstName , role,age,loc , frinds");
// console.log(intrestedIn);



//console.log(ambaji_.intrestedIn); //But this is undefied value why because not have a property  intrestedIn and it is not works in DOT Notation...

//LET'S See in BRACKET Notation;
console.log(ambaji_[intrestedIn]); // this will give perfect answer... Bracket notaion that value will be evaluated...

if(ambaji_[intrestedIn]){
    console.log(ambaji_[intrestedIn]);
}else{
    console.log("Enter given above values... Good Luck Next Time👍👍👍👍👍");
}

//Assign value with DOT and Bracket ;
ambaji_.place= "India";
ambaji_['LinkedIn'] = '@ambajik';
console.log(ambaji_);


//Challenge
//Ambaji has 3 frinds and his bestfrind is shusma
console.log(`${ambaji_.firstName} has ${ambaji_.frinds.length} friends,  ${ambaji_.frinds} and his best friend is ${ambaji_.frinds[1]}`);
// console.log()


//OBJECT Methods👍👍👍👍👍👍👍👍

//Here we are writing function inside of an obect;;;;

const ambaji_2 = {
    firstName : 'Ambaji', // Asigning values in by using(key : value) pair;
    role : 'Developer',
    birthYear : 1662,
    loc :'Hyderabad',
    frinds : ["Abhi", 'Shusma','Pooja'],
    hasDriverLicence :true,

    // actAge : function(birthYear){
    //     return 2023-birthYear;

    // } // any function that is attached to an obect is called Method...
    // function that will return the value...

//this is one proccess;;

    //  actAge : function(){
    //     console.log(this)
    //     return 2023-this.birthYear;

    // }

// this is an another process';;;

     actAge : function(){
        //console.log(this);
        this.actAge_1 = 2023-this.birthYear;
        return this.actAge_1

    }

}
console.log(ambaji_2.actAge())
//console.log(ambaji_2.actAge())
// console.log(ambaji_2.firstName);
// console.log(ambaji_2.actAge(1995));// Dot Notation
// console.log(ambaji_2["actAge"](1995));// Bracket Notation



// this is the normal function sytax
// const actAge = function(birthYear){
//     return 2023-birthYear;

// }


//Here we calling the actAge in couple of times...


//Challenge2 print in console.... ;;
//Ambaji is a 50-years old and he is an developer and Ambaji has a driving licence;;;


const ambaji_3 = {
    firstName : 'Ambaji', // Asigning values in by using(key : value) pair;
    role : 'Developer',
    birthYear : 1662,
    loc :'Hyderabad',
    frinds : ["Abhi", 'Shusma','Pooja'],
    hasDriverLicence :true,

    hisAge : function(){
      
        this.ageOf = 2023- this.birthYear;
        return  this.ageOf;
    },

    getSumery: ()=>{
       
        return `${this.firstName} is a ${this.hisAge} - years old and he is an ${this.role} and ${this.firstName} has ${this.hasDriverLicence ? "a": "no"} driving licence👍👍👍👍 `

    }
    
}

ambaji_3.getSumery()
console.log(ambaji_3.hisAge());

console.log(ambaji_3.getSumery());






// console.log(ambaji_3);




// Itration : THE FOR LOOP ;;

//For loop keeps running while condition is TRUE;;

//for(variable declere; condition ; increase counterby one for each itration);;

//Example;;

for(let x = 1; x<=10; x++){
    console.log(`lifiting of weight repitaion ${x} ^_^^_^(┬┬﹏┬┬)^_^`) //using string literals we do printing series of numbers,,,,
}



const ambaji_4 = [
     'Ambaji', // Asigning values in by using(key : value) pair;
    'Developer',
     1662,
   'Hyderabad',
     ["Abhi", 'Shusma','Pooja'],
    true,
    'india',
]



//console.log(ambaji_4);
//A tradition counter name for a for looop is a (i);

//Here we Assign types of array values in one varaible in a dynamic way....

const types = []

for(let i = 0; i< ambaji_4.length ; i++){

    // Reading of an Aarray
    console.log(ambaji_4[i], typeof ambaji_4[i]);
    //Filling of an Array
    // types [i] = typeof ambaji_4[i];
    //or
    types.push(typeof  ambaji_4[i]);
}
console.log(types)

//Calculate ages and asign values to new array;;
console.log("*****MOST IMPORTANT******")
const years_1 = [1997 , 1992, 2021, 2018,2000];
const ages_of = [];

for (let i = 0; i <years_1.length ; i++){
    //console.log( 2051- years_1[i] )
    ages_of.push(2051 - years_1[i]);

}
console.log(ages_of);


//Here we have TWO Statements those are the Continue and Break;;

//Continue :- It is access to the current itaration of loop....   and continue to other loops..

//Break :- This will be completly terminates the whole loop...

//Example...
const years_2 = [1997 ,"Shusma",  "Ambaji" ,"Pooja", 1992, 2021, 2018,2000];
const ages_at = [];
console.log("****ONLY STRING*****")

for (let i = 0; i <years_2.length ; i++){
    if(typeof years_2[i] !== 'string') continue
    // //console.log( 2051- years_2[i] )
    // ages_at.push(2051 - years_2[i]);
    console.log(years_2[i] , typeof years_2[i]);

}
// console.log(ages_at);


console.log("****BREAK WITH NUMBERS*****")

for (let i = 0; i <years_2.length ; i++){
    if(typeof years_2[i] === 'number') break
    // //console.log( 2051- years_2[i] )
    // ages_at.push(2051 - years_2[i]);
    console.log(years_2[i] , typeof years_2[i]);

}


//BACKWORD LOOPING and NESTED LOOP;;;

const johns = [
  "Ambaji",
     "Dharmakari",
    2023 - 2011,
    
      [  "Abhi", "Chinni",'Sweety','Cuity']


]
console.log(johns);
//Normally we do we print from 0,1,2....4;

//Now we do print from 4,3...0;
// Example

for(let i =johns.length-1; i>=0; i-- ){
    console.log(i ,johns[i]);
}


//Lets get into LOOP INSDE A LOOP;
for (let excerce =1 ; excerce <4 ; excerce ++){
    console.log( `............Starting Excercise ${excerce}`);

    for(let rep = 1; rep <6; rep++){
        console.log( ` Excercise ${excerce} ****** Weight lifting ${rep}times*****` )
    }
}

//While loop
//In this we specified only  a  condition ...

let rep = 1;
while (rep <= 10){
     console.log( `WHILE LOOP............Starting Excercise ${rep}`);
     rep++;
}

//Roll of dice number b/w  to 6 until it comes to 6 number....;


//Math.random... It genarates the random nimbers b/w 1-0;;

let dice = Math.trunc(Math.random() * 6) + 1;
//While loop really do not depend on counter variable.....

while (dice !== 6){
console.log(`You rolled a dice for ${dice} times`);
dice = Math.trunc(Math.random() * 6) + 1;
if(dice === 6){
    console.log("Loop is about to end.....");

}

}



