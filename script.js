//Script para o carousel
const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let atualSlide = 0;

function hideSlider(){
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
    slider[atualSlide].classList.add('on')
}

function nextSlider() {
    hideSlider()
    if (atualSlide === slider.length -1) {    
        atualSlide = 0
    } else {
        atualSlide++
    }
    showSlider()
}

function prevSlider() {
    hideSlider()
    if (atualSlide === 0) {    
        atualSlide = slider.length -1
    } else {
        atualSlide--
    }
    showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

console.log(slider);