export function accordion() {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(el => {
        el.addEventListener('click', (e) => {
            const self = e.currentTarget;
            const control = self.querySelector('.accordion__control');
            const content = self.querySelector('.accordion__content');

            control
                .classList
                .toggle('active');
            content
                .classList
                .toggle('active');

            // if (self.classList.contains('active')) {
            //     control.setAttribute('aria-expanded', true);
            //     content.setAttribute('aria-hidden', false);
            //     content.style.maxHeight = content.scrollHeight + 'px';
            // }
        });
    });
}