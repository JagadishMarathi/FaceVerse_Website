// script.js
const form = document.getElementById('upload-form');
const progressBar = document.getElementById('progress-bar');
const originalImage = document.getElementById('original-image');
const imageInput = document.getElementById('image-upload');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  progressBar.style.width = '0%';
  progressBar.style.transition = 'width 0.4s';
  progressBar.style.width = '30%';

  // Show preview image
  const file = imageInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      originalImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  // Simulate API response
  setTimeout(() => {
    progressBar.style.width = '100%';
    document.getElementById('three-container').textContent = '3D Model Rendered (Replace with viewer)';
    document.getElementById('download-obj').href = '#';
    document.getElementById('download-jpg').href = '#';
  }, 2000);
});
