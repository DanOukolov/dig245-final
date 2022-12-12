var chart1 = document.getElementById("linechart");
var chart2 = document.getElementById("barchart");
var chart3 = document.getElementById("piechart");
var chart4 = document.getElementById("stackedbarchart");
// new
var myChart1 = new Chart(chart1, {
type: 'line',
data: {
    labels: ['1910', '1920', '1930', '1940', '1950', '1960', '1970', '1980', '1990', '2000', '2010', '2020'],
    datasets: [{
        data: ['1', '111', '176', '147', '254', '312', '408', '867','1376', '1813', '2295','2724'],
        backgroundColor: "rgba(48, 164, 255, 0.2)",
        borderColor: "rgba(48, 164, 255, 0.8)",
        fill: true,
        borderWidth: 1
    }]
},
options: {
    animation: {
        duration: 2000,
        easing: 'easeOutQuart',
    },
    plugins: {
        legend: {
            display: false,
            position: 'right',
        },
        title: {
            display: true,
            text: 'Percent Change',
            position: 'left',
        },
    },
}
});

// new
var myChart2 = new Chart(chart2, {
type: 'bar',
data: {
    labels: ['1910', '1920', '1930', '1940', '1950', '1960', '1970', '1980', '1990', '2000', '2010', '2020'],
    datasets: [{
            label: 'Revenue',
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            borderColor: "rgb(54, 162, 235)",
            borderWidth: 1,
            data: ["7.59", "12.9", "14.61", "16.86", "20.88", "26.88", "29.91",'31','32.33','35.86','31.36','32.49'],
        }, {
            label: 'Spending',
            backgroundColor: "rgba(244, 67, 54, 0.5)",
            borderColor: "rgb(255, 99, 132)",
            borderWidth: 1,
            data: ["7.5", "12.7", "13.6", "20.0", "24.5", "27.6", "32.5","35.1","37.2","34.8","43.9",'52.5'],
    }]
},
options: {
    animation: {
        duration: 2000,
        easing: 'easeOutQuart',
    },
    plugins: {
        legend: {
            display: true,
            position: 'top',
        },
        title: {
            display: true,
            text: 'Revenue as a % of GDP',
            position: 'left',
        },
    },
}
});

// new
var myChart3 = new Chart(chart3, {
type: 'pie',
data: {
    labels: ["Upper Tax Brackets","Middle Tax Brackets","Lower Tax Brackets"],
    datasets: [{
        data: ["82.4", "30.2", "2.3"],
        backgroundColor: ["#009688", "#795548", "#673AB7", "#2196F3", "#6da252"],
        hoverOffset: 4
    }]
},
options: {
    animation: {
        duration: 2000,
        easing: 'easeOutQuart',
    },
    plugins: {
        legend: {
            display: true,
            position: 'right',
        },
        title: {
            display: false,
            text: 'Trillions in $',
            position: 'left',
        },
    },
}
});


// new
var myChart4 = new Chart(chart4, {
type: 'bar',
data: {
    labels: ['1910', '1920', '1930', '1940', '1950', '1960', '1970', '1980', '1990', '2000', '2010', '2020'],
    datasets: [{
            label: 'Income',
            backgroundColor: "rgba(0, 150, 136, .5)",
            borderColor: "rgb(0, 150, 136)",
            borderWidth: 1,
            data: ["0.8","1.3","3.2", "6.55", "39.44", "92.49", "192.81", "517.81", "1039.96","2025.19","2162.71","3412.16"],
        }, {
            label: 'Liabilites',
            backgroundColor: "rgba(76, 175, 80, .5)",
            borderColor: "rgba(76, 175, 80)",
            borderWidth: 1,
            data: ["3.2","6.26", "34.36", "70.98", "280.97", "360.48", "524.49", "1245.05","4066.29", "7080.52", "16373","30169.69"],
    }]
},
options: {
    animation: {
        duration: 2000,
        easing: 'easeOutQuart',
    },
    scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            }
        },
    plugins: {
        legend: {
            display: true,
            position: 'top',
        },
        title: {
            display: true,
            text: 'Billions in $',
            position: 'left',
        },
    },
}
});
