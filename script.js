function BMI(weight , height) {
     return weight / (height * height);
    
}

console.log(BMI(50,1.5))

function Status(bmi) {
    if(bmi < 18.5){
        return "لديك نقص في الوزن" ; 
    } else if(bmi >= 18.5 && bmi < 25){
        return "وزنك صحي" ;
    } else if(bmt >= 25) {
        return "لديك زيادة في الوزن" ;
    }

   
}
function calculate() {
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
    
    let bmiResult = BMI(weight,height)

    let desc = Status(bmiResult)

    document.getElementById("result").innerText = bmiResult + ":" + desc




}
