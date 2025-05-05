import backgroundVid from "./img/vecteezy_animated-flying-through-the-stars-and-blue-nebula-in-space_8078506.mp4"

export default function layout() {
    const body = document.querySelector('body')
    body.innerHTML = `
    <video autoplay muted loop class="video-background">
        <source src="${backgroundVid}" type="video/mp4">
    </video>

    <div class="wrapper">
        <header></header>
        <main></main>
        <footer></footer>
    </div>`

    const video = document.querySelector('.video-background')
    video.playbackRate = 0.8;

    video.addEventListener('loadedmetadata', () => {
        video.currentTime = 6;
    })
    video.addEventListener('timeupdate', () => {
        if (video.currentTime >= 15) {
            video.currentTime = 6;
            video.play();
        }
    });
}
