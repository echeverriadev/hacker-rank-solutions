function solve(meal_cost, tip_percent, tax_percent) {
    var p1 = meal_cost *(tip_percent/100);
    var p2 = meal_cost *(tax_percent/100);
    var totalCost = meal_cost + p1 + p2;
    console.log(Math.round(totalCost));
    

}