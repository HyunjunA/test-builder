# Blueprint for Lottery Number Drawing Site

## Overview
This document outlines the current state and planned features for a simple web-based lottery number drawing application. The application allows users to specify a maximum number and the quantity of numbers to draw, then generates a unique set of random numbers.

## Current Features Outline

### index.html
*   **Title**: The page title is "Lotto Number Picker".
*   **Max Number Input**: An input field (type `number`) where users can enter the maximum possible number for the lottery draw (e.g., 45).
*   **Number Count Input**: An input field (type `number`) where users can specify how many numbers they want to draw (e.g., 6).
*   **Draw Button**: A button that, when clicked, triggers the lottery number generation process.
*   **Number Display Area**: A designated section (e.g., a `div` or `ul`) where the generated lottery numbers will be displayed.

### style.css
*   **Basic Styling**: Provides foundational styling for the page elements to ensure a clean and readable layout. This includes:
    *   Centering the main content.
    *   Styling for input fields and buttons.
    *   Styling for the displayed lottery numbers.

## Planned Changes / Next Steps

### lotto.js (New File)
*   **Lottery Logic Implementation**: This new JavaScript file will contain the core logic for the lottery number generation.
    *   **Random Number Generation**: Functionality to generate unique random numbers within a specified range.
    *   **Input Validation**: Logic to validate user inputs (e.g., ensuring max number is greater than count, inputs are positive numbers).
    *   **Event Handling**: Attach event listeners to the "Draw" button to initiate the number generation and display.
    *   **Display Update**: Update the `index.html`'s number display area with the generated numbers.

### index.html (Updates)
*   **Link `lotto.js`**: Add a `<script>` tag to link the new `lotto.js` file.
*   **Remove Old Scripts/Elements**: Remove any previous placeholder JavaScript (`main.js`) and associated elements no longer needed.

### style.css (Updates)
*   **Refinement**: Further styling adjustments to enhance the user interface and experience, ensuring responsiveness and visual appeal.