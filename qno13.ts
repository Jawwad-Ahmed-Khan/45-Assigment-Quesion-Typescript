const Mode = "Motorcycle";

let statement: string[] = [
  `I would like to own Honda ${Mode}`,
  `I would like to Modified  My ${Mode}`,
  `I would Lkie to riding My ${Mode} in Night`,
];

for (let i of statement) 
{
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
