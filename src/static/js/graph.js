const grid = document.getElementById('grid-graph');
const currencies = grid.dataset.currencies.split(',');
const dataLength = currencies.length;

for (const currency of currencies) {
  const ctx = document.getElementById(`chart-${currency}`);

  let { daysLabels, rates } = ctx.dataset;

  isResult = daysLabels !== 'False' && rates !== 'False';

  daysLabels = isResult ? daysLabels.replace(/[['\] ]/g, '').split(',') : false;
  rates = isResult ? JSON.parse(rates.split("'").join('"')) : false;

  if (isResult) {
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: daysLabels,
        datasets: [
          {
            label: currency,
            data: rates,
            fill: true,
            backgroundColor: 'rgba(220, 220, 220, 0.05)',
            borderColor: 'rgb(255, 128, 128)',
            trendlineLinear: {
              colorMin: '#9fd6f4',
              colorMax: '#9fd6f4',
              lineStyle: 'dotted',
              width: 3,
            },
          },
        ],
      },
    });
  }
}
