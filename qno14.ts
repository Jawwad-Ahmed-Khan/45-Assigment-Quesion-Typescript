let Guest_List:string[]= ["Fawwad Ahmed","Dawood", "Daniyal","Zeeshan"];
for(let i=0 ; i<Guest_List.length ; i++)
{
    console.log("I Invita ",Guest_List[i]," At Dinner:");
}

console.log("Due To Some Important Engagement Dawood will not attend Dinner Event So we will invite Fahad Khan");

Guest_List.splice(1,1,"Fahad Khan");
for(let i=0 ; i<Guest_List.length ; i++)
{
    console.log("I Invita ",Guest_List[i]," At Dinner:");
}

console.log("I want to invite Bigger Table For Dinner");

Guest_List.push("Amjad","Abdullah","Asfand");

console.log("List of Guest = ", Guest_List);

console.log("----- | Add New Guest At Beggining of Lis  |--------");

Guest_List.unshift("Sir Zia Khan");

console.log("List of Guest = ", Guest_List);

console.log("My dinner table would not arrvie at Time, So I invite only two guest for Dinner");

while(Guest_List.length>2)
{
    let remove_g:string=<string>Guest_List.pop(); 
 console.log(`Sorry ${remove_g} ! that I would not able to invite you to Dinner`);
}

for(let i=0; i<Guest_List.length; i++)
{
    console.log(Guest_List[i],"I am still inviting you At Dinner:");
}
Guest_List.pop();
Guest_List.pop();


