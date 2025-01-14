let state_revenue = {
  "SP": 67836.43,
  "RJ": 36678.66,
  "MG": 29229.88,
  "ES": 27165.48,
  "Outros": 19849.53
}

let total_revenue = 0;

for (let keys in state_revenue) {
  total_revenue += state_revenue[keys];
}

console.log("Estado - Faturamento - Porcentagem");

let revenue_percent = 0;

for (let keys in state_revenue) {
  revenue_percent = (100 * state_revenue[keys]) / total_revenue;
  
  console.log(keys, "-", state_revenue[keys], "-", revenue_percent.toFixed(2), "%");
}

console.log("Total: ", total_revenue);
