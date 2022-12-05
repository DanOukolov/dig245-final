var trafficchart = document.getElementById("trafficflow");
var income = document.getElementById("sales");

// new
var myChart1 = new Chart(trafficchart, {
type: 'line',
data: {
    labels: ['1910', '1920', '1930', '1940', '1950', '1960', '1970', '1980', '1990', '2000', '2010', '2020'],
    datasets: [{
        data: ['12900', '14000', '13000', '13000', '14000', '12450', '14500', '12550', '12505', '12500', '13000', '14000'],
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
            text: 'Income adjusted for inflation',
            position: 'left',
        },
    },
}
});

// new
var myChart2 = new Chart(income, {
type: 'bar',
data: {
    labels: ['1910', '1920', '1930', '1940', '1950', '1960', '1970', '1980', '1990', '2000', '2010', '2020'],
    datasets: [{
            label: 'Income',
            data: ["3000000", "2700000", "2500000", "2400000", "2200000", "1900000", "1750000", "1500000", "1000000", "800000", "600000", "400000"],
            backgroundColor: "rgba(76, 175, 80, 0.5)",
            borderColor: "#6da252",
            borderWidth: 1,
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
            position: 'top',
        },
        title: {
            display: true,
            text: 'Income Adjusted for Inflation ',
            position: 'left',
        },
    },
}
});
