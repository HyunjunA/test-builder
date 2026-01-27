document.addEventListener('DOMContentLoaded', () => {
  const unitToggle = document.getElementById('unitToggle');
  const metricInputs = document.getElementById('metricInputs');
  const imperialInputs = document.getElementById('imperialInputs');
  const calcBtn = document.getElementById('calcBtn');
  const bmiResult = document.getElementById('bmiResult');
  const bmiValue = document.getElementById('bmiValue');
  const bmiCategory = document.getElementById('bmiCategory');
  const bmiRange = document.getElementById('bmiRange');
  const bmiIndicator = document.getElementById('bmiIndicator');

  let isMetric = true;

  unitToggle.addEventListener('click', () => {
    isMetric = !isMetric;
    unitToggle.textContent = isMetric ? 'Metric' : 'Imperial';
    metricInputs.style.display = isMetric ? '' : 'none';
    imperialInputs.style.display = isMetric ? 'none' : '';
    bmiResult.style.display = 'none';
  });

  calcBtn.addEventListener('click', () => {
    let heightM, weightKg;

    if (isMetric) {
      const cm = parseFloat(document.getElementById('heightCm').value);
      weightKg = parseFloat(document.getElementById('weightKg').value);
      if (!cm || !weightKg || cm <= 0 || weightKg <= 0) {
        alert('Please enter valid height and weight values.');
        return;
      }
      heightM = cm / 100;
    } else {
      const ft = parseFloat(document.getElementById('heightFt').value) || 0;
      const inches = parseFloat(document.getElementById('heightIn').value) || 0;
      const lbs = parseFloat(document.getElementById('weightLbs').value);
      const totalInches = ft * 12 + inches;
      if (totalInches <= 0 || !lbs || lbs <= 0) {
        alert('Please enter valid height and weight values.');
        return;
      }
      heightM = totalInches * 0.0254;
      weightKg = lbs * 0.453592;
    }

    const bmi = weightKg / (heightM * heightM);
    const bmiRounded = Math.round(bmi * 10) / 10;

    bmiValue.textContent = bmiRounded;
    bmiValue.style.color = getCategoryColor(bmi);

    let category = '';
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi < 25) {
      category = 'Normal weight';
    } else if (bmi < 30) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }
    bmiCategory.textContent = category;
    bmiCategory.style.color = getCategoryColor(bmi);

    // Calculate healthy weight range for their height
    const lowWeight = (18.5 * heightM * heightM).toFixed(1);
    const highWeight = (24.9 * heightM * heightM).toFixed(1);
    if (isMetric) {
      bmiRange.textContent = 'Healthy weight range for your height: ' + lowWeight + ' kg - ' + highWeight + ' kg';
    } else {
      const lowLbs = (lowWeight * 2.20462).toFixed(1);
      const highLbs = (highWeight * 2.20462).toFixed(1);
      bmiRange.textContent = 'Healthy weight range for your height: ' + lowLbs + ' lbs - ' + highLbs + ' lbs';
    }

    // Position indicator on scale (BMI 10-40 mapped to 0-100%)
    const pct = Math.min(100, Math.max(0, ((bmi - 10) / 30) * 100));
    bmiIndicator.style.left = 'calc(' + pct + '% - 2px)';

    bmiResult.style.display = '';
  });

  function getCategoryColor(bmi) {
    if (bmi < 18.5) return '#3498db';
    if (bmi < 25) return '#2ecc71';
    if (bmi < 30) return '#f39c12';
    return '#e74c3c';
  }
});
