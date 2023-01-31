let csvToJson = require("convert-csv-to-json");
let fileInputName = "ibox-product.csv";
let fileOutputName = "product.json";

let json = csvToJson.getJsonFromCsv(fileInputName);
for (let i = 0; i < json.length; i++) {
  console.log(json[i]);
}
