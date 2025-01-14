const fs = require('fs');

let file_revenue = fs.readFileSync('./february_revenue.json');
let month_revenue = JSON.parse(file_revenue);

let working_days = 0;
let indice_highest_daily_revenue = 0;
let indice_lowest_daily_revenue = 0;

let total_revenue_month = 0;

let average_month = 0;
 
for (let i = 0; i < month_revenue.length; i++) {
  let day_object = month_revenue[i];

  if (!day_object.vacation_weekend) {
    working_days += 1
    
    if (month_revenue[indice_highest_daily_revenue].revenue < day_object.revenue) {
      indice_highest_daily_revenue = i;
    }

    if (month_revenue[indice_lowest_daily_revenue].revenue > day_object.revenue) {
      indice_lowest_daily_revenue = i;
    }

    total_revenue_month += day_object.revenue;
  } 
}

average_month = total_revenue_month / working_days;

let num_days_high_average_revenue_month = month_revenue
                                            .filter((day_object) => !day_object.vacation_weekend && day_object.revenue > average_month)
                                            .length


console.log("O menor valor de faturamento ocorrido no mês: ");
console.log("Dia: ", month_revenue[indice_lowest_daily_revenue].day);
console.log("Faturamento: ", month_revenue[indice_lowest_daily_revenue].revenue);

console.log("O maior valor de faturamento ocorrido no mês: ");
console.log("Dia: ", month_revenue[indice_highest_daily_revenue].day);
console.log("Faturamento: ", month_revenue[indice_highest_daily_revenue].revenue);

console.log("Número de dias no mês em que o valor de faturamento diário foi superior à média mensal");
console.log("Média mensal: ", average_month)
console.log("Quantidade de dias superior:  ", num_days_high_average_revenue_month);
