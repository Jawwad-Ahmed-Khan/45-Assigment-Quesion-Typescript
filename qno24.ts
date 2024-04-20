let My_A:number[] =[21,3,4,13,5,7,35,3];
let options=10;
let str1="Artificial";
let str2="Personally";
let str3="PERSONALLY";
if(str1.length == str2.length)
{
    console.log("Yes Lengths Are Equal of Both Strings")
}
if(options>0&&options<15)
{
    console.log("Using And Operator (options>0&&options<15): true ");
}
if(options>20||options%2===0)
{
    console.log("Using Or Operator (options>20||options%2===0): true ");
}
if(My_A.indexOf(7)!==-1){
    console.log("Yes 7 isIncludes in Array : true ");
}else {
    console.log("No 7 is not Includes in Array : false ");
}

if(My_A.indexOf(8)!==-1)
{
    console.log("Yes 8 is Includes in Array : true ");
}else
{
    console.log("No 8 is not Includes in Array : flase ");
}
if(str3.toLowerCase()===str2)
{
    console.log("Yes str3.toLowerCase()===str2 : true ");
}