const headlineInput = document.getElementById('headline-input');
const updateButton = document.getElementById('update-btn');
const ctaHeadline = document.getElementById('cta-headline');

updateButton.addEventListener('click', function() {
    const newText = headlineInput.value.trim();
    
    if (newText !== "") {
        ctaHeadline.textContent = newText;
        headlineInput.value = "";
    }
});