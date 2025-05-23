import mymovie1 from '/img/mymovies1.jpg';
import mymovie2 from '/img/mymovies2.jpg';
import pokedex1 from '/img/pokedex1.jpg';
import pokedex2 from '/img/pokedex2.jpg';
import newsify1 from '/img/newsify1.jpg';
import newsify2 from '/img/newsify2.jpg';
import dogs1 from '/img/doggydogs1.jpg';
import dogs2 from '/img/doggydogs2.jpg';

export default function scroll() {
    // Create the section element
    let sectionEl = document.createElement("section");
    sectionEl.className = "scroll";
    sectionEl.id = "component__projects"
    sectionEl.tabIndex = 0;

    // Add HTML content
    sectionEl.innerHTML = `
                <section class="scroll__container">
                    <section class="scroll__track">

                    <article class="scroll__slide">
                        <div class="scroll__content">
                        <div class="scroll__images">
                        <a href="https://ayamymovie.netlify.app/" class="scroll__link">
                            <div class="scroll__imgcontainer">
                                <img src="${mymovie2}" alt="" class="scroll__img">
                            </div>
                            
                            <div class="scroll__imgcontainer">
                                <img src="${mymovie1}" alt="" class="scroll__img">
                            </div>
                        </a>
                    </div>

                    <div class="scroll__info">
                                <a href="https://ayamymovie.netlify.app/">
                                <p class="scroll__info-text">This project focuses on list view and detail view through fetch calls using URL parameters (query strings). </p>
                                </a>
                    </div> 
                    </div>
                    
                </article>

                <article class="scroll__slide">
                    <div class="scroll__content">
                    <div class="scroll__images">
                        <a href="https://ayas-pokedex.netlify.app/" class="scroll__link">
                        <div class="scroll__imgcontainer">
                            <img src="${pokedex1}" alt="" class="scroll__img">
                        </div>
                        <div class="scroll__imgcontainer">
                            <img src="${pokedex2}" alt="" class="scroll__img">
                        </div>
                    </a>
                    </div>

                    <div class="scroll__info">
                                <a href="https://ayas-pokedex.netlify.app/">
                                <p class="scroll__info-text">This project focuses on list view and detail view through fetch calls using URL parameters (query strings). </p>
                                </a>
                    </div>
                    </div>
                </article>

                <article class="scroll__slide">
                    <div class="scroll__content">
                        <div class="scroll__images">
                    <a href="https://ayanewsify.netlify.app/" class="scroll__link">
                        <div class="scroll__imgcontainer">
                            <img src="${newsify1}" alt="" class="scroll__img">
                        </div>

                        <div class="scroll__imgcontainer">
                            <img src="${newsify2}" alt="" class="scroll__img">
                        </div>
                    </a> 
                    </div>

                    <div class="scroll__info">
                                <a href="https://ayanewsify.netlify.app/">
                                <p class="scroll__info-text">Automation, css modularization, animations, fetch calls, storage of data and uptimization of user experience. Mobile first project, ongoing project</p>
                                </a>
                            </div>
                    </div>
                    
                </article>
                <article class="scroll__slide">
                    <div class="scroll__content">
                        <div class="scroll__images">
                    <a href="https://thereactdogs.netlify.app/" class="scroll__link">
                        <div class="scroll__imgcontainer">
                            <img src="${dogs1}" alt="" class="scroll__img">
                        </div>

                        <div class="scroll__imgcontainer">
                            <img src="${dogs2}" alt="" class="scroll__img">
                        </div>
                    </a> 
                    </div>

                    <div class="scroll__info">
                                <a href="https://thereactdogs.netlify.app/">
                                <p class="scroll__info-text">Automation, css modularization, animations, fetch calls, and uptimization of user experience. Mobile first project, scalable for all phones, even tablet. React focused.</p>
                                </a>
                            </div>
                    </div>
                    </article>

                </section>
                <button class="scroll__nav scroll__left" id="prev-btn">&lt;&lt;</button>
                <button class="scroll__nav scroll__right" id="next-btn">&gt;&gt;</button>
            </section>
        `;

    // Return the section element first to make sure it gets into the DOM
    setTimeout(() => {
        // Now that the element is in the DOM, initialize the carousel
        initCarousel(sectionEl.id);
    }, 500);

    return sectionEl;
}

