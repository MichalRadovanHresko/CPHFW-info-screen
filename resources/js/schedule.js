const scheduleBrands = {
    "marquee": [
        "Filippa K","Aiayu","Munthe","Baum und Pferdgarten","Bonnetje",
        "Berner Kühl","Cecile Bahnsen","Henrik Vibskov","The Royal Danish Academy"
    ],
    "marquee-2": [
        "Forza Collective","66°North","Kamo","OpéraSport","Marimekko",
        "Kettel Atelier","Nicklas Skovgaard","Gestuz","The Garment","Sunflower"
    ],
    "marquee-3": [
        "Han Kjøbenhavn","Herskind","Deadwood","Anne Sofie Madsen","Martin Quad",
        "TG Botanical","Stem","Rotate","Freya Dalsjø","Rave Review"
    ],
    "marquee-4": [
        "Skall Studio","Fine Chaos","Rabens Saloner","Taus","P.L.N.","Rolf Ekroth",
        "Swedish School of Textiles","Iamisigo","Anne Sofie Madsen","Cmmn Swdn"
    ]
};

function createMarquee(id, brands) {
    const marquee = document.getElementById(id);

    // Marquee size doubles container size for smooth scrolling
    function populateMarquee() {
        marquee.innerHTML = ''; //reset content
        let totalWidth = 0;
        while (totalWidth < marquee.offsetWidth * 2) {
            brands.forEach(brand => {
                const span = document.createElement("span");
                span.textContent = brand;
                marquee.appendChild(span);
            });
            totalWidth = marquee.scrollWidth;
        }
}
    // total width to animate
    function animateMarquee() {
        const contentWidth = marquee.scrollWidth / 2;
        marquee.style.setProperty('--marquee-translate', `-${contentWidth}px`);
        const duration = contentWidth / 50; // px/sec
        marquee.style.animation = `marquee ${duration}s linear infinite`;
        marquee.classList.add('animate');
    }

    populateMarquee();
    animateMarquee();

    // Recalculate on window resize
    window.addEventListener('resize', () => {
        populateMarquee();
        animateMarquee();
    });
}

for (let id in scheduleBrands) {
    createMarquee(id, scheduleBrands[id]);
}