const model = document.querySelector('.model');
const model2 = document.querySelector('.model2');
const model3 = document.querySelector('.model3');
const model4 = document.querySelector('.model4');
const btnCloseModel = document.querySelector('.close-model');
const btnCloseModel2 = document.querySelector('.close-model2');
const btnCloseModel3 = document.querySelector('.close-model3');
const btnCloseModel4 = document.querySelector('.close-model4');
const btnsOpenModel = document.querySelectorAll('.show-model');
const btnsOpenModel2 = document.querySelectorAll('.show-model2');
const btnsOpenModel3 = document.querySelectorAll('.show-model3');
const btnsOpenModel4 = document.querySelectorAll('.show-model4');

const openModel = function() {
    model.classList.remove('hidden');
};
const openModel2 = function() {
    model2.classList.remove('hidden');
};
const openModel3 = function() {
    model3.classList.remove('hidden');
};
const openModel4 = function() {
    model4.classList.remove('hidden');
};

const closeModel = function() {
    model.classList.add('hidden');
};
const closeModel2 = function() {
    model2.classList.add('hidden');
};
const closeModel3 = function() {
    model3.classList.add('hidden');
};
const closeModel4 = function() {
    model4.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModel.length; i++)
    btnsOpenModel[i].addEventListener('click', openModel);

for (let i = 0; i < btnsOpenModel2.length; i++)
    btnsOpenModel2[i].addEventListener('click', openModel2);

for (let i = 0; i < btnsOpenModel3.length; i++)
    btnsOpenModel3[i].addEventListener('click', openModel3);

for (let i = 0; i < btnsOpenModel4.length; i++)
    btnsOpenModel4[i].addEventListener('click', openModel4);

btnCloseModel.addEventListener('click', closeModel);
btnCloseModel2.addEventListener('click', closeModel2);
btnCloseModel3.addEventListener('click', closeModel3);
btnCloseModel4.addEventListener('click', closeModel4);

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
}

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 1000); // Change image every 2 seconds
}

// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName('mySlides');
//   let dots = document.getElementsByClassName('dot');
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].getElementsByClassName.display = 'none';
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(' active', '');
//   }
//   slides[slideIndex - 1].style.display = 'block';
//   dots[slideIndex - 1].className += ' active';
// }