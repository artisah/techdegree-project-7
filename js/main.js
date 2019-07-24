// Traffic line char
const trafficChartView = document.getElementById('traffic-chart-View');
const trafficCanvas = document.getElementById('traffic-chart'); 
const activeTrafficList = document.querySelector('.active-list');

console.log(activeTrafficList);

let displayChartValue = '';

let trafficCharLabels = {
    'hourly': ['02','04','06','08','10','12','14','16','18','20','22','00'],
    'daily' : ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    'weekly': ['02/07/19','09/07/19','16/07/19','23/07/19','30/07/19','06/08/19','13/08/19','20/08/19','27/08/19','03/09/19'],
    'monthly':['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Oct','Nov','Dec']
}

let trafficData = {
    'hourly': [1750, 1250, 1850, 2250, 1500, 2500, 1000, 750, 800, 200, 1200, 1250],
    'daily' : [1250, 2000, 230, 600, 790, 2300, 1850],
    'weekly': [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500 ],
    'monthly':[1100, 100, 2090, 3000, 4000, 450, 600, 1500, 230, 1750, 100, 3000]
}

// default display chart on page load
displayChart(trafficCharLabels.weekly, trafficData.weekly);

trafficChartView.addEventListener('click', function(e) {
    displayChartValue = e.target.innerHTML.toLowerCase();
    activeTrafficList.classList.remove('active-list');
    
    if (displayChartValue === 'hourly') {
        displayChart(trafficCharLabels.hourly, trafficData.hourly);

    } else if (displayChartValue === 'daily') {
        displayChart(trafficCharLabels.daily, trafficData.daily);
    } else if (displayChartValue === 'weekly') {
        displayChart(trafficCharLabels.weekly, trafficData.weekly);
    } else if (displayChartValue === 'monthly') {
        displayChart(trafficCharLabels.monthly, trafficData.monthly);
    }

}) ;


function displayChart(labelvalue, dataValue) {
    let lineChart = new Chart(trafficCanvas, {
        type: 'line',
        data: {
            labels: labelvalue,
            datasets: [{
                label: 'TRAFFIC',
                lineTension: 0,
                data: dataValue, 
                backgroundColor: 'rgba(116, 119, 191, 0.3)',
                pointRadius: 7,
                pointBackgroundColor: '#fff',
                pointBorderWidth: 2,
                pointBorderColor: 'rgba(128, 132, 196, 0.8)',
                borderColor: 'rgba(128, 132, 196, 0.5)',
                borderWidth: 2,

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
}


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