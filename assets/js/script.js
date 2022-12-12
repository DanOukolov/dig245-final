let savingsBalance = 0;
$(document).ready
(function() {
    'use strict';
    // Toggle sidebar on Menu button click
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
        $('#body').toggleClass('active');
    });
    
    $(".question").hide();
    $("#retirement").hide();
    $("#life-working").hide();

    var chart1 = document.getElementById("linechart");
    var chart2 = document.getElementById("barchart");
    var chart3 = document.getElementById("piechart");
    var chart4 = document.getElementById("stackedbarchart");


});

// // new
// var myChart1 = new Chart(chart1, {
// type: 'line',
// data: {
//     labels: ['1910', '1920', '1930', '1940', '1950', '1960', '1970', '1980', '1990', '2000', '2010', '2020'],
//     datasets: [{
//         data: ['20', '30', '40', '50', '60', '70', '80', '110','150', '200', '300','400'],
//         backgroundColor: "rgba(48, 164, 255, 0.2)",
//         borderColor: "rgba(48, 164, 255, 0.8)",
//         fill: true,
//         borderWidth: 1
//     }]
// },
// options: {
//     animation: {
//         duration: 2000,
//         easing: 'easeOutQuart',
//     },
//     plugins: {
//         legend: {
//             display: false,
//             position: 'right',
//         },
//         title: {
//             display: true,
//             text: 'Percent Change',
//             position: 'left',
//         },
//     },
// }
// });

// // new
// var myChart2 = new Chart(chart2, {
// type: 'bar',
// data: {
//     labels: ['1910', '1920', '1930', '1940', '1950', '1960', '1970', '1980', '1990', '2000', '2010', '2020'],
//     datasets: [{
//             label: 'Revenue',
//             backgroundColor: "rgba(54, 162, 235, 0.5)",
//             borderColor: "rgb(54, 162, 235)",
//             borderWidth: 1,
//             data: ["20", "30", "40", "50", "60", "70", "80",'90','100','110','120','130','140'],
//         }, {
//             label: 'Spending',
//             backgroundColor: "rgba(244, 67, 54, 0.5)",
//             borderColor: "rgb(255, 99, 132)",
//             borderWidth: 1,
//             data: ["5", "15", "25", "35", "45", "50", "85","100","130","150","180",'200'],
//     }]
// },
// options: {
//     animation: {
//         duration: 2000,
//         easing: 'easeOutQuart',
//     },
//     plugins: {
//         legend: {
//             display: true,
//             position: 'top',
//         },
//         title: {
//             display: true,
//             text: 'Revenue in Trillions $',
//             position: 'left',
//         },
//     },
// }
// });

// // new
// var myChart3 = new Chart(chart3, {
// type: 'pie',
// data: {
//     labels: ["Upper Tax Brackets","Middle Tax Brackets","Lower Tax Brackets"],
//     datasets: [{
//         data: ["60", "25", "15"],
//         backgroundColor: ["#009688", "#795548", "#673AB7", "#2196F3", "#6da252"],
//         hoverOffset: 4
//     }]
// },
// options: {
//     animation: {
//         duration: 2000,
//         easing: 'easeOutQuart',
//     },
//     plugins: {
//         legend: {
//             display: true,
//             position: 'right',
//         },
//         title: {
//             display: false,
//             text: 'Total Value',
//             position: 'left',
//         },
//     },
// }
// });


// // new
// var myChart4 = new Chart(chart4, {
// type: 'bar',
// data: {
//     labels: ['1910', '1920', '1930', '1940', '1950', '1960', '1970', '1980', '1990', '2000', '2010', '2020'],
//     datasets: [{
//             label: 'Income',
//             backgroundColor: "rgba(0, 150, 136, .5)",
//             borderColor: "rgb(0, 150, 136)",
//             borderWidth: 1,
//             data: ["20", "30", "40", "50", "60", "70", "80"],
//         }, {
//             label: 'Liabilites',
//             backgroundColor: "rgba(76, 175, 80, .5)",
//             borderColor: "rgba(76, 175, 80)",
//             borderWidth: 1,
//             data: ["2", "5", "15", "25", "35", "25", "15"],
//     }]
// },
// options: {
//     animation: {
//         duration: 2000,
//         easing: 'easeOutQuart',
//     },
//     scales: {
//             x: {
//                 stacked: true,
//             },
//             y: {
//                 stacked: true,
//             }
//         },
//     plugins: {
//         legend: {
//             display: true,
//             position: 'top',
//         },
//         title: {
//             display: true,
//             text: 'Volume',
//             position: 'left',
//         },
//     },
// }
// });




