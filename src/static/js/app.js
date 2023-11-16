const app = {
  init: function () {
    const currencies = app.currenciesGiven();
    app.showGraphs(currencies);
  },

  currenciesGiven: function () {
    const grid = document.getElementById('grid-graph');
    return grid.dataset.currencies.split(',');
  },

  showGraphs: function (currencies) {
    for (const currency of currencies) {
      const ctx = document.getElementById(`chart-${currency}`);

      let { daysLabels, rates } = ctx.dataset;

      daysLabels = daysLabels.replace(/[['\] ]/g, '').split(',');
      rates = JSON.parse(rates.split("'").join('"'));

      app.createGraph(ctx, daysLabels, currency, rates);
    }
  },

  createGraph: function (elt, daysLabels, currency, rates) {
    new Chart(elt, {
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
  },
};

document.addEventListener('DOMContentLoaded', app.init);
