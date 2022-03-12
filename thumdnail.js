let targetImage = document.querySelector(#'smart-image');
targetImage.addEventListener('click', function() {
  if (targetImage.classList.contain('small')) {
    targetImage.classList.remove('small');
  }
  else {
    targetImage.classList.add('small')
  }
})
