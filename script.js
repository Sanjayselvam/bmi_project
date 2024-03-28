// selecting height-input,weight-input,calculate-bmi

var heightinput = document.getElementById("height-input")
var weightinput = document.getElementById("weight-input")
var calculatebmi = document.getElementById("calculate-bmi")
var result = document.querySelector(".result")

calculatebmi.addEventListener("click",function(event){
    event.preventDefault()

    var last = (weightinput.value)/((heightinput.value/100)**2)
    if(last<16){
        result.innerHTML = "<h2>You are in Severe Thickness</h2>"
    }

    else if(last==16 || last==17){
        result.innerHTML = "<h2>You are in Moderate Thickness</h2>"
    }

    else if(last>17 && last<=18.5){
        result.innerHTML = "<h2>You are in Mild Thickness</h2>"
    }

    else if(last>18.5 && last<=25){
        result.innerHTML = "<h2>You are Normal</h2>"
    }

    else if(last>25 && last<=30){
        result.innerHTML = "<h2>You are Overweight</h2>"
    }

    else if(last>30 && last<=35){
        result.innerHTML = "<h2>You are in Obese Class I</h2>"
    }

    else if(last>35 && last<=40){
        result.innerHTML = "<h2>You are in Obese Class II</h2>"
    }

    else if(last>40){
        result.innerHTML = "<h2>You are in Obese Class III</h2>"
    }
})