let number;
let star = "";
/*function draw1(number){

    //1
for(let i = 0; i <number; i++){
    star += "*"
}
console.log(star);
}
draw1(3); 

function draw2(number){
    //2
for(let i = 0; i <number; i++){
    for (let j=0; j<number ;j++){
    star += "*"
    }star += "\n";
}
console.log(star);
}
draw2(3); 

function draw3(number){
    //2
for(let i = 1; i <number; i++){
    for (let j=1; j<number ;j++){
    star += i;
    }star += "\n";
}
console.log(star);
}
draw3(3); */

/*
function draw4(number){
    //2
for(let i = 1; i <number; i++){
    for (let j=1; j<number ;j++){
    star += i;
    }star += "\n";
}
console.log(star);
}
draw4(3); */

/*
function draw5(number){
    //5
for(let i = number; i>0; i++){
    for (let j=n; j>0 ;j++){
    star += i;
    }star += "\n";
}
console.log(star);
}
draw5(3); */

/*
function draw6(number){
    let sum =1;
    //5
for(let i = 0; i<number; i++){
    for (let j=1; j<=number ;j++){
    star += sum++;
    }star += "\n";
}
console.log(star);
}
draw6(2); */

/*
function draw7(number){
    let sum =1;
    let integer = number**2;
    //5
for(let i = 0; i<number; i++){
    for (let j=1; j<=number ;j++){
    star += integer--;
    }star += "\n";
}
console.log(star);
}
draw7(2); */

/*
function draw8(number){
    //8
for(let i = 0; i<number; i++){
    
    star += i*2;
    star += "\n";
    
}
console.log(star);
}
draw8(3); */
/*
function draw9(number){
    //9
for(let i = 1; i<=number; i++){
    {
    star += i*2;
    star += "\n";
    }
}
console.log(star);
}
draw9(3); */

/*
function draw10(number){
    //5
for(let i = 1; i<=number; i++){
    for (let j=1; j<=number ;j++){
    star += (i*j);
    }star += "\n";
}
console.log(star);
}
draw10(2); */

/*
function draw11(num){
    let str ='';
    for(let i=0;i<=num-1;i++){
        for(let j=0;j<=num-1;j++){
            if(i+j==num-1){
                str += "*";
            }else{
                str += "_"
            }

        }str += "\n"
       
    }
    console.log(str);
}
draw11(2);
*/

/*
function draw12(num){
        let str ='';
        for(let i=0;i<=num-1;i++){
            for(let j=0;j<=num-1;j++){
                if(i+j==num-1){
                    str += "_";
                }else{
                    str += "*"
                }

            }str += "\n"
           
        }
        console.log(str);
    }
    draw12(2);
*/

/*
function draw13(num){
    let str ='';
    for(let i=0;i<=num-1;i++){
        for(let j=0;j<=num-1;j++){
            if(i-j <0){
                str += "_";
            }else{
                str += "*"
            }

        }str += "\n"
       
    }
    console.log(str);
}
draw13(2);*/

/*
function draw14(num){
    let str ='';
    for(let i=0;i<=num-1;i++){
        for(let j=0;j<=num-1;j++){
            if(i+j>=num){
                str += "_";
            }else{
                str += "*"
            }

        }str += "\n"
       
    }
    console.log(str);
}
draw14(3);*/
/*
function draw15(num){
    let row = num + (num-1);
    let str ='';
    for(let i=0;i<row;i++){
        for(let j=0;j<num;j++){
        if(i<num){
            if(i-j<0){
                str += "_";
            }else{
                str += "*"
            }
        }
        else{
            if(i+j>=row){
                str+='_'
            }
            else{
                str +='*';
            }
        }
       
    }str += "\n";
    
}console.log(str);
}
draw15(3);
*/

/*
function draw17(num){
    let str ='';
    for(let i=0;i<=num-1;i++){
        for(let j=0;j<=num-1;j++){
            if(i+j < num-1 ){
                str += "_";
            }else{
                str += "*"
            }

        }str += "\n"
       
    }
    console.log(str);
}
draw17(3); */


let str ='';
function draw18(num){
    
    for(let i=0;i<=num-1;i++){
        for(let j=0;j<=num-1;j++){
            if(i-j >0){
                str += "_";
            }else{
                str += "*"
            }

        }str += "\n"
       
    }
    console.log(str);
}
draw18(4);
/*

function draw19(num){
    let row = num + (num-1);
    let str ='';
    for(let i=0;i<row;i++){
        for(let j=0;j<num;j++){
        if(i<num){
            if(i-j<0){
                str += "_";
            }else{
                str += "*"
            }
        }
        else{
            if(i+j>=row){
                str+='_'
            }
            else{
                str +='*';
            }
        }
       
    }str += "\n";
    
}console.log(str);
}
draw19(3);

*/