function switchQuestion(this_q, next_q, answer){
    countPoints(this_q,next_q, answer);

    
    $("#q"+this_q).hide();
    $("#q"+next_q).show();
}









function countPoints(this_q, next_q, answer){
    if(this_q == 1 && next_q == 2 && answer === true){ 
        savingsBalance += 50000;
        savings = savingsBalance.toString();
        addData(myChart5, "Child", '0');
        addData(myChart5,"Teens", savings);
        

        
    }

    else if((this_q == 1 && answer === false)){
        savingsBalance += 10000;
        savings = savingsBalance.toString();
        addData(myChart5, "Child", '0');
        addData(myChart5, "Teens", savings);
    }

    else if((this_q == 2 && answer === true)){
        savingsBalance += 1000000;
        savings = savingsBalance.toString();
        
        addData(myChart5, "20s", savings);
    }

    else if(this_q == 2 && answer === false){
        savingsBalance += 500000;
        savings = savingsBalance.toString();
        addData(myChart5, "20s", savings);
    }

    else if(this_q == 3 && answer === true){
        savingsBalance -= 200000;
        savings = savingsBalance.toString();
        addData(myChart5, "20s", savings);
    }

    else if(this_q == 3 && answer === false){
        savingsBalance += 200000;
        savings = savingsBalance.toString();
        addData(myChart5, "20s", savings);
    }

    else if(this_q == 4 && next_q== 5 && answer ==true){
        let myOccupation = document.getElementById("occupation");
        myOccupation = occupation.options[occupation.selectedIndex].text;
        console.log("occupationSaved", myOccupation);
        if(myOccupation == "Finance, Accounting, Business"){
            savingsBalance += 1000000;
            savings = savingsBalance.toString();
            addData(myChart5,"30s",savings);
        }
        if(myOccupation == "Healthcare"){
            savingsBalance += 800000;
            savings = savingsBalance.toString();
            addData(myChart5,"30s",savings);

        }if(myOccupation == "Engineering or Technology"){
            savingsBalance += 1500000;
            savings = savingsBalance.toString();
            addData(myChart5,"30s",savings);

        }if(myOccupation == "Social Services"){
            savingsBalance += 200000;
            savings = savingsBalance.toString();
            addData(myChart5,"30s",savings);
        }
        if(myOccupation == "Art and Design"){
            savingsBalance += 100000;
            savings = savingsBalance.toString();
            addData(myChart5,"30s",savings);

        }if(myOccupation == "Tradework"){
            savingsBalance += 750000;
            savings = savingsBalance.toString();
            addData(myChart5,"30s",savings);

        }if(myOccupation == "Media"){
            savingsBalance += 800000;
            savings = savingsBalance.toString();
            addData(myChart5,"30s",savings);
        }
        if(myOccupation == "Education"){
            savingsBalance += 400000;
            savings = savingsBalance.toString();
            addData(myChart5,"30s",savings);
        }
    }

    else if(this_q == 5){
        if(answer == true){
            savingsBalance += 1000000;
            savings = savingsBalance.toString();
            addData(myChart5,"40s",savings);
        }
        
        if(answer == false){
            savingsBalance += 20000;
            savings = savingsBalance.toString();
            addData(myChart5,"40s",savings);
        }
    }

    else if(this_q == 6){
        if(answer == true){
            savingsBalance += 2000000; 
            savings = savingsBalance.toString();
            addData(myChart5,"50s",savings);
        }

        if(answer == false){
            savingsBalance -= 1000000;
            savings = savingsBalance.toString();
            addData(myChart5,"50",savings);
        }
    }

    else if(this_q == 7){
        if(answer == true){
            savingsBalance += 1000000; 
            savings = savingsBalance.toString();
            addData(myChart5,"60s",savings);
            weighBalance();
        }

        if(answer == false){
            savingsBalance -= 400000;
            savings = savingsBalance.toString();
            addData(myChart5,"60s",savings);
            weighBalance();
        }
    }
}

function weighBalance(){
    countPoints();
    if(savingsBalance < 2500000){
        $("#life-working").show();
        $("#yes7").hide();
        $("#no7").hide();
    }
    
    if(savingsBalance >=2500000){
        $("#retirement").show();
        $("#yes7").hide();
        $("#no7").hide();
    }
}