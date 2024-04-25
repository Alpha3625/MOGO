document.addEventListener("DOMContentLoaded", function () {
  // const header = document.getElementById("header");
  const main = document.getElementById("main").offsetHeight;
  // let scrollOffset = window.pageYOffset;



  // Fixed Header
  window.onscroll = function showHeader() {
    let header = document.getElementById("header");

    if (window.pageYOffset > 50) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  }



  // Smooth scroll
  const scrollLinks = document.querySelectorAll("[data-scroll]");

  scrollLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const blockId = this.getAttribute("data-scroll");
      const blockOffset = document.querySelector(blockId).offsetTop;

      document.querySelectorAll("#nav a").forEach(function (navLink) {
        navLink.classList.remove("active");
      });
      this.classList.add("active");

      window.scrollTo({
        top: blockOffset,
        behavior: "smooth",
      });
    });
  });




  // Menu nav toggle
  const navToggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("nav");

  navToggle.addEventListener("click", function (event) {
    event.preventDefault();

    this.classList.toggle("active");
    nav.classList.toggle("active");
  });



  // Collapse
  const collapseLinks = document.querySelectorAll("[data-collapse]");

  collapseLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const blockId = this.getAttribute("data-collapse");
      const accordionHeaders = document.querySelectorAll(".accordion__header::after");
      accordionHeaders.forEach(function (header) {
        header.classList.toggle("active");
      });
      this.classList.add("active");
      const block = document.querySelector(blockId);
      block.style.display = block.style.display === "none" ? "block" : "none";
    });
  });




  // Slider
  const slider = document.querySelector('.single-item');
  if (slider) {
    new Glide(slider, {
      type: 'slider',
      startAt: 0,
      perView: 1,
      autoplay: 5000,
    }).mount();
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion');
  
  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.accordion__control');
      const content = self.querySelector('.accordion__content');

      control.classList.toggle('active');
      content.classList.toggle('active');

      if (self.classList.contains('active')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
});





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

// Прозрачность по умолчанию
sliderBtnPrev.style.opacity = 0.5;
sliderBtnNext.style.opacity = 1;

// Функции ==================
// Задает нужную ширину картинки и sliderLine
function showSlide() {
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');

    rollSlider();
}
showSlide();

// Перелистывает слайд вперед
function nextSlide() {
    sliderCount++;
    
    if(sliderCount > sliderImages.length - 1) {
        sliderCount -= 1;
    }

    // Изменение стиля кнопки "sliderBtnNext", если достигли последнего слайда
    if(sliderCount === sliderImages.length - 1) {
        sliderBtnNext.style.opacity = 0.5;
    }

    // Изменение стиля кнопки "sliderBtnPrev", если переключились с первого слайдера
    if (sliderImages.length !== 0) {
        sliderBtnPrev.style.opacity = 1;
    }

    rollSlider();
    thisSlide(sliderCount);
}

// Перелистывает слайд назад
function prevSlide() {
    sliderCount--;

    if(sliderCount < 0) {
        sliderCount += 1;
    }

    // Изменение стиля кнопки "sliderBtnPrev", если достигли первого слайда
    if (sliderCount === 0) {
        sliderBtnPrev.style.opacity = 0.5;
    }

    // Возврат стиля кнопки "sliderBtnNextt" при возврате назад с последнего слайда
    if (sliderCount !== sliderImages.length - 1) {
        sliderBtnNext.style.opacity = 1;
    }

    rollSlider();
    thisSlide(sliderCount);
}

// Задает шаг перемещения слайдов
function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

// Указывает как слайд по счету активен
function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('active-dot'));
    sliderDots[index].classList.add('active-dot');
}

// Вешает клик на dot
sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderCount);
    })
})


// Модальное окно с формой
const openModal = document.getElementById('open-modal'),
    closeModal = document.getElementById('close-modal'),
    modal = document.getElementById('modal');

openModal.onclick = () => {
    modal.style.display = "block";
}

closeModal.onclick = () => {
    modal.style.display = "none";
}






let sliders = document.querySelectorAll('.slider');
// sliders - список всех элементов с классом class="slider"
// sliders[0] — первый элемент, sliders[1] — второй, sliders[i] — i-тый.

for (let i = 0; i < sliders.length; i++) {
  // Перебирает все, вызывает функцию для каждого.
  init_slider(sliders[i]);
}

function init_slider(slider) {
  // Значение slider: Очередной sliders[i], переданный при вызове функции.
  
  let slide = slider.querySelectorAll('.slide');
  // Вместо document.query... Получается список всех class="slide"
  // которые находятся где-то внутри текущего элемента slider.
  
  let next = slider.querySelector('.next');
  // Кнопка next внутри этого slider.
  
  let i = 0;
  // Номер текущего "открытого" слайда.
  
  next.addEventListener('click', function() {
    slide[i].classList.remove('block');
    // slide[i] - открытый слайд. Скрываем.
    
    i = (i + 1) % slide.length; // (*1)
    
    slide[i].classList.add('block');
    // slide[i] - следующий слайд. Показываем.
  });  
}