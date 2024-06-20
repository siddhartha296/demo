document.getElementById('prankButton').addEventListener('click', function() {
    let image = document.getElementById('prankImage');
    let text = document.getElementById('prankText');

    image.style.display = 'block';
    text.style.display = 'none'; // Hide text initially

    // Initial position at the center of the screen
    image.style.position = 'fixed';
    image.style.left = '50%';
    image.style.top = '50%';
    image.style.transform = 'translate(-50%, -50%) scale(0)';

    // Function to animate popping effect
    function popImage() {
        let scale = 0;
        let popInterval = setInterval(function() {
            scale += 0.1; // Increase scale gradually
            image.style.transform = `translate(-50%, -50%) scale(${scale})`;

            if (scale >= 1) { // Fully pop up the image
                clearInterval(popInterval);
                // Show text after image animation completes
                text.style.display = 'block';
            }
        }, 50); // Adjust speed of popping effect as needed
    }

    // Trigger the pop animation
    popImage();
});
