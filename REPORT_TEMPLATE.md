# Personal Assignment 1 Report Template

## 1. Project Overview

**Project Name:**  
Hydration Balance Calculator

**What does your calculator do?**  
This tool calculates the optimal daily water intake based on a user's body weight and physical activity levels. It solves the problem of "one-size-fits-all" hydration advice by providing a personalized requirement grounded in physiological metrics.


---

## 2. Inputs

List and explain all inputs you used.

| Input Name | Unit | What it Represents |
|---|---|---|
| User Name | String | Used for personalized UI output and greeting |
| Weight | kg | The primary biological factor for baseline fluid needs |
| Activity | minutes | Duration of exercise, representing variable fluid loss |

Explain in words:  
I chose these inputs because weight determines the body's volume and metabolic rate, while physical activity is the most significant variable causing dehydration. These are measurable, realistic data points essential for an accurate estimation.

---

## 3. Process (Calculation Logic)

**Formula or Calculation Used:**  
TotalWater=(Weight*0.3)+(Activity/60*0.5)

Example:  
BMI = weight / (height in meters)^2

**Steps:**
1. Fetch: Retrieve string values from HTML DOM elements.  
2. Convert: Use parseFloat() to transform strings into manageable numbers.
3. Base Calculation: Apply the 30ml per 1kg rule (Weight *0.03).
4. Activity Adjustment: Add 0.5 liters for every 60 minutes of activity.
5. Formatting: Use .toFixed(2) to ensure the output is readable (e.g., 2.45L instead of 2.45111...). 

---

## 4. Conditional Logic (if / else)

The program interprets the totalWater variable using three specific thresholds:

Example:

If < 1.5L: Categorized as "Low Requirement". Typically applies to sedentary individuals or those with lower body mass.  
If 1.5L – 3.0L: Categorized as "Standard Norm". This is the target range for the majority of healthy active adults.
If > 3.0L: Categorized as "High Requirement". A warning is issued regarding electrolyte balance for high-intensity athletes.

These ranges are based on WHO (World Health Organization) general guidelines adapted for active lifestyles.

---

## 5. Output

The program displays the following directly in the HTML:

- Personalized Message: "Hello, [Name]!" 
- Calculated Value: The exact volume of water in liters.
- Interpretation: A status badge describing the hydration category.
- UI State Change: The results box transitions from display: none to display: block only after a successful calculation.

---

## 6. Edge Cases / Unusual Inputs

- Empty Input: The if (!name || isNaN(weight) || isNaN(activity)) check triggers an alert and halts the process.
- Zero Values: If the user enters 0 for weight, the result will be 0. While mathematically correct, it is physiologically impossible; future versions should include a minimum weight threshold.
- Extreme Inputs: High activity numbers (e.g., 1440 minutes) will result in massive water requirements. The logic trusts the user's input but classifies it correctly as "High Requirement."

---

## 7. Optional Features (If You Added Any)

Examples:
- Validation Alerts: Prevents the script from breaking when encountering non-numeric data.
- Dynamic CSS: The results are styled with a status badge that visually separates the interpretation from the raw data. 
- UI Persistence: The result container is hidden by default to keep the interface clean. 
---

## 8. How to Run the Project

1. Clone or download the repository.
2. Open index.html in any modern web browser (Chrome, Firefox, Safari).  
3. Enter your name, weight, and daily activity time.
4. Click the "Calculate" button to view the results.  

---

## 9. AI Usage (If Used)

Did you use AI tools?  
Yes

If yes, explain briefly:
- I used AI to generate the initial CSS layout and to help structure the report template.
- I manually adjusted the hydration formula to include the activity coefficient, as standard AI templates often only consider weight.
- I fully understand the logic behind DOM manipulation and the conditional branching used in the script. 

---

## 10. Reflection

Through this assignment, I finally began to understand code and commands. I figured out how HTML, JavaScript, and CSS work and learned how to rearrange or create new commands and distinguish between them. I now understand code structure and the meaning behind symbols like /, ;, ., &, and ||.
I also learned how to work with GitHub and notebooks, including how to access their advanced versions. It was fun playing around with buttons and CSS design. During the process, I used AI to research, understand, and write code. I realized how crucial every single dot and semicolon is. At first, code seemed difficult to grasp, but after looking into how everything interacts, I realized it’s actually a quite simple, yet unique language.
