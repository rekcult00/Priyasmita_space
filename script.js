const titles = document.querySelectorAll('.blog-title');

titles.forEach(title => {
  title.addEventListener('click', () => {
    const content = title.nextElementSibling;
    content.style.display = (content.style.display === 'block') ? 'none' : 'block';
    <p style="text-align: center; font-family: 'Comic Neue', cursive;">🎧 Enjoy some tunes while browsing!</p>

  });
});
