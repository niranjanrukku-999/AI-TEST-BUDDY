# AI Test Buddy

A simple web app that generates test cases from a requirement you enter.

## Features
- Enter a requirement in the text box
- Click the button to generate a list of test cases
- Shows a message if the input is empty

## Tech Stack
- HTML
- CSS
- JavaScript

## Project Structure
- `index.html` – page layout
- `style.css` – styling
- `script.js` – test case generation logic
- `DEMO.mp4` – demo video

## How to Run
1. Download or clone the repository
2. Open `index.html` in your browser
3. Type a requirement and click **Generate**

## How It Works
`generateTest()` reads the requirement, checks it isn't empty, and displays a list of basic test cases (valid input, invalid input, empty input, expected result).

## Future Improvements
- Connect to an AI API for smarter, requirement-specific test cases
- Add export to PDF/Excel
