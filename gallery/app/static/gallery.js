const photoItems = document.querySelectorAll('.photo-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

photoItems.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

function closeLightbox() {
  lightbox.style.display = 'none';
}

function filterImages() {
  const query = document.getElementById('search').value.toLowerCase();
  const photoItems = document.querySelectorAll('.photo-item');

  photoItems.forEach(item => {
    const title = item.getAttribute('data-title').toLowerCase();
    if (title.includes(query)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
