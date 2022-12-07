
var savingsaccnt = document.getElementById("savingsaccnt");


// new
let y = [];
let x = [];
var myChart5 = new Chart(savingsaccnt, {
type: 'line',
data: {
    labels: y,
    datasets: [{
        data: x,
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
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}