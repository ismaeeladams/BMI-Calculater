function calcBmi() {
  let weight = document.querySelector("#weight").value;
  let height = document.querySelector("#height").value;
  let result = (weight / Math.pow(height / 100, 2)).toFixed(1);

  document.querySelector("#result").innerHTML = result;

  if (result < 18.5) {
    category = "Underweight";
    // result.style.color = "#FFC44D";
  } else if (result >= 18.5 && result <= 24.9) {
    category = "Normal Weight";
    // result.style.color = "#0BE881";
  } else if (result >= 25 && result <= 29.9) {
    category = "Overweight";
    // result.style.color = "#FF884D";
  } else {
    category = "Obese ";
    // result.style.color = "#FF5E57";
  }
  document.getElementById("category").innerHTML= category;
}
