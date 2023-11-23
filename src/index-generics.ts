import { genericFunction, genericFunctionArrow, printObject } from "./generics/generics";
import { Hero, Villain} from "./interfaces";


// printObject(123);
// printObject(new Date());
// printObject({ a:1, b:2, c:3 });
// printObject([1,2,3,4,5]);
// printObject('Hola Mundo');

// console.log(genericFunction(3.1416).toFixed(2));
// console.log(genericFunction('Hola Mundo').toUpperCase());
// console.log(genericFunction(new Date()).getDate());

// console.log(genericFunctionArrow(3.1416).toFixed(2));
// console.log(genericFunctionArrow('Hola Mundo').toUpperCase());
// console.log(genericFunctionArrow(new Date()).getDate());


const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Wiston',
    dangerLevel: 130
}

console.log(genericFunctionArrow<Hero>(deadpool).realName);