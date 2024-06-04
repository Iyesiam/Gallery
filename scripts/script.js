document.addEventListener('DOMContentLoaded', () => {
    const photos = document.querySelectorAll('.photo');
    const modal = document.getElementById('photoModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const modalLocation = document.getElementById('modalLocation');
    const modalInfo = document.getElementById('modalInfo');
    const closeModal = document.querySelector('.close');

    photos.forEach(photo => {
        photo.addEventListener('click', () => {
            const imgSrc = photo.querySelector('img').src;
            const caption = photo.getAttribute('data-caption');
            const location = photo.getAttribute('data-location');
            const info = photo.getAttribute('data-info');

            modalImage.src = imgSrc;
            modalCaption.textContent = caption;
            modalLocation.textContent = location;
            modalInfo.textContent = info;
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
