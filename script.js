///1 answer

var categories = ["Health", "Fashion", "Toys","Electronic","TV","Sports", "Watches", "Motorbike", "Home and Lifestyle", "Devices"]
console.log(categories.length )

var categories_firsthalf = categories.slice(0,5);
console.log(categories_firsthalf);

// answer 2
const str1 = ["apple" , "banana", "orange" , "grapes"]
const str2 = ["abc", "def","ghi", "jkl"]

const string3=  str1.slice(1,4).concat(str2.slice(1,4))

console.log(string3);

//answer 3
 //Asscending And Decending

  let Asscending = (a,b) =>{
            return a-b  
        }

 const NumericArrayas =['80', '9', '700' , 40,1 , 5, 200];
 NumericArrayas.sort(Asscending)
 console.log(NumericArrayas);


 
 let Decending = (c,d) =>{
    return d-c  
}

const NumericArrayds =['80', '9', '700' , 40,1 , 5, 200];
NumericArrayds.sort(Decending)
console.log(NumericArrayds);


//answer 4
const months = ["Jan", "March", "April", "Dec"];
months.splice(1,0, "Feb")
const del = months.splice(4);
months.splice(4,0, "May", "June")
console.log(months);



///answer 5

let joinarr = ["Me",  "my family"] ;
let joinarrNew = joinarr.join( " and " );
console.log(joinarrNew);


//answer 6

//Js condition

let n =  Number (prompt('Enter a value'));
if ( n>2 && n<10 ){
    console.log( "Number is between 2 and 10");
}
else if ( n>10 && n<19 ){
    console.log( "Number is between 10 and 19");
}
else if ( n>19 && n<30 ){
    console.log( "Number is between 19 and 29");
}
else{
    console.log("Sorry try again");
}