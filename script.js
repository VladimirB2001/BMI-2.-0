var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.getElementById(".comment");

modalContent = document.getElementById(".modal-content");
modalText = document.getElementById("#modaText");
var modal = document.getElementById("myModal");
var spam = document.getElementById("close")[0];


function calculate(){

    if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
       modal.style.display ="block";
       modal.textContent.innerHTML = 'All fields are required';

}else{
    countBmi();
}
   
}


function countBmi(){
    var p =[age.value, height.value, weight.value];
    if(male.checked){
        p.push("male");
    }else if(female.checked){
        p.push("female");
}

var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);

var result = '';
if(bmi<18.5){
    result = 'Underweight';
}else if(18.5<bmi&&bmi<24.9){
    result = 'Healty';
}else if(25<bmi&&bmi<=29.9){
    result = 'Overheight';
}else if(30<=bmi&&bmi<34.9){
    result = 'Obese';
} else if (35<bmi){
    result = 'Extremely obesed';
}



resultArea.style.display = "block";
document.querySelector(".comment").innerHTML `You are <span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML = bmi.toFixed(2);

}






span.onclick = function() {
    modal.style.display = "none";
 }


 window.onclick = function(event) { 
    if(event.target == modal ) {
        modal.style.display = "none";
    }
} 