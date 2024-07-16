export function initializeSlider() {
  let buttonsNext = document.querySelectorAll("button.btnNext");
  let buttonsPrev = document.querySelectorAll("button.btnPrev");
  const buttons = [...buttonsNext, ...buttonsPrev];

  // циклом проходимся по каждой кнопке
  buttons.forEach(function (button) {
    // Объявляем событие нажатия на кнопку
    button.addEventListener("click", function (evt) {
      // находим "блок" слайдера
      let block = evt.target.closest('.slider'),
        // для ранее найденного блока берём все слайды
        slides = block.querySelectorAll('.slide'),
        // находим индекс активного слайда
        currentIndex = [...slides].indexOf(block.querySelector('.slide.block'));

      // находим индекс следующего и предыдущего слайда
      let nextIndex = currentIndex < (slides.length - 1) ? currentIndex + 1 : currentIndex;
      let prevIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex;

      // удаляем класс у текущего слайда
      slides[currentIndex].classList.remove("block");
      // добавляем класс следующему или предыдущему слайду в зависимости от кнопки
      if (button.classList.contains('btnNext')) {
        slides[nextIndex].classList.add("block");
      } else {
        slides[prevIndex].classList.add("block");
      }
    });
  });
}