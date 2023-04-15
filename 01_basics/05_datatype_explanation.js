// Primitive datatype: all r call by value
// 7 type : String, Number, Boolean, Null, undefined, Symbol, BigInt

let myName = "Priyaranjan Jena"       //>> String

const health = 100                    //>> Number

const ifTrue = Boolean(1)             //>> Boolean

const name = null                     //>> Object

let value;                            //>> undefined

const id = Symbol('123')
const anotherId = Symbol('123')       //>> Symbol

const BigInt = 212675725472n          //>> bigint

// console.log(typeof myName);
// console.log(typeof health);
// console.log(typeof ifTrue);
// console.log(typeof name);
// console.log(typeof value);
// console.log(id === anotherId);       //>> false
// console.log(typeof id);
// console.log(typeof BigInt);



// Reference/non-primitive datatype: the reference of the values can be allocated directly in the memory 
// types : Array, Object, Function

const friends = ['ME', 'HIMANSHU', 'RAKTIM', 'PRIYA'];  //>> Object

const obj = {                                           //>> Object
    a: 'die',
    b: 'heal',
    c: 're-heal'
}

function square(n) {                                   //>> Function / Object Function
    return n ** 3;
    
}


console.log(typeof friends);
console.log(typeof obj);
console.log(typeof square);
console.log(square(4));

