// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var Array_Place = ["London", "Berlin", "Auckland", "Riyadh"];
console.log(Array_Place);
var Array2;
Array2 = Array_Place.slice();
console.log(Array2.sort());
// Reverse the order Array2.sort().reverse()
console.log(Array2.reverse());
console.log("My Orignal  Array :", Array_Place);
console.log("First Time Reverse Original Array :", Array_Place.reverse());
console.log("Again Reverse Original Array Convert in Orignal Form :", Array_Place.reverse());
console.log("Sort The Original Array In Assending:", Array_Place.sort());
console.log("Sort The  Original Array  in Descending Order:", Array_Place.reverse());
