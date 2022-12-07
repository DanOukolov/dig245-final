
var chart5 = document.getElementById("savingsaccnt");


// new
let labeling = [];
let dataPoints = [];
var myChart5 = new Chart(chart5, {
    type: 'line',
    data: {
        labels: ['1','2','3'],
        datasets: [{
            data: ['1','2','3'],
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


function addData(chart, label, data) {
    chart.data.labels.push(label);
    //chart.data.datasets.forEach((dataset) => {
    chart.data.datasets[0].data.push(data);
    //});
    chart.update();
}

