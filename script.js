
// Исходные данные по слайдеру (const)
const sliderImages = document.querySelectorAll('.slider__img'),
    sliderLine = document.querySelector('.slider__line'),
    sliderDots = document.querySelectorAll('.slider__dot'),
    sliderBtnNext = document.querySelector('.slider__btn-next'),
    sliderBtnPrev = document.querySelector('.slider__btn-prev');
        
// Переменные    
let sliderCount = 0,
    sliderWidth;

// Адаптивность слайдера
window.addEventListener('resize', showSlide);

// Кнопки листания слайдов вперед и назад
sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);

// Автоматическое перелистывание слайдов
//setInterval(() => {
  // nextSlide()
 //}, 3000);


// Функции ==================
// Задает нужную ширину картинки и sliderLine
function showSlide() {
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');

    rollSlider();
}
showSlide();

function sliderMy(){
    for (let i=0; i < sliderImages.length; i++){
        sliderImages[i].classList.add('opacity0');
    }
    sliderImages[sliderCount].classList.remove('opacity0');
}


// Перелистывает слайд вперед
function nextSlide() {
    //sliderCount++;
    //if (sliderCount >= sliderImages.length) sliderCount = 0;
    if (sliderCount + 1 == sliderImages.length){
        sliderCount = 0;
    } else{
        sliderCount++;
    }

    rollSlider();
    thisSlide(sliderCount);
    sliderMy();
}

//кликает по картинке
sliderLine.onclick = nextSlide; 


// Перелистывает слайд назад
function prevSlide() {
    //sliderCount--;
    //if (sliderCount < 0) sliderCount = sliderImages.length -1;
    if (sliderCount - 1 == -1){
        sliderCount = sliderImages.length -1;
    } else{
        sliderCount--;
    }

    rollSlider();
    thisSlide(sliderCount);
    sliderMy();
}

// Задает шаг перемещения слайдов
function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

// Указывает какой слайд по счету активен
function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('active-dot'));
    sliderDots[index].classList.add('active-dot');
 sliderMy();
}

// Вешает клик на dot
sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderCount);
    })
})