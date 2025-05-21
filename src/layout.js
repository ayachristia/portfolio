import backgroundVid from "/img/vecteezy_animated-flying-through-the-stars-and-blue-nebula-in-space_8078506.mp4"
export default function layout() {

    document.body.classList.add('loading');
    // Opret og indsæt video-elementet
    const videoElement = document.createElement('video');
    videoElement.className = 'video-background';
    videoElement.autoplay = true;
    videoElement.muted = true;
    videoElement.loop = true;
    videoElement.playsInline = true; // Tilføj denne linje
    videoElement.innerHTML = `<source src="${backgroundVid}" type="video/mp4">`;
    document.body.prepend(videoElement);

    // Opret og indsæt wrapper og andre elementer
    const wrapperDiv = document.createElement('div');
    wrapperDiv.className = 'wrapper';
    wrapperDiv.innerHTML = `
        <header class="site__header"></header>
        <main></main>
        <footer></footer>
    `;
    document.body.appendChild(wrapperDiv);

    // Konfigurer video-afspilningen direkte på videoElement
    videoElement.playbackRate = 0.8;
    videoElement.addEventListener('loadedmetadata', () => {
        videoElement.currentTime = 6;
    });
    videoElement.addEventListener('timeupdate', () => {
        if (videoElement.currentTime >= 15) {
            videoElement.currentTime = 6;
            videoElement.play();
        }
    });

    // Fjerner loading klassen når videoen er klar
    videoElement.addEventListener('loadeddata', () => {
        // Tilføj loaded klassen til video
        videoElement.classList.add('loaded');

        // Fjern loading klassen fra body
        window.requestAnimationFrame(() => {
            document.body.classList.remove('loading');
        });
    });

    // Backup timeout, hvis video ikke indlæses korrekt
    setTimeout(() => {
        videoElement.classList.add('loaded');
        document.body.classList.remove('loading');
    }, 1500);
}