
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
        savings += 50000;
        // chart.addData("#savingsaccnt", savings, data)
    }

    else if(($(this).data("question") == "1" && $(".no"))){
        savings += 10000;
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

// function addData(chart, label, data) {
//     $("#savingsaccnt").data.labels.push(label);
//     chart.data.datasets.forEach((dataset) => {
//         dataset.data.push(data);
//     });
//     chart.update();
// }
