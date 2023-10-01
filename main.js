var heightField = document.getElementById("height");
var weightField = document.getElementById("weight");
var btnElement = document.getElementById("btn");
var conclusion = document.getElementById("conclusion");
var result = document.getElementsByClassName("result");
var information = document.getElementsByClassName("bmi-explaination");
var height;
var weight;
var BMI;
var finalState;
for (let i = 0; i < information.length; i++) {
  switch (i) {
    case 0:
      information[i].style.backgroundColor = "#3498db";
      break;
    case 1:
      information[i].style.backgroundColor = "#2ecc71";
      break;
    case 2:
      information[i].style.backgroundColor = "#f1c40f";
      break;
    case 3:
      information[i].style.backgroundColor = "#e67e22";
      break;
    case 4:
      information[i].style.backgroundColor = "#e74c3c";
      break;
  }
}

heightField.addEventListener("change", (e) => {
  height = e.target.value / 100;
  console.log(height, typeof height);
});
weightField.addEventListener("change", (e) => {
  weight = e.target.value;
  console.log(weight, typeof weight);
});
btnElement.addEventListener("click", () => {
  if (weightField.value.trim() === "" || heightField.value.trim() === "") {
    conclusion.style.visibility = "visible";
    result[0].value = "";
    conclusion.innerHTML = "You should enter your height and weight";
    weightField.innerHTML = "";
    heightField.innerHTML = "";
    return;
  }
  BMI = weight / (height * height);
  console.log(BMI, typeof BMI);
  result[0].value = BMI.toFixed(2);
  conclusion.style.visibility = "visible";
  if (BMI.toFixed(2) < 18.5) {
    finalState = "UNERWIEGHT";
  } else if (BMI.toFixed(2) > 18.5 && BMI.toFixed(2) < 24.9) {
    finalState = "NORMAL";
  } else if (BMI.toFixed(2) > 25 && BMI.toFixed(2) < 29.9) {
    finalState = "OVERWEIGHT";
  } else if (BMI.toFixed(2) > 30 && BMI.toFixed(2) < 34.9) {
    finalState = "OBESE";
  } else {
    finalState = "EXTREMELY OBESE";
  }
  conclusion.innerHTML =
    "Your BMI is " + BMI.toFixed(2) + " Which is considered " + finalState;
});
