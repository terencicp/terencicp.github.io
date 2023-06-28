// Plot settings
window.onload = function() {

    // Map
    var iframeSource = "./linkedin/map_small.html";
    if (window.innerWidth > 600) {
        iframeSource = "./linkedin/map_large.html";
    }
    document.getElementById('mapframe').src = iframeSource;

    // Doughnut chart
    var ctx = document.getElementById('dChart').getContext('2d');
    var dChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: ['On-site', 'Hybrid', 'Remote'],
          datasets: [{
              label: 'Type of job',
              data: [53, 37, 10],
              backgroundColor: [
                  'rgba(216, 27, 96,255)',
                  'rgba(30, 136, 229,255)',
                  'rgba(255,193,7,255)'
              ],
              borderColor: [
                  'rgba(255,255,255,255)'
              ],
              borderWidth: 2
          }]
      },
        options: {
          responsive: true,
          rotation: 180,
          plugins: {
            tooltip: {
              callbacks: {
                label: function(context) {
                  var value = context.raw !== undefined ? context.raw + '%' : '';
                  return value;
                },
                title: function(context) {
                  var title = context[0].label ? context[0].label : '';
                  return title;
                }
              }
            },
            legend: {
              position: 'top',
              labels: {
                font: {
                  size: 16,
                },
                color: 'black'
              },
            },
            title: {
              display: true,
              text: 'Proportion of jobs by type',
              font: {
                size: 20,
              },
              color: 'black'
            }
          }
       }
    });

    // Horizontal bar plot
    var ctx2 = document.getElementById('bChart').getContext('2d');
    var bChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['IT & Services', 'Staffing & Recruiting', 'Financial Services',
                'Computer Software', 'Human Resources', 'Management Consulting', 'Banking',
                'Retail', 'Automotive', 'Transportation', 'Marketing & Advertising',
                'Pharmaceuticals'],
        datasets: [{
            label: 'Percentage',
            data: [23.4, 13.45, 6.02, 5.77, 4.79, 4.37, 3.73, 2.89, 1.71, 1.6, 1.51, 1.43],
            backgroundColor: [
                  'rgba(13, 110, 168,255)',
            ],
            borderColor: [
                'rgba(8, 66, 99, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
            title: {
                display: true,
                text: 'Percentage of jobs per sector',
                font: {
                    size: 20,
                },
                color: 'black',
            },
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    callback: function(value, index, values) {
                        return value + '%';
                    },
                    font: {
                        size: 16,
                    },
                    color: 'black'
                }
            },
            y: {
                ticks: {
                    font: {
                        size: 16,
                    },
                    color: 'black'
                }
            }
        }
    }
});


};
