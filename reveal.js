const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('image-animation');
      }
    });
  });
  
  const viewbox = document.querySelectorAll('section');
  viewbox.forEach(image => {
    observer.observe(image);
  });