# JSColorCustomizer
# Project Title

Choose to Change the Background Color

## Description

This project demonstrates a simple web page where users can choose a color from a dropdown menu, and the background color of a container changes accordingly. The project uses HTML, CSS, and JavaScript for the implementation.

## Project Structure

- **index.html**: Contains the HTML structure of the web page.
- **index.css**: Defines the styles for the web page, including the container appearance.
- **index.js**: Implements the JavaScript functionality to change the background color based on the selected option.

## Usage

1. Open the `index.html` file in a web browser.
2. The page displays a container with a heading, a dropdown menu, and a paragraph.
3. Select a color from the dropdown menu.
4. The background color of the container changes instantly to the selected color.

## Styles

The project uses a CSS class named `.container` to style the container. Key styles include:

- Height: Auto
- Width: 50vw
- Border: 10px solid black
- Transition: Background-color with a duration of 0.3s and ease timing function
- Border-radius: 5px
- Margin: 50px
- Padding: 20px
- Initial Background-color: Aqua

## JavaScript Functionality

The JavaScript file (`index.js`) listens for the `change` event on the dropdown (`selecting`) element. When a new option is selected, it dynamically changes the background color of the container based on the selected value.

```javascript
let selectElement = document.getElementById('selecting');

selectElement.addEventListener('change', function() {
  document.getElementById('container').style.backgroundColor = selectElement.value;
});
