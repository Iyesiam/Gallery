# Photo Gallery

This project demonstrates an interactive photo gallery using HTML, CSS, and JavaScript. 
The gallery is fully responsive and provides a seamless user experience with hover effects and a modal popup for detailed information.
# Features
1.Display a series of photos in a responsive gallery layout.
2.Hover effect on photos with grayscale and blur.
3.Click on photos to view more detailed information in a modal popup.
4.Modal popup with title, description, and an image.
5.Responsive design for various screen sizes.

# Technologies Used
1.HTML
2.CSS
3.JavaScript

# Setup Instructions
## Prerequisites
1.A modern web browser (e.g., Google Chrome, Firefox, Edge).
2.Basic knowledge of HTML, CSS, and JavaScript.

# Steps
1.Clone the repository:
## Getting Started
1. **Clone the repository** to your local machine:

    ```sh
    git clone https://github.com/yourusername/photo-gallery.git
    cd photo-gallery
    ```

2. **Open the project**:
    - Open the `index.html` file in your preferred web browser to view the project.

## Usage
Upon loading the application, you'll see a gallery of photos. Hovering over a photo will apply a grayscale and blur effect, revealing additional information such as the title and location. Clicking on a photo will open a modal popup with more detailed information and a larger view of the photo. The modal can be closed by clicking the close button or clicking outside the modal.

## Approach

### HTML Structure
The HTML structure includes a gallery with photos, each containing a caption with a title, location, and a "Know more" link. Additionally, a modal structure is included for displaying detailed information when a photo is clicked.

### CSS Styling
The CSS styles the gallery and modal. Key points include:
- A responsive gallery layout using flexbox.
- Hover effects on photos with grayscale and blur.
- Modal styling with a maximum height to prevent scrolling.
- Responsive adjustments for smaller screens.

### JavaScript Interactivity
JavaScript is used to add interactivity to the gallery. Key points include:
- Event listeners for photo clicks to display the modal.
- Functionality to populate the modal with appropriate photo information.
- Event listeners to close the modal.