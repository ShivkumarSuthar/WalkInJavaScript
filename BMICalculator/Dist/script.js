let inch = document.querySelector("#Inch");
let kg = document.querySelector("#kg");

let btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  let HIM = inch.value * 0.0254;
  let kgs = kg.value;
  let bmi = (kgs / Math.pow(HIM, 2)).toFixed(2);

  let under=18.6;
  let normal=24.9;

  if (HIM == "" || kgs == "") {
    window.alert("Please fill details before proceed!, thanks");
  }
  else{
      if(bmi<=under){
        window.alert(`Your BMI Score is Under weight and value is ${bmi}`);
      }
      else if(bmi>under){
        window.alert(`Your BMI Score is Normal weight and value is ${bmi}`);
      }
      else{
        window.alert(`Your BMI Score is Over weight and value is ${bmi}`);
    }
  }   
  }
 
);