let text: String;
text ="hello world";
let text2 :String
text2 = "Hello Nunu"

text = 'H' + text.slice(1,6) + 'W' + text.slice(7)

let micro :string = "microsoft excel"
let ga:string = "GOOGLE AND APPLE"

let str:string = "hello";
let str1:string = "world"

console.log(text[12]);
console.log(text.charAt(12));
console.log(text.length);

console.log("------Lab1-----");
console.log(`${str} ${str1}`);
console.log(micro.toUpperCase())
console.log(ga.toLowerCase())
console.log("------Lab2-----");
console.log("Hello World".startsWith("Hello"))
console.log("Hello World".startsWith("World"))
console.log("Hello World".endsWith("Hello"))
console.log("Hello World".endsWith("World"))
console.log("Computer".slice(3,6))
console.log("Death Race".slice(0,5))
console.log("Republican".slice(2,8))
console.log("------Lab3-----");
console.log(1e6)
console.log(1e7)
console.log(4.3e10)
console.log(1.2e-5)
console.log(1.234e-7)
console.log(1*(10**10))
console.log(2*(10**5))
console.log(122*(10**8))
console.log(1*(10**-8))
console.log((12*(10**-5)).toFixed(5))
console.log("------Lab4 & 5 -----");
let num:number[] =  [100,111,55,21,99]
num.map (item => console.log (`${item} " to Octal" ${item.toString(8)}`))
num.map (item => console.log (`${item} " to Hexa" ${item.toString(16)}`))

let round:number[] = [12.423,31313.135,42.809]

round.map (item => console.log (item + " rounded = " +Math.round(item)))







