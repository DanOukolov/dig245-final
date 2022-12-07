
$(document).ready
(function() {
    'use strict';
    // Toggle sidebar on Menu button click
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
        $('#body').toggleClass('active');
    });
    
    $(".question").hide();

   


});
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
        data: ['20', '30', '40', '50', '60', '70', '80', '110','150', '200', '300','400'],
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
            data: ["20", "30", "40", "50", "60", "70", "80",'90','100','110','120','130','140'],
        }, {
            label: 'Spending',
            backgroundColor: "rgba(244, 67, 54, 0.5)",
            borderColor: "rgb(255, 99, 132)",
            borderWidth: 1,
            data: ["5", "15", "25", "35", "45", "50", "85","100","130","150","180",'200'],
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
            text: 'Revenue in Trillions $',
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
        data: ["60", "25", "15"],
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
            text: 'Total Value',
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
            data: ["20", "30", "40", "50", "60", "70", "80"],
        }, {
            label: 'Liabilites',
            backgroundColor: "rgba(76, 175, 80, .5)",
            borderColor: "rgba(76, 175, 80)",
            borderWidth: 1,
            data: ["2", "5", "15", "25", "35", "25", "15"],
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
            text: 'Volume',
            position: 'left',
        },
    },
}
});


let savings = 0;

function switchQuestion(this_q, next_q){
    if($(this).data("question") == "4"){
        saveOccupation();
    }
    countPoints();
    $("#q"+this_q).hide();
    $("#q"+next_q).show();
}


function saveOccupation(){
    let myOccupation = document.getElementById("occupation");
    myOccupation = occupation.options[occupation.selectedIndex].text;
    return myOccupation;
}

function countPoints(){
    if($(this).data("question") == "1" && $(".yes")){
        savings += "50000";
        chart.addData(myChart5, 'Teens', savings)
    }

    else if(($(this).data("question") == "1" && $(".no"))){
        savings += 10000;
        chart.addData("#savingsaccnt")
    }

    else if(($(this).data("question") == "2" && $(".yes"))){
        savings += 1000000;
    }

    else if($(this).data("question") == "2" && $(".no")){
        savings += 500000;
    }

    else if($(this).data("question") == "3" && $(".yes")){
        savings -= 200000;
    }

    else if($(this).data("question") == "3" && $(".no")){
        savings = savings;
    }

    else if($(this).data("question") == "4"){
        if(myOccupation === "business"){
            savings += 1000000;
        }
        if(myOccupation === "healthcare"){
            savings += 800000;
        }if(myOccupation === "engineering"){
            savings += 15000000;
        }if(myOccupation === "socials"){
            savings += 200000;
        }
        if(myOccupation === "art"){
            savings += 100000;
        }if(myOccupation === "trade"){
            savings += 750000;
        }if(myOccupation === "media"){
            savings += 800000;
        }

    }

    else if($(this).data("question") == "5"){
        if($(".yes")){
            savings += 1000000;
        }
        
        if($(".no")){
           savings += 20000 
        }
    }

    else if($(this).data("question") == "6"){
        if($(".yes")){
            savings += 2000000; 
        }

        if($(".no")){
            savings -= 400000;
        }
    }

    else if($(this).data("question") == "7"){
        if($(".yes")){
            savings += 1000000; 
        }

        if($(".no")){
            savings -= 400000;
        }
    }
}

function addData(chart, label, data) {
    myChart5.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}
