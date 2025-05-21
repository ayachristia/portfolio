import mymovie1 from '/img/mymovies1.jpg';
import mymovie2 from '/img/mymovies2.jpg';
import pokedex1 from '/img/pokedex1.jpg';
import pokedex2 from '/img/pokedex2.jpg';
import newsify1 from '/img/newsify1.jpg';
import newsify2 from '/img/newsify2.jpg';

export default function carousel() {
    //dom carousel for projects
    const container = document.createElement('section')
    container.className = "carouselContainer"
    container.id = "component__projects"
    container.innerHTML = `
    <div class="carouselContainer__carouselSpot"></div>
                
                <div class="carousel">
                    <figure class="carousel__slide">
    
                        <div class="carousel__images">
                            <a href="https://ayamymovie.netlify.app/" class="carousel__link">
                                <div class="carousel__imgcontainer">
                                    <img src="${mymovie2}" alt="" class="carousel__img">
                                </div>
                                <div class="carousel__imgcontainer">
                                        <img src="${mymovie1}" alt="" class="carousel__img">
                                </div>
                            </a>
                        </div>
    
                        <div class="carousel__info">
                            <a href="https://ayamymovie.netlify.app/">
                            <p class="carousel__info-text">This project focuses on list view and detail view using URL parameters (query strings). </p>
                            </a>
                        </div>
                    </figure>
                    <figure class="carousel__slide">
                        <div class="carousel__images">
                            <a href="https://ayas-pokedex.netlify.app/" class="carousel__link">
                                <div class="carousel__imgcontainer">
                                    <img src="${pokedex1}" alt="" class="carousel__img">
                                </div>
                                <div class="carousel__imgcontainer">
                                        <img src="${pokedex2}" alt="" class="carousel__img">
                                </div>
                            </a>
                        </div>
                        <div class="carousel__info">
                            <a href="https://ayas-pokedex.netlify.app/">
                            <p class="carousel__info-text">This project focuses on list view and detail view using URL parameters (query strings). </p>
                            </a>
                        </div>
                    </figure>
                    <figure class="carousel__slide">
                        <div class="carousel__images">
                            <a href="https://ayanewsify.netlify.app/" class="carousel__link">
                                <div class="carousel__imgcontainer">
                                    <img src="${newsify1}" alt="" class="carousel__img">
                                </div>
                                <div class="carousel__imgcontainer">
                                        <img src="${newsify2}" alt="" class="carousel__img">
                                </div>
                            </a>
                        </div>
                        <div class="carousel__info">
                            <a href="https://ayanewsify.netlify.app/">
                            <p class="carousel__info-text">Automation, css modularization, animations, storage of data and uptimization of user experience. Mobile first project, ongoing project</p>
</a>
                        </div>
                    </figure>
    
                    <div class="carousel__nav">
                        <div class="carousel__dots">
                            <span class="carousel__dot active"></span>
                            <span class="carousel__dot"></span>
                            <span class="carousel__dot"></span>
                        </div>
                    </div>
    
                    <div class="carousel__buttons">
                        <button class="carousel__left">&#10094</button>
                        <button class="carousel__right">&#10095</button>
                    </div>
                </div>
        `

    //funktionality
    const dots = container.querySelectorAll('.carousel__dot')
    const slides = container.querySelectorAll('.carousel__slide')
    const left = container.querySelector('.carousel__left')
    const right = container.querySelector('.carousel__right')

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlides(index);
        });
    });

    left.addEventListener('click', () => {
        plusSlides(-1)
    })
    right.addEventListener('click', () => {
        plusSlides(1)
    })

    let slideIndex = 0;

    showSlides(slideIndex)

    function hideAllSlides() {
        slides.forEach((slide) => {
            slide.style.display = 'none';
        })
    }

    function plusSlides(n) {
        showSlides((slideIndex += n))
    }

    function updateActiveDot(n) {
        dots.forEach((dot) => {
            dot.classList.remove('active')
        })
        dots[n].classList.add('active')
    }

    function showSlides(n) {
        if (n >= slides.length) {
            slideIndex = 0;
        }
        else if (n < 0) {
            slideIndex = slides.length - 1;
        }
        else {
            slideIndex = n;
        }

        hideAllSlides()
        updateActiveDot(slideIndex)

        slides[slideIndex].style.display = 'block';
    }

    const carouselItems = container.querySelectorAll('.carousel__slide')
    console.log(carouselItems);
    const carouselSpot = container.querySelector('.carouselContainer__carouselSpot')
    console.log(carouselSpot);


    const infoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                carouselSpot.innerHTML = ''
                const info = entry.target.querySelector('.carousel__info')
                if (info) {
                    const clone = info.cloneNode(true);
                    clone.style.display = "block"
                    carouselSpot.appendChild(clone)
                }
            }
        })
    }, {
        root: container.querySelector('.carousel'),
        threshold: 0.6,
    })
    carouselItems.forEach(item => infoObserver.observe(item))

    return container;

}