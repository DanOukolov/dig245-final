var trafficchart = document.getElementById("trafficflow");


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