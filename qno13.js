var Mode = "Motorcycle";
var statement = [
    "I would like to own Honda ".concat(Mode),
    "I would like to Modified  My ".concat(Mode),
    "I would Lkie to riding My ".concat(Mode, " in Night"),
];
for (var _i = 0, statement_1 = statement; _i < statement_1.length; _i++) {
    var i = statement_1[_i];
    console.log(i);
}
// interface Transportation {
//   name: string;
//   model?: string;
// }
// const myTransports: Transportation[] = [
//   { name: "Motorcycle", model: "Ducati Panigale V4" },
//   { name: "Car", model: "Tesla Model S" },
//   { name: "Train", model: "High-Speed Maglev" },
// ];
// for (const transport of myTransports) {
//   let modelText = "";
//   if (transport.model) {
//     modelText = ` (model: ${transport.model})`;
//   }
//   console.log(`I would love to travel by ${transport.name}${modelText}.`);
// }
