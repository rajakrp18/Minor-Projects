🎨 Color Scheme Switcher
A fun and interactive web app that lets users change the background color of the page by clicking on different color buttons. Built using HTML, CSS, and JavaScript, it’s a great beginner-friendly project for learning DOM manipulation and event handling.

📸 Preview

🔧 Features
✅ Click a color to instantly change the background
✅ Visual color buttons for user-friendly experience
✅ Uses JavaScript event listeners to detect user actions
✅ Minimal and clean layout
✅ Easily extendable with more colors

🚀 Getting Started
1. Clone or Download the Repository
bash
Copy
Edit
git clone https://github.com/your-username/color-scheme-switcher.git
cd color-scheme-switcher
2. Open index.html in your browser
No setup required!

📂 Project Structure
bash
Copy
Edit
color-scheme-switcher/
├── index.html       # HTML structure with clickable buttons
├── style.css        # Button layout and styling
├── script.js        # JavaScript for background color change
└── README.md        # Project documentation
💡 How It Works
The page contains colored <span> elements styled like buttons.

When a user clicks on a button, an event listener captures the event.

JavaScript changes the body background color based on the button's id.

🧠 Sample JS Logic:
js
Copy
Edit
button.addEventListener('click', function (event) {
  body.style.backgroundColor = event.target.id;
});
🌈 Supported Colors
grey

green

yellow

blue

purple (default fallback)

🛠 Technologies Used
HTML5

CSS3

JavaScript (Vanilla)

✨ Future Ideas
 Add support for HEX or RGB input

 Add "Reset to default" button

 Add smooth transitions between color changes

 Add tooltips or color name labels

🙌 Author
Made with ❤️ by Raj Poddar
📧 Email --> rajpoddar8907@gmail.com| 🌐 Portfolio --> https://rajakrp18.github.io/PortfolioMine/ | 💼 LinkedIn --> https://www.linkedin.com/in/raj-poddar-23a0841bb/

