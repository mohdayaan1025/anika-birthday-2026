document.addEventListener("DOMContentLoaded", () => {

    /* ── Intersection Observer for fade-in ── */
    const faders = document.querySelectorAll('.fade-text');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.2, rootMargin: "0px 0px -30px 0px" });

    faders.forEach(el => observer.observe(el));

    // Immediately reveal hero section
    setTimeout(() => {
        document.querySelectorAll('#sec-hero .fade-text').forEach(el => el.classList.add('visible'));
    }, 300);

    /* ── Floating Hearts ── */
    const heartsContainer = document.getElementById('hearts');
    for (let i = 0; i < 18; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        const size = Math.random() * 16 + 12;
        heart.style.width = size + 'px';
        heart.style.height = size + 'px';
        heart.style.animationDuration = (Math.random() * 12 + 12) + 's';
        heart.style.animationDelay = Math.random() * 14 + 's';
        heartsContainer.appendChild(heart);
    }

    /* ── Falling Rose Petals ── */
    const petalsContainer = document.getElementById('petals');
    for (let i = 0; i < 25; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.left = Math.random() * 100 + 'vw';
        const size = Math.random() * 8 + 10;
        petal.style.width = size + 'px';
        petal.style.height = (size * 1.3) + 'px';
        petal.style.animationDuration = (Math.random() * 10 + 14) + 's';
        petal.style.animationDelay = Math.random() * 16 + 's';
        petal.style.borderRadius = `${50 + Math.random()*30}% ${Math.random()*30}% ${50 + Math.random()*30}% ${50 + Math.random()*30}%`;
        petalsContainer.appendChild(petal);
    }
});
