// Day 2: Operators
function solve(meal_cost, tip_percent, tax_percent) {
  const tip = meal_cost * 0.01 * tip_percent;
  const tax = tax_percent * 0.01 * meal_cost;
  let total_cost = meal_cost + tip + tax;
  console.log(Math.round(total_cost));
}
