let car = 'subaru';
let check_variable =car;
let j=1;

for(let i = 0; i <2;i++){


console.log(j++," Condition using Ternairy:",check_variable ==='subaru'?"you Pridect True":"you Pridect False");

console.log(j++," Condition using Boolean",check_variable === 'subaru');


if(check_variable ==='subaru')
{
    console.log(j++," Condition using if else:","you Pridect True");
}else{
    console.log(j++," Condition using if else :you Pridect False");
}

switch(check_variable)
{
    case'subaru':
        console.log(j++," Condition using swith case:","you Pridect True");
        break;
    default:
        console.log(j++," Condition: using swith case: ","you Pridect False");
}
if(car.length===check_variable.length && car===check_variable)
{
    console.log(j++," Condition using if else:","you Pridect True");
}else{
    console.log(j++," Condition using if else:","you Pridect False");
}
check_variable="audi";
}