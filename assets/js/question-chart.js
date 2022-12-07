var savings = document.getElementById("savingsaccnt");
var myChart1 = new Chart(savings, {
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
                text: 'Percent Change',
                position: 'left',
            },
        },
    }
});