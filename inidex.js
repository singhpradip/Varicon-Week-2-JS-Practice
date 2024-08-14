const salesData = require("./salesData.json");
const calculateTotalSales = require("./salesEachProducts");
const calculateTotalRevenue = require("./totalRevenue");

const totalSales = calculateTotalSales(salesData);
console.log("Total Sales for Each Product:", totalSales);

console.log("Total Revenue: ", calculateTotalRevenue(salesData));
