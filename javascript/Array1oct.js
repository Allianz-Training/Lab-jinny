//1.1
let array1 = ['1','2','30','400'];
let array2 = array1.map(item => item*2);

//1.2
let arrayString1 = [1,2,3,4];
let arrayString2 = arrayString1.map(item => item.toString());

//1.3
let arrayType1 = [1,"1",2,{}];
let arrayType2 = arrayType1.map(item => typeof(item));

//1.4
let arrayUpper1 = ['apple','banana','orange'];
let arrayUpper2 = arrayUpper1.map(item => item.toUpperCase());

//1.5
let arrayName1 = [
    {name:'apple',age:14},
    {name:'banana',age:18},
    {name:'watermalon',age:32}
];
let arrayName2 = arrayName1.map(item => item.name);

//1.6
let arrayAge = arrayName1.map(item => item.age)

//1.7
let ArrayCon1 = [
    {name:"apple",surname:"London"},
    {name:"banana",surname:"Bangkok"},
    {name:"watermelon",surname:"Singapore"}
];

let ArrayCon2 = ArrayCon1.map(item => item.name + " "+ item.surname)


//1.8
let ArrayNum = [1,3,4,5,6,7,8];
let ArrayNum1 = ArrayNum.map(n => n%2==0 ? 'even':'odd')

//1.9
let ArrayInt1 = [1,-3,2,8,-4,5]
let ArrayInt2 = ArrayInt1.map(item => Math.abs(item))

//1.10
let arrayFloat = [100,200.25,300.84,400.3]
let arrayFloat1 = arrayFloat.map(item => item.toFixed(2)) 

//1.11 **
let arrayCalAge = [
    {name:'apple',birth:'2000-01-01'},
    {name:'banana',birth:'1990-10-01'},
    {name:'watermelon',birth:'1985-12-01'}
]
let arrayCalAge1 = arrayCalAge.map(item => item[1])

//1.12 **
let arrayHTML = [
    {name:'apple',birth:'2000-01-01'},
    {name:'banana',birth:'1990-10-01'},
    {name:'watermelon',birth:'1985-12-30'}
]
let arrayHTML1 = arrayHTML.map(item => {
    return ","
})

//2.1
let arrayfil = [1,2,30,400]
let arrayfil1 = arrayfil.filter(n => n>10)

//2.2
let arrayOddEven1 = [1,2,3,4]
let arrayOddEven2 = arrayOddEven1.filter(n => n%2 != 0)

//2.3
let arrayFindNum1 = [1,"1",2,{}]
let arrayFindNum2 = arrayFindNum1.filter(item => typeof(item) == 'number')

//2.4
let arrayLength1 = ['apple','banana','orange','pineapple','watermelon']
let arrayLength2 = arrayLength1.filter(item => item.length >6)

//2.5
let arrayFilterAge = [
    {name:'apple',age:14},
    {name:'banana',age:18},
    {name:'watermalon',age:32},
    {name:'pineapple',age:16},
    {name:'peach',age:24}
];
let arrayFilterAge1 = arrayFilterAge.filter(item => item.age <18)

//2.6
let arrayFilterAge32 = arrayFilterAge.filter(item => item.age != 32)

//2.7
let arrayPositive1 = [1,-3,2,8,-4,5];
let arrayPositive2 = arrayPositive1.filter(item => item>0);

//2.8
let arrayDivided1 = [1,2,3,5,6,7,8];
let arrayDivided2 = arrayDivided1.filter(item => item%3==0);

//2.9
let arrayTypeString1 = ['peach',1,-3,"2",{},[]];
let arrayTypeString2 = arrayTypeString1.filter(item => typeof item == 'string');

//2.10
let arrayCAP1 = ['APPLE','appLE','PEACH','PEach'];
let arrayCAP2 = arrayCAP1.filter(item => item == item.toUpperCase() );




//console.log(array2); //1.1
//console.log(arrayString2)
//console.log(arrayType2)
//console.log(arrayUpper2)
//console.log(arrayName2)
//console.log(arrayAge)
//console.log(ArrayNum1)
//console.log(ArrayInt2)
//console.log(arrayFloat1)
//console.log(arrayCalAge1)
//console.log(arrayfil1)
//console.log(arrayOddEven2)
//console.log(arrayFindNum2)
//console.log(arrayLength2)
//console.log(arrayFilterAge1)
//console.log(arrayFilterAge32)
//console.log(arrayPositive2)
//console.log(arrayDivided2)
//console.log(arrayTypeString2)
console.log(arrayCAP2)

