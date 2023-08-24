const slides = document.querySelector('.slides');
const slideImg = document.querySelectorAll('.slides li');
const slideCount = slideImg.length;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentIdx = 1; 

slides.appendChild(slideImg[0].cloneNode(true));
slides.prepend(slideImg[slideCount - 1].cloneNode(true));

const slideWidth = slideImg[0].clientWidth;
const slideMargin = 100;

slides.style.width = (slideWidth + slideMargin) * (slideCount + 2) + 'px';
slides.style.transform = `translateX(-${(slideWidth + slideMargin) * currentIdx}px)`;

function moveSlide(num) {
    slides.style.transition = 'transform 0.5s ease-out';
    slides.style.transform = `translateX(-${(slideWidth + slideMargin) * (num)}px)`;
    currentIdx = num;
}

slides.addEventListener('transitionend', () => {
    if (currentIdx === 0) {
        slides.style.transition = 'none';
        slides.style.transform = `translateX(-${(slideWidth + slideMargin) * (slideCount)}px)`;
        currentIdx = slideCount;
    } else if (currentIdx === slideCount + 1) {
        slides.style.transition = 'none';
        slides.style.transform = `translateX(-${(slideWidth + slideMargin)}px)`;
        currentIdx = 1;
    }
});

prev.addEventListener('click', function () {
    moveSlide(currentIdx - 1);
});

next.addEventListener('click', function () {
    moveSlide(currentIdx + 1);
});

function autoSlide() {
    moveSlide(currentIdx + 1);
}
setInterval(autoSlide, 4000);



const imageContainers = document.querySelectorAll('.image-container');
const modals = document.querySelectorAll('.modal');

imageContainers.forEach((container, index) => {
    const modal = modals[index];

    container.addEventListener('mouseover', () => {
        modal.style.display = 'block';
    });

    container.addEventListener('mouseout', () => {
        modal.style.display = 'none';
    });
});

function openPopup() {
    var popupURL = "NLIbook.html";
    var windowName = "popupWindow";
    var windowFeatures = 'width=550,height=600,scrollbars=yes';
    window.open(popupURL, windowName, windowFeatures)
};