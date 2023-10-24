document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.Berita img');

    images.forEach(image => {
        image.addEventListener('mouseover', function() {
            this.style.transition = 'transform 0.5s';
            this.style.transform = 'scale(1.1)'; // Gambar akan membesar 1.1 kali lipat
        });

        image.addEventListener('mouseout', function() {
            this.style.transition = 'transform 0.5s';
            this.style.transform = 'scale(1)'; // Kembali ke ukuran normal
        });
    });
});