// This function will be called after the section is in the DOM
function initCarousel(carouselId) {
    const sectionEl = document.getElementById(carouselId);
    if (!sectionEl) {
        console.error('Carousel element not found');
        return;
    }

    console.log('Initializing carousel for', carouselId);

    // Selection of elements
    const track = sectionEl.querySelector('.scroll__track');
    const slides = Array.from(sectionEl.querySelectorAll('.scroll__slide'));
    const prevBtn = sectionEl.querySelector('#prev-btn');
    const nextBtn = sectionEl.querySelector('#next-btn');

    // Store the original slides count 
    const slideCount = slides.length;
    console.log('Found', slideCount, 'slides');

    if (slideCount === 0) {
        console.error('No slides found');
        return;
    }

    // Clone slides
    // Clone slides to append at the end
    slides.forEach((slide) => {
        const clone = slide.cloneNode(true);
        track.appendChild(clone);
    });

    // Clone slides to prepend at the beginning
    slides.forEach((slide) => {
        const clone = slide.cloneNode(true);
        track.insertBefore(clone, track.firstChild);
    });

    // Get updated slides after cloning
    const allSlides = sectionEl.querySelectorAll('.scroll__slide');
    console.log('After cloning, found', allSlides.length, 'slides');

    // Initialize with the original slides (not the clones)
    let slideIndex = slideCount; // Start at the first original slide
    let slideWidth = slides[0].offsetWidth;
    console.log('Slide width:', slideWidth);
    let isTransitioning = false;

    // Position track at first slide
    function initPosition() {
        console.log('Initializing position, index:', slideIndex, 'width:', slideWidth);
        track.style.transition = 'none';
        track.style.transform = `translateX(${-slideWidth * slideIndex}px)`;
        // Force reflow
        track.offsetHeight;
        console.log('Initial transform:', track.style.transform);
    }

    function updatePosition() {
        console.log('Updating position to index:', slideIndex, 'width:', slideWidth);
        track.style.transform = `translateX(${-slideWidth * slideIndex}px)`;
        console.log('New transform:', track.style.transform);
    }

    function handleResize() {
        slideWidth = slides[0].offsetWidth;
        console.log('Resize detected, new width:', slideWidth);
        updatePosition();
    }

    function nextSlide(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }

        if (isTransitioning) return;

        console.log('Next slide function called');
        isTransitioning = true;

        slideIndex++;
        track.style.transition = 'transform 0.5s ease-in-out';
        updatePosition();

        // Reset to original position if we've reached the end clones
        if (slideIndex >= slideCount * 2) {
            setTimeout(() => {
                track.style.transition = 'none';
                slideIndex = slideCount;
                updatePosition();
                isTransitioning = false;
            }, 500);
        } else {
            setTimeout(() => {
                isTransitioning = false;
            }, 500);
        }
    }

    function prevSlide(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }

        if (isTransitioning) return;

        console.log('Previous slide function called');
        isTransitioning = true;

        slideIndex--;
        track.style.transition = 'transform 0.5s ease-in-out';
        updatePosition();

        // Reset to original position if we've reached the beginning clones
        if (slideIndex < slideCount) {
            setTimeout(() => {
                track.style.transition = 'none';
                slideIndex = slideCount * 2 - 1;
                updatePosition();
                isTransitioning = false;
            }, 500);
        } else {
            setTimeout(() => {
                isTransitioning = false;
            }, 500);
        }
    }

    // Make functions available globally in case needed
    window.carouselFunctions = {
        next: nextSlide,
        prev: prevSlide
    };

    // Add click handlers to buttons using only addEventListener
    if (prevBtn) {
        console.log('Adding click handler to prev button');
        prevBtn.addEventListener('click', prevSlide);
    } else {
        console.error('Prev button not found');
    }

    if (nextBtn) {
        console.log('Adding click handler to next button');
        nextBtn.addEventListener('click', nextSlide);
    } else {
        console.error('Next button not found');
    }

    // Keyboard navigation
    function handleKeyDown(e) {

        e.preventDefault();
        console.log('Key pressed:', e.key);
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    }

    sectionEl.addEventListener('keydown', handleKeyDown);

    // Handle resize
    window.addEventListener('resize', handleResize);

    // Initialize position
    console.log('Initializing carousel position');
    initPosition();
}