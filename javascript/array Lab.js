//Lab 1 OCT 2020

//Exercise String 2.11.1
function ucFirst(string){
    First = string.slice(0,1).toUpperCase();
    Second = string.slice(1);
   Sentence = First + Second;
   console.log('2.11.1',Sentence)
}
ucFirst('nunu')

//Exercise String 2.11.2
function checkSpam(string){
    return string.toLowerCase().includes("xxx") ||string.toLowerCase().includes("viagra") ? true : false;
 }
console.log('2.11.2',checkSpam("viagra"));

//Exercise String 2.11.3
function truncate(str,maxlength){
    if(str.length > maxlength){
        console.log('2.11.3',str.substr(0,maxlength)+"...")
    } else{
        console.log(str)
    }
}
truncate ("hi everyone",3)

//Exercise String 2.11.4

function extraCurrencyValue(string,rate){
    if(string[0] != '$'){
        console.log("wrong sign")
    }else
        exchange = string.slice(1) * rate;
        return exchange;
}

console.log('2.11.4',extraCurrencyValue('$120',30.5))


//Exercise Array 3.11
let styles = new Array("Jazz","Blues");
styles.push("Rock-n-Roll");
styles[1] = "Classics";
styles.shift();
styles.unshift("Rap","Reggae");
console.log('3.11.2' ,styles);



