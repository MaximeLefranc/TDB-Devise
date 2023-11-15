const grid = document.getElementById('grid-graph');
const currencies = grid.dataset.currencies.replace(/[['\] ]/g, '').split(',');
const dataLength = currencies.length;

// const ctx = document.getElementById('chart');

// let { daysLabels, rates } = ctx.dataset;

// isResult = daysLabels !== 'False' && rates !== 'False';

// daysLabels = isResult ? daysLabels.replace(/[['\] ]/g, '').split(',') : false;
// rates = isResult ? JSON.parse(rates.split("'").join('"')) : false;

// if (isResult) {
//   new Chart(ctx, {
//     type: 'line',
//     data: {
//       labels: daysLabels,
//       datasets: [
//         {
//           label: 'USD',
//           data: rates,
//           fill: true,
//           backgroundColor: 'rgba(220, 220, 220, 0.05)',
//           borderColor: 'rgb(255, 128, 128)',
//           tension: 0.3,
//         },
//       ],
//     },
//   });
// }
