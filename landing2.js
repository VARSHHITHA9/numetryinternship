function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to m
    const weight = parseFloat(document.getElementById("weight").value);
    
    const bmi = weight / (height * height);
    let bmiCategory = "";
  
    if (bmi < 18.5) {
      bmiCategory = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      bmiCategory = "Normal weight";
    } else if (bmi >= 24.9 && bmi < 29.9) {
      bmiCategory = "Overweight";
    } else {
      bmiCategory = "Obese";
    }
  
    const bmiResultElement = document.getElementById("bmi-result");
    bmiResultElement.textContent = `Your BMI: ${bmi.toFixed(2)} (${bmiCategory})`;
  
    // Change gym exercise tips based on BMI category
    const exerciseSection = document.getElementById("exercise-section");
    exerciseSection.innerHTML = ""; // Clear previous content
  
    if (bmiCategory === "Underweight") {
      exerciseSection.innerHTML = "<h2>Gym Exercise Tips for Underweight Individuals</h2><p>Focus on strength training exercises to build muscle mass.</p><p>Incorporate compound exercises like squats, deadlifts, and bench presses.</p>";
    } else if (bmiCategory === "Normal weight") {
      exerciseSection.innerHTML = "<h2>Gym Exercise Tips for Normal Weight Individuals</h2><p>Include a balanced mix of cardio and strength training exercises for overall fitness.</p><p>Consider activities like jogging, cycling, and weightlifting.</p>";
    } else if (bmiCategory === "Overweight") {
      exerciseSection.innerHTML = "<h2>Gym Exercise Tips for Overweight Individuals</h2><p>Focus on low-impact cardio exercises to burn calories without stressing joints.</p><p>Examples include swimming, walking, and using an elliptical machine.</p>";
    } else {
      exerciseSection.innerHTML = "<h2>Gym Exercise Tips for Obese Individuals</h2><p>Start with low-intensity exercises and gradually increase intensity.</p><p>Consult with a fitness trainer to create a safe and effective workout plan.</p>";
    }
  
    // Change yoga information based on BMI category
    const yogaSection = document.getElementById("yoga-section");
    yogaSection.innerHTML = ""; // Clear previous content
  
    if (bmiCategory === "Underweight") {
      yogaSection.innerHTML = "<h2>Yoga Information for Underweight Individuals</h2><p>Practice yoga poses that promote relaxation and stress reduction.</p><p>Focus on gentle stretches to improve flexibility and mobility.</p>";
    } else if (bmiCategory === "Normal weight") {
      yogaSection.innerHTML = "<h2>Yoga Information for Normal Weight Individuals</h2><p>Explore a variety of yoga styles, including Hatha, Vinyasa, and Ashtanga.</p><p>Find classes that suit your fitness level and goals.</p>";
    } else if (bmiCategory === "Overweight") {
      yogaSection.innerHTML = "<h2>Yoga Information for Overweight Individuals</h2><p>Practice yoga poses that emphasize strength, balance, and flexibility.</p><p>Consider modifications for poses to accommodate your body size and abilities.</p>";
    } else {
      yogaSection.innerHTML = "<h2>Yoga Information for Obese Individuals</h2><p>Start with gentle yoga practices to gradually build strength and flexibility.</p><p>Focus on breathing techniques to reduce stress and promote relaxation.</p>";
    }
  
    // Change nutrition diet plans based on BMI category
    const dietPlans = document.getElementById("diet-plans");
    dietPlans.innerHTML = ""; // Clear previous content
  
    if (bmiCategory === "Underweight") {
      dietPlans.innerHTML = "<li>High-calorie diet with a focus on healthy fats and proteins.</li>";
    } else if (bmiCategory === "Normal weight") {
      dietPlans.innerHTML = "<li>Balance of macronutrients (carbs, proteins, fats).</li>";
    } else if (bmiCategory === "Overweight") {
      dietPlans.innerHTML = "<li>Calorie deficit diet with emphasis on whole foods and portion control.</li>";
    } else {
      dietPlans.innerHTML = "<li>Low-calorie, high-fiber diet with reduced intake of sugars and fats.</li>";
    }
  }
  