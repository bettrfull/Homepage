//test for touch events support and if not supported, attach .no-touch class to the HTML tag.
 

if (!("ontouchstart" in document.documentElement)) {
document.documentElement.className += " no-touch";
}


document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[target="_blank"]');

  links.forEach(link => {
    link.addEventListener('click', function() {
      // Remove focus from the clicked link after a short delay
      // to allow the new tab to open before removing focus
      setTimeout(() => {
        this.blur(); // Removes focus from the element
      }, 100); 
    });
  });
});