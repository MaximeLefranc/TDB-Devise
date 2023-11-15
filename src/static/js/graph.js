const ctx = document.getElementById('chart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: [1, 2, 3, 4, 5],
    datasets: [
      {
        label: 'USD',
        data: [1, 3, 2, 7, 4],
        fill: false,
        borderColor: 'rgb(255, 128, 128)',
        tension: 0.3,
      },
    ],
  },
});
