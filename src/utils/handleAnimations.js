function handleAnimations() {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('picture-animation');
            }
          });
    });
  
    const allPictures = document.querySelectorAll('.individual-proj-component .picture')

    allPictures.forEach(picture => {
        observer.observe(picture);
    });
}

export default handleAnimations;