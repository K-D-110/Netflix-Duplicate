function createErrorBanner(text) {
  const errorBanner = document.createElement('div');
  errorBanner.classList.add('error-banner');
  errorBanner.textContent = text;

  const closeButton = document.createElement('button');
  closeButton.textContent = 'X';
  closeButton.classList.add('close-button');
  closeButton.addEventListener('click', () => {
    errorBanner.style.display = 'none';
  });

  // Append the close button to the error banner
  errorBanner.appendChild(closeButton);

  return errorBanner;
}
export default createErrorBanner
