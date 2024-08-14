const salesData = require("./salesData.json");
const calculateTotalSales = require("./salesEachProducts");
const calculateTotalRevenue = require("./totalRevenue");

console.log("Total Sales for Each Product: ", calculateTotalSales(salesData));
console.log("Total Revenue: ", calculateTotalRevenue(salesData));
