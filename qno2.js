//@ts-ignore
var Name = "jawwad ahmed";
console.log("\nTo Lowrer Case: ", Name.toLowerCase());
console.log("\nTo Upper Case: ", Name.toUpperCase());
//1st Method of Title Case:
console.log("\n Title Case: ", Name.split(" ")[0][0].toUpperCase() +
    Name.slice(1, 6) +
    " " +
    Name.split("")[1][0].toUpperCase() +
    Name.slice(8));
//2nd Method of Title Case:
var Newvar = "";
for (var i = 0; i < Name.length; i++) {
    if (i == 0 || Name[i - 1] == " ") {
        Newvar += Name[i].toUpperCase();
    }
    else {
        Newvar += Name[i];
    }
}
console.log("2nd Method of Title Case Output: ", Newvar);
