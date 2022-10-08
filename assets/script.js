let button = document.getElementById('btn');

button.addEventListener('click', () => {
  const weight = parseInt(document.getElementById('w').value);
  const height = parseInt(document.getElementById('h').value);
  const result = document.getElementById('result');
  const bmi = (weight / ((height * height) / 10000)).toFixed(1);
  if (bmi < 18.5) {
    result.innerHTML = 'Your BMI is ' + bmi + ' which mean Your ar Underweight';
  } else if (bmi > 18.5 && bmi < 24.9) {
    result.innerHTML = 'Your BMI is ' + bmi + ' which mean Your ar Normal';
  } else if (bmi > 25 && bmi < 29.9) {
    result.innerHTML = 'Your BMI is ' + bmi + ' which mean Your ar Overweight';
  } else if (bmi > 30) {
    result.innerHTML = 'Your BMI is ' + bmi + ' which mean Your ar Obesity';
  }
});
