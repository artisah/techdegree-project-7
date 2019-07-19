// Traffic line char
const trafficCanvas = document.getElementById('traffic-chart'); 
let lineChart = new Chart(trafficCanvas, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            label: 'TRAFFIC',
            lineTension: 0,
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500 ], 
            backgroundColor: 'rgba(116, 119, 191, 0.3)',
            pointRadius: 7,
            pointBackgroundColor: '#fff',
            pointBorderWidth: 2,
            pointBorderColor: 'rgba(128, 132, 196, 0.8)',
            borderColor: 'rgba(128, 132, 196, 0.5)',
            borderWidth: 2

        }]
    },
    options: {
        animation: {
           duration: 0
        },
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
}); 

// Daily traffic bar chart.

const dailyCanvas = document.getElementById('daily-chart'); 
let barChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: 'Daily Traffic',
            data: [75, 115, 175, 125, 225, 200, 100], 
            backgroundColor: '#7477BF',
            borderWidth: 1

        }]
    },
    options: {
        animation: {
           duration: 0
        },
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
}); 

// Doughnut chart
const mobileCanvas = document.getElementById('mobile-chart'); 
let doughnutChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: {
        labels: ["Desktop", "Tablet", "Phones"],
        datasets: [{
            label: '# of Users',
            data: [2000, 550, 500], 
            backgroundColor: '#7477BF',
            borderWidth: 0,
            backgroundColor: [
                '#7477BF',
                '#78CF82',
                '#51B6C8'
                ]

        }]
    },
    options: {
        animation: {
           duration: 0
        },
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
}); 