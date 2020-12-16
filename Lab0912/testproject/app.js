var text;
text = "hello world";
var text2;
text2 = "Hello Nunu";
text = 'H' + text.slice(1, 6) + 'W' + text.slice(7);
var micro = "microsoft excel";
var ga = "GOOGLE AND APPLE";
var str = "hello";
var str1 = "world";
console.log(text[12]);
console.log(text.charAt(12));
console.log(text.length);
console.log("------Lab1-----");
console.log(str + " " + str1);
console.log(micro.toUpperCase());
console.log(ga.toLowerCase());
console.log("------Lab2-----");
console.log("Hello World".startsWith("Hello"));
console.log("Hello World".startsWith("World"));
console.log("Hello World".endsWith("Hello"));
console.log("Hello World".endsWith("World"));
console.log("Computer".slice(3, 6));
console.log("Death Race".slice(0, 5));
console.log("Republican".slice(2, 8));
console.log("------Lab3-----");
console.log(1e6);
console.log(1e7);
console.log(4.3e10);
console.log(1.2e-5);
console.log(1.234e-7);
console.log(1 * (Math.pow(10, 10)));
console.log(2 * (Math.pow(10, 5)));
console.log(122 * (Math.pow(10, 8)));
console.log(1 * (Math.pow(10, -8)));
console.log((12 * (Math.pow(10, -5))).toFixed(5));
console.log("------Lab4 & 5 -----");
var num = [100, 111, 55, 21, 99];
num.map(function (item) { return console.log(item + "  to Octal " + item.toString(8)); });
num.map(function (item) { return console.log(item + "  to Hexa " + item.toString(16)); });
var round = [12.423, 31313.135, 42.809];
round.map(function (item) { return console.log(item + " rounded = " + Math.round(item)); });
console.log("------Lab6 -----");
function random(min, max) {
    return Math.random() * (max - min) + min;
}
console.log(random(3, 70));
console.log("------Lab7 -----");
var A = false;
var B = true;
var C = false;
console.log(A || (B && C));
console.log(B || (A || C));
console.log((B && (A || C)));
console.log("------Lab8-----");
var a = [false, "ABC", 113113, null, ""];
a.map(function (item) { return console.log(item + " = ", typeof item); });
console.log("------Lab9-----");
var student = {
    isstudent: true,
    name: "jane",
    No: 1,
    detail: {
        age: 20
    }
};
//clone
var student2 = {};
for (var key in student) {
    student2[key] = student[key];
}
//print key value in student2
for (var key in student2) {
    console.log(key + " : " + student2[key]);
}
console.log("-------------------");
//assign name to null
student2.name = null;
for (var key in student2) {
    console.log(key + " : " + student2[key]);
}
console.log("-------------------");
//insert new value to student
Object.assign(student, { isActive: true });
for (var key in student) {
    console.log(key + " : " + student[key]);
}
console.log("-------------------");
delete student.isActive;
for (var key in student) {
    console.log(key + " : " + student[key]);
}
console.log("------Lab10-----");
var lab10 = 'Apple, Cat, Zoo, Bird, Dog';
var input = lab10.split(',').sort();
console.log(input);
var arr = [123, 132, 423, 423, 12345, 5343, 52, 10904, 64];
console.log(arr.filter(function (item) { return (item + '').startsWith('1'); }));
var arr2 = ['Apple', 'Mango', 'Cat', 'Banana'];
arr2.splice(2, 1, "Orange");
console.log(arr2);
console.log("------Lab11-----");
var heroes = [
    {
        id: "a001",
        name: "Thor",
        weapons: ["axe", "hammer"]
    },
    {
        id: "a002",
        name: "Tony",
        weapons: ["iron suite"]
    }
];
var heroesMap = new Map();
heroes.map(function (item) { return heroesMap.set(item.id, item); });
console.log(heroesMap);
console.log(heroesMap.get('a001'));
heroesMap["delete"]('a001');
console.log(heroesMap);
console.log("------Lab12-----");
var Recarea = function (width, height) {
    var area = width * height;
    return area;
};
console.log("Rectangle area = " + Recarea(2, 3));
var Prime = function (num) {
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return num > 1;
};
console.log("Is prime numeber? = " + Prime(17));
console.log("------Lab13-----");
console.log("------Lab14-----");
var translationEnum;
(function (translationEnum) {
    translationEnum["English"] = "English";
    translationEnum["Thai"] = "Thai";
    translationEnum["French"] = "French";
    translationEnum["Dutch"] = "Dutch";
})(translationEnum || (translationEnum = {}));
var switchEnum = function (code) {
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
};
console.log("input 1 :", switchEnum(1));
console.log("input 2 :", switchEnum(2));
console.log("input 3 :", switchEnum(3));
console.log("input 4 :", switchEnum(4));
console.log("------Lab14-----");
var arrNumber = new Array();
arrNumber.push(3);
var studentDetail = new Map();
var std = {
    studentID: 1111,
    name: 'Nunu',
    surname: 'Sur'
};
studentDetail.set('120', std);
console.log(studentDetail);
