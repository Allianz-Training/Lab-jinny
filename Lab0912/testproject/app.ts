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
num.map (item => console.log (`${item}  to Octal ${item.toString(8)}`))
num.map (item => console.log (`${item}  to Hexa ${item.toString(16)}`))

let round:number[] = [12.423,31313.135,42.809]
round.map (item => console.log (item + " rounded = " +Math.round(item)))

console.log("------Lab6 -----");
function random(min:number,max:number) {
    return Math.random()*( max-min ) +min
}
console.log(random(3,70))

console.log("------Lab7 -----");
let A:boolean = false
let B:boolean = true
let C:boolean = false

console.log(A ||(B&&C))
console.log(B || (A || C))
console.log((B && (A || C)))

console.log("------Lab8-----");

let a = [false, "ABC",113113,null,""]
a.map(item => console.log(`${item} = `,typeof item))


console.log("------Lab9-----");
const student:any = {
    isstudent : true,
    name : "jane",
    No : 1,
    detail : {
        age : 20
    }
}
//clone
let student2:any = {}
for(let key in student){
    student2[key] = student[key];
}

//print key value in student2
for(let key in student2){
    console.log(`${key} : ${student2[key]}`)
}
console.log("-------------------")
//assign name to null
student2.name = null
for(let key in student2){
    console.log(`${key} : ${student2[key]}`)
}
console.log("-------------------")
//insert new value to student
Object.assign(student, {isActive : true})
for(let key in student){
    console.log(`${key} : ${student[key]}`)
}
console.log("-------------------")
delete student.isActive
for(let key in student){
    console.log(`${key} : ${student[key]}`)
}

console.log("------Lab10-----");
let lab10 : string = 'Apple, Cat, Zoo, Bird, Dog';
let input:string[] = lab10.split(',').sort();
console.log(input)
let arr:number[] = [123, 132, 423, 423, 12345, 5343, 52, 10904, 64];
console.log(arr.filter(item => (item+ '').startsWith('1')))
let arr2:string[] = ['Apple', 'Mango','Cat','Banana']
arr2.splice(2,1,"Orange");
console.log(arr2)

console.log("------Lab11-----");

const heroes = [
    {
        id:"a001",
        name: "Thor",
        weapons:["axe","hammer"]
    },
    {
        id:"a002",
        name:"Tony",
        weapons: ["iron suite"]
    }
]

let heroesMap = new Map()
heroes.map(item=>heroesMap.set(item.id,item))
console.log(heroesMap)
console.log(heroesMap.get('a001'))
heroesMap.delete('a001')
console.log(heroesMap)

console.log("------Lab12-----");
let Recarea = (width:number,height:number) => {
    let area = width*height;
    return area;
}
console.log("Rectangle area = " + Recarea(2,3))

let Prime = (num:number) => {
    for(let i =2; i<num ;i++){
        if(num%i == 0){
            return false
        }
    
    }
    return num>1
}
console.log("Is prime numeber? = " + Prime(17))

console.log("------Lab13-----");
interface IdCard{
    idNumber:number;
    name:string;
    surname:string;
    address:string;
}
interface subject{
    subjectName:string;
}
interface subjectDetail{
    subject:subject;
    subjectCode:string;
    subjectCredit:number;
}

console.log("------Lab14-----");
enum translationEnum{
    English='English',
    Thai='Thai',
    French='French',
    Dutch='Dutch'
}
let switchEnum=(code:number) =>{
    switch (code) {
        case 1:
            return translationEnum.English;
        case 2:
            return translationEnum.Thai;
        case 3:
            return translationEnum.French;
        case 4:
            return translationEnum.Dutch;
        default:
            return translationEnum.English;
    }
}
console.log("input 1 :",switchEnum(1));
console.log("input 2 :",switchEnum(2));
console.log("input 3 :",switchEnum(3));
console.log("input 4 :",switchEnum(4));

console.log("------Lab14-----")
let arrNumber = new Array<number>();
arrNumber.push(3);

interface StudentDetail{
    studentID:number;
    name:string;
    surname:string;
}
let studentDetail = new Map<string, StudentDetail>()
let std: StudentDetail={
    studentID:1111,
    name:'Nunu',
    surname:'Sur'
}
studentDetail.set('120',std);
console.log(studentDetail);