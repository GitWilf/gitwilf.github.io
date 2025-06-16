const totalImages = 12;
const gallery = document.querySelector('.gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('closeBtn');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
document.querySelectorAll('.video-embed').forEach(video => {
  video.setAttribute('controls', '');
});


let currentIndex = 0;

for (let i = 1; i <= totalImages; i++) {
  const img = document.createElement('img');
  img.src = `photos/p (${i}).jpg`;
  img.alt = `Photo ${i}`;
  img.classList.add('thumbnail');
  img.dataset.index = i;
  gallery.appendChild(img);

  img.addEventListener('click', () => {
    currentIndex = i;
    showLightbox(i);
  });
}

function showLightbox(index) {
  lightboxImg.src = `photos/p (${index}).jpg`;
  lightbox.classList.remove('hidden');
}

function closeLightbox() {
  lightbox.classList.add('hidden');
}

function showNext() {
  currentIndex = (currentIndex % totalImages) + 1;
  showLightbox(currentIndex);
}

function showPrev() {
  currentIndex = (currentIndex - 2 + totalImages) % totalImages + 1;
  showLightbox(currentIndex);
}

closeBtn.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

// Optional: close on background click
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});