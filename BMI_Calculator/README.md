🧮 BMI Calculator Web App
A responsive and interactive Body Mass Index (BMI) calculator built using HTML, CSS, and JavaScript. This project allows users to input their name, age, weight, and height, and calculates the BMI value with validation and instant feedback.

📸 Preview

🔧 Features
✅ Real-time input validation
✅ Prevents invalid entries (empty fields, non-numeric values)
✅ BMI calculation based on weight (kg) and height (cm)
✅ Displays appropriate health category
✅ Reset button to clear all fields and result
✅ Friendly messages with user’s name

🚀 Getting Started
1. Clone or Download the Repository
bash
Copy
Edit
git clone https://github.com/your-username/bmi-calculator.git
cd bmi-calculator
2. Open index.html in your browser
No build tools or server required — it's fully client-side.

📂 Project Structure
graphql
Copy
Edit
bmi-calculator/
├── index.html       # Main UI structure
├── style.css        # Styling for layout and buttons
├── script.js        # BMI logic and validation
└── README.md        # Project documentation
💡 How It Works
User Input: Enter name, age, weight, and height.

Validation: JavaScript checks:

Name must be alphabetic

Age, weight, height must be valid numbers

BMI Calculation:

js
Copy
Edit
BMI = weight / ((height * height) / 10000)
Result Display: Shows the BMI and category.

🎨 Tech Used
HTML5

CSS3

JavaScript (Vanilla)

🧠 Example Output
Hello Raj, your BMI is 22.54.
You are in the Normal Weight range.

📈 BMI Categories
Category	BMI Range
Underweight	less than 18.6
Normal weight	18.6 – 24.9
Overweight	25 and above

🔥 Future Improvements
 Store BMI results in localStorage

 Add graphical BMI meter

 Add support for imperial units (lbs, inches)

 Show health suggestions based on BMI

🙌 Author
Made with ❤️ by Raj Poddar
📧 Email --> rajpoddar8907@gmail.com| 🌐 Portfolio --> https://rajakrp18.github.io/PortfolioMine/ | 💼 LinkedIn --> https://www.linkedin.com/in/raj-poddar-23a0841bb/

